import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Credit } from 'src/app/model/credit';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit, OnDestroy {
  title: string = 'Credit List';
  credits: Credit[] | undefined;
  subscription!: Subscription;

  constructor(private creditSvc: CreditService) {}

  ngOnInit(): void {
    this.subscription = this.creditSvc.list().subscribe((resp) => {
      this.credits = resp;
    });
  }

  delete(id: number): void {
    this.subscription = this.creditSvc.delete(id).subscribe({
      next: () => {
        // refresh credit list.
        this.subscription = this.creditSvc.list().subscribe((resp) => {
          this.credits = resp;
          // add code to loop thru credits and populate the movie and actor for each
        });
      },
      error: (err) => {
        console.error('Error deleting credit for id:' + id);
        alert('Error deleting credit for id:' + id);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

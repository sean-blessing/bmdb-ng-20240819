import { Component } from '@angular/core';
import { Credit } from 'src/app/model/credit';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent {
  title: string = 'Credit List';
  credits: Credit[] | undefined;

  ngOnInit(): void {
    this.credits = [
      // new Credit(1, 'Jim', 'Neighbors', 'M', new Date(1900, 5, 5)),
      // new Credit(2, 'Gina', 'Shelly', 'F', new Date(1998, 10, 31)),
    ];
  }

  delete(idx: number): void {
    this.credits?.splice(idx, 1);
  }
}

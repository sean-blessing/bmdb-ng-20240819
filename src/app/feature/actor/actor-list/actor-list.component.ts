import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actor } from 'src/app/model/actor';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css'],
})
export class ActorListComponent implements OnInit {
  title: string = 'Actor List';
  actors: Actor[] | undefined;
  subscription!: Subscription;

  constructor(private actorSvc: ActorService) {}

  ngOnInit(): void {
    this.subscription = this.actorSvc.list().subscribe((resp) => {
      this.actors = resp;
    });
  }

  delete(id: number): void {
    this.subscription = this.actorSvc.delete(id).subscribe({
      next: () => {
        // refresh actor list.
        this.subscription = this.actorSvc.list().subscribe((resp) => {
          this.actors = resp;
        });
      },
      error: (err) => {
        console.error('Error deleting actor for id:' + id);
        alert('Error deleting actor for id:' + id);
      },
    });
  }
}

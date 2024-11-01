import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css'],
})
export class ActorListComponent implements OnInit {
  title: string = 'Actor List';
  actors: Actor[] | undefined;

  ngOnInit(): void {
    this.actors = [
      new Actor(1, 'Jim', 'Neighbors', 'M', new Date(1900, 5, 5)),
      new Actor(2, 'Gina', 'Shelly', 'F', new Date(1998, 10, 31)),
    ];
  }

  delete(idx: number): void {
    this.actors?.splice(idx, 1);
  }
}

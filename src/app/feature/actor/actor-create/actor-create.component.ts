import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Actor } from 'src/app/model/actor';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit, OnDestroy{
  title: string = 'Actor Create';
  newActor: Actor = new Actor();
  subscription!: Subscription;
  genders: string[] = ["M", "F"];

  constructor(private actorSvc: ActorService, private router: Router) {}

  ngOnInit(): void {}

  addActor() {
    this.subscription = this.actorSvc.add(this.newActor).subscribe((resp) => {
      this.router.navigateByUrl('/actor-list');
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

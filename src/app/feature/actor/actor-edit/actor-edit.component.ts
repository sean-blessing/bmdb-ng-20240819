import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Actor } from 'src/app/model/actor';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit, OnDestroy{
  title: string = 'Actor Edit';
  actorId!: number;
  actor!: Actor;
  subscription!: Subscription;

  constructor(
    private actorSvc: ActorService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get id from the url
    this.actRoute.params.subscribe((parms) => {
      this.actorId = parms['id'];
    });

    // get the actor for the id
    this.subscription = this.actorSvc.getById(this.actorId).subscribe({
      next: (resp) => {
        this.actor = resp;
      },
      error: (err) => {
        console.log('Error retrieving actor: ', err);
      },
    });
  }

  save() {
    this.actorSvc.edit(this.actor).subscribe(
      resp => {
        this.actor = resp as Actor;
        this.router.navigateByUrl("/actor-list");
      },
      err => { console.log(err); }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

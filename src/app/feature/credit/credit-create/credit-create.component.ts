import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Actor } from 'src/app/model/actor';
import { Credit } from 'src/app/model/credit';
import { Movie } from 'src/app/model/movie';
import { ActorService } from 'src/app/service/actor.service';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css'],
})
export class CreditCreateComponent implements OnInit, OnDestroy {
  title: string = 'Credit Create';
  newCredit: Credit = new Credit();
  subscription!: Subscription;
  movies: Movie[] = [];
  actors: Actor[] = [];

  constructor(
    private creditSvc: CreditService,
    private movieSvc: MovieService,
    private actorSvc: ActorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //populate list of movies
    this.subscription = this.movieSvc.list().subscribe({
      next: (resp) => {
        this.movies = resp;
      },
      error: (err) => {
        console.error(
          'Credit Create Error: error loading movies.' + err.message
        );
      },
    });
    //populate list of actors
    this.subscription = this.actorSvc.list().subscribe({
      next: (resp) => {
        this.actors = resp;
      },
      error: (err) => {
        console.error(
          'Credit Create Error: error loading actors.' + err.message
        );
      },
    });
  }

  addCredit() {
    this.subscription = this.creditSvc.add(this.newCredit).subscribe({
      next: (resp) => {
        this.router.navigateByUrl('/credit-list');
      },
      error: (err) => {
        console.error('Error creating credit: ' + err.message);
      },
    });
  }
  
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

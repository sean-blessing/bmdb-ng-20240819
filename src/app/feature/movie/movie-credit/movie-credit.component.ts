import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Credit } from 'src/app/model/credit';
import { Movie } from 'src/app/model/movie';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-credit',
  templateUrl: './movie-credit.component.html',
  styleUrls: ['./movie-credit.component.css']
})
export class MovieCreditComponent implements OnInit, OnDestroy{
  title: string = "Movie Credits";
  movie?: Movie;
  movieId!: number;
  credits?: Credit[];
  subscription?: Subscription;

  constructor(private movieSvc: MovieService,
              private creditSvc: CreditService,
              private router: Router,
              private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get movieId from URL
    // get the movie for movieId
    this.subscription = this.actRoute.params.subscribe({
      next: (parms) => {
        this.movieId = parms['movieId'];
        this.movieSvc.getById(this.movieId).subscribe({
          next: (resp) => {
            this.movie = resp;
          },
          error: (err) => {
            console.error("MovieCredits: Error getting movie for id: "+this.movieId);
          }
        });
        // get credits for the movie
        this.subscription = this.creditSvc.getByMovieId(this.movieId).subscribe({
          next: (resp) => {
            this.credits = resp;
          },
          error: (err) => {
            console.error("MovieCredits: Error getting credits for movieId: "+this.movieId);
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    
  }

  

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  title: string = 'Movie Edit';
  movieId!: number;
  movie!: Movie;
  subscription!: Subscription;

  constructor(
    private movieSvc: MovieService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((parms) => {
      this.movieId = parms['id'];
    });

    this.subscription = this.movieSvc.getById(this.movieId).subscribe({
      next: (resp) => {
        this.movie = resp;
      },
      error: (err) => {
        console.log('Error retrieving movie: ', err);
      },
    });
  }

  delete() {
    this.movieSvc.delete(this.movieId).subscribe(
      resp => {
        this.movie = resp as Movie;
        this.router.navigateByUrl('/movie-list');
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

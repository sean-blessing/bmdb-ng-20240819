import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
})
export class MovieCreateComponent implements OnInit, OnDestroy {
  title: string = 'Movie Create';
  newMovie: Movie = new Movie();
  subscription!: Subscription;
  ratings: string[] = ['G', 'PG', 'PG-13', 'R', 'NC-17'];

  constructor(private movieSvc: MovieService, private router: Router) {}

  ngOnInit(): void {}

  addMovie() {
    this.subscription = this.movieSvc.add(this.newMovie).subscribe((resp) => {
      // redirect to movie-list component
      this.router.navigateByUrl('/movie-list');
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

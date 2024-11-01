import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  title: string = 'Movie List';
  movies: Movie[] | undefined;
  subscription!: Subscription;

  constructor(private movieSvc: MovieService) {}

  ngOnInit(): void {
    this.subscription = this.movieSvc.list().subscribe((resp) => {
      this.movies = resp;
    });
  }

  delete(idx: number): void {
    this.movies?.splice(idx, 1);
  }
}

import { Component } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  title: string = 'Movie List';
  movies: Movie[] | undefined;

  ngOnInit(): void {
    this.movies = [
      new Movie(1,'Test Movie1', 2020, 'PG', 'Sam Baimy'),
      new Movie(2,'Test Movie2', 1991, 'PG=13', 'George Pucas'),
      new Movie(3,'Test Movie3', 2004, 'R', 'Naivin Johnson'),
      new Movie(4,'Test Movie4', 1989, 'G', 'Alec Boowin'),
      new Movie(5,'Test Movie5', 1016, 'PG', 'Sally Tally'),
    ];
  }

  delete(idx: number): void {
    this.movies?.splice(idx, 1);
  }
}

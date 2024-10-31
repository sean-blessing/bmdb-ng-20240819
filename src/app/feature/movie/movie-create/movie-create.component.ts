import { Component } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
})
export class MovieCreateComponent {
  title: string = 'Movie Create';
  newMovie: Movie = new Movie();
  movies: Movie[] = [];

  addMovie() {
    this.movies.push(this.newMovie);
    console.log('Movie Added!');
    console.log('Movies List:');
    for (let m of this.movies) {
      console.log(m.details());
    }
    this.newMovie = new Movie();
  }
}

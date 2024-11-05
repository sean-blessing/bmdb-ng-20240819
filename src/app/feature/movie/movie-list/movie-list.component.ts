import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  title: string = 'Movie List';
  movies: Movie[] | undefined;
  subscription!: Subscription;
  welcomeName: string = "";

  constructor(private movieSvc: MovieService,
              private sysSvc: SystemService
  ) {}

  ngOnInit(): void {
    this.welcomeName = this.sysSvc.loggedInUser.firstName;
    this.subscription = this.movieSvc.list().subscribe((resp) => {
      this.movies = resp;
    });
  }

  delete(id: number): void {
    this.subscription = this.movieSvc.delete(id).subscribe({
      next: () => {
        // refresh movie list.
        this.subscription = this.movieSvc.list().subscribe((resp) => {
          this.movies = resp;
        });
      },
      error: (err) => {
        console.error('Error deleting movie for id:' + id);
        alert('Error deleting movie for id:' + id);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

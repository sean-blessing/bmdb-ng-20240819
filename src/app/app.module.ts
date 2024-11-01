import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MenuComponent } from './core/menu/menu.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCreateComponent,
    NotFoundComponent,
    MenuComponent,
    ActorListComponent,
    ActorCreateComponent,
    CreditListComponent,
    CreditCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

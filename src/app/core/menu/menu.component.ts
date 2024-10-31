import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  title: string = 'BMDB';
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      new MenuItem('Movie', '/movie-list', 'Movie List'),
      new MenuItem('Other', '/dummy', 'Dummy Link'),
    ];
  }
}

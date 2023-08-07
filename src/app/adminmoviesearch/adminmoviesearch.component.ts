import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminmoviesearch',
  templateUrl: './adminmoviesearch.component.html',
  styleUrls: ['./adminmoviesearch.component.css']
})
export class AdminmoviesearchComponent {
  searchQuery: string = '';
  items: any[] = [
    { name: 'Black Adam', page: 'blackadam' },
    { name: 'The Flash', page: 'flash' },
    { name: 'Doctor Strange in the Multiverse of Madness', page: 'doctorstrange' },
    { name: 'Ant-Man and the Wasp: Quantumania', page: 'antman' },
    { name: 'Extraction 2', page: 'extraction2' },
    { name: 'Insidious: The Red Door', page: 'reddoor' },
    { name: 'Spider-Man:Across the Spider-Verse', page: 'spiderverse' },
    { name: 'Mission: Impossible - Dead Reckoning Part One', page: 'impossible' },
    { name: 'Transformers: Rise of the Beast', page: 'rise' },
    { name: 'Guardians of the Galaxy Vol.3', page: 'guardians' },
    { name: 'John Wick: Chapter 4', page: 'johnwick' },
    { name: 'Blue Beetle', page: 'beetle' },
    { name: 'The Marvels', page: 'marvels' },
    { name: 'Knights of the Zodiac', page: 'knight' },
    { name: 'Moonfall', page: 'moonfall' },
    { name: 'Thor: Love and Thunder', page: 'thor' },
    { name: 'The Northman', page: 'northman' },
    { name: 'Through My window', page: 'window' },
    { name: 'No Hard Feelings', page: 'feelings' },
    { name: 'Black Panther: Wakanda Forever', page: 'forever' },
    { name: 'Avatar: The Way of Water', page: 'avatar' },
    { name: 'The Lost City', page: 'lostcity' },
    { name: 'The Gray Man', page: 'grayman' },
    { name: 'The Adam Project', page: 'adam' },
    { name: 'Amsterdam', page: 'amster' },
    { name: 'Day Shift', page: 'dayshift' },
    { name: 'Watcher', page: 'watcher' },
    { name: 'Enola Holmes 2', page: 'holmes' },
    // Add more items here
  ];
  filteredItems: any[] = [];

  constructor(private router: Router) {}

  filterContent() {
    this.filteredItems = this.items.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  redirectToPage(item: any) {
    this.router.navigate([item.page]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  loaded: boolean = false;
  items: any;

  constructor(private itemsService: ItemsService) { 
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.loaded = false;
    this.itemsService.getItems('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        items => {
          this.items = items;
          this.loaded = true;
        }
      );
  }
  resetUsers(): void{
    this.items = [];
    this.loaded = true;
  }

}

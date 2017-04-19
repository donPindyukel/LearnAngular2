import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {
  categories: string[] = ['All', 'Category 1', 'Category 2', 'Category 3'];
  @Output()
  category: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(changes: string) {
    this.category.emit(changes);
  }

}

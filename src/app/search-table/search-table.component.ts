import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-search-table',
  standalone: true,
  imports: [
    BrowserModule, TableModule 
  ],
  templateUrl: './search-table.component.html',
  styleUrl: './search-table.component.css'
})
export class SearchTableComponent {

}

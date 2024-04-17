/*
 * Title: composer-list.component.ts
 * Author: Brock Hemsouvanh & Professor Richard Krasso
 * Date: 2024-04-10
 * Description: Composer list component for the enhanced-composer-app Angular project.
 * This component is responsible for displaying a list of composers.
 */

// Importing necessary Angular core modules and services
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface'; // Interface for composer objects
import { ComposerService } from '../composer.service'; // Service to retrieve composer data
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs'; // Import Observable from rxjs

// Component decorator with metadata including selector, template URL, and style URLs
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Property to hold an array of composers, initialized to an empty array,
  composers: Observable<IComposer[]>; // Now as Observable type
  txtSearchControl = new FormControl('');

 // Constructor injecting ComposerService to fetch composer data
 constructor(private composerService: ComposerService) {
  // Populating the composers observable with all composer data initially
  this.composers = this.composerService.getComposers();

  // Subscribe to changes in the search field with debounce to limit requests
  this.txtSearchControl.valueChanges
    .pipe(debounceTime(500))
    .subscribe(val => this.filterComposers(val));
}

// Lifecycle hook for additional initialization tasks
ngOnInit(): void {
}

// Method to filter composers based on the search input
filterComposers(name: string) {
  this.composers = this.composerService.filterComposers(name);
}
}

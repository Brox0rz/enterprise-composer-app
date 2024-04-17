 /*
 * Title: composer.service.ts
 * Author: Brock Hemsouvanh & Professor Richard Krasso
 * Date: 2024-04-10
 * Description: Composer service (Part of enterprise-composer-app Angular project)
 * This service provides a list of composers and functionality to filter composers by name.
 */

// Importing Injectable from Angular core to make this service available for dependency injection
import { Injectable } from '@angular/core';
// Importing IComposer interface to type-check our composers
import { IComposer } from './composer.interface';
// Importing Observable and of from rxjs to work with reactive programming concepts
import { Observable, of } from 'rxjs';
// Importing map from rxjs/operators to transform the data within the Observable stream
import { map } from 'rxjs/operators';

// @Injectable decorator marks this class as one that participates in the dependency injection system
@Injectable({
  providedIn: 'root'
})

export class ComposerService {
  // Property: An array of IComposer objects, representing a list of composers
  composers: Array<IComposer> = [
    { composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical" },
    { composerId: 101, fullName: "Wolfgang Amadeus Mozart", genre: "Classical" },
    { composerId: 102, fullName: "Johann Sebastian Bach", genre: "Baroque" },
    { composerId: 103, fullName: "Franz Schubert", genre: "Classical" },
    { composerId: 104, fullName: "Johannes Brahms", genre: "Romantic" },
  ];

  // getComposers(): Method to get the list of composer objects as an Observable
  getComposers(): Observable<IComposer[]> {
    return of(this.composers); // Wrapping the array of composers inside an Observable
  }

// getComposer(composerId: number): Method to find a composer by their ID
 getComposer(composerId: number): IComposer | undefined {
  return this.composers.find(composer => composer.composerId === composerId);
}

// filterComposers(name: string): Method to filter composers by name and return an Observable of the filtered array
filterComposers(name: string): Observable<IComposer[]> {
  return of(this.composers).pipe(
    map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name.toLowerCase()) > -1))
  );
}
}

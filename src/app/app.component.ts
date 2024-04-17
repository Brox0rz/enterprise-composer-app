/**
 * Title: app.component.ts
 * Author(s): Brock Hemsouvanh and Professor Richard Krasso
 * Date: 4-11-2024
 * Description: Angular root component to manage the main view of the app.
 * This component acts as the primary container for the application.
 */

// Importing Component from @angular/core to allow decoration of the class with @Component
import { Component } from '@angular/core';

// @Component decorator to define metadata for the AppComponent
@Component({
  selector: 'app-root',  // The custom HTML tag where this component will be embedded
  templateUrl: './app.component.html',  // Link to an external HTML file for the view
  styleUrls: ['./app.component.css']  // Link to an external CSS file for styling
})
export class AppComponent {
  assignment: string = 'Assignment 4.4 - Async Pipe';
}

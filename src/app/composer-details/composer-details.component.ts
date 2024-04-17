/*
 * Title: composer-details.component.ts
 * Author: Brock Hemsouvanh & Professor Richard Krasso
 * Date: 2024-04-10
 * Description: Composer details component for the enhanced-composer-app Angular project.
 * This component is responsible for displaying details of a specific composer.
 */

// Importing necessary Angular core modules and services
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface'; // Interface for composer objects
import { ComposerService } from '../composer.service'; // Service to retrieve composer data
import { ActivatedRoute } from '@angular/router'; // To access route parameters

// Component decorator with metadata including selector, template URL, and style URLs
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  // Property to hold the ID of the composer, extracted from the route parameters
  composerId: number;
  // Property to hold the composer object
  composer: IComposer;

  // Constructor injecting ActivatedRoute to access route parameters, and ComposerService to fetch composer data
  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    // Extracting the 'composerId' parameter from the URL, converting it to a number
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);
    // If a valid composerId was extracted, fetch the corresponding composer details using the service
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  // Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
  ngOnInit(): void {
    // This method is intentionally left blank as initialization logic is performed in the constructor
  }
}

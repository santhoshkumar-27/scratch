import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <h2 class="custom">
      country-list works!
    </h2>
    <p>ng g c country-list --inline-style --inline-template</p>
  `,
  styles: [
    `
    .custom {
      color: blue;
    }

    `
  ]
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

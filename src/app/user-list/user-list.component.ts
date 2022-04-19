import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
    `
    .custom {
      color: red;
    }
    `
  ]
})
export class UserListComponent implements OnInit {
  @Input() items: {name: string, age: number, accounts:string[] } =  {name: '', age: 0, accounts: ['']};
  constructor() { }

  ngOnInit(): void {
  }

}

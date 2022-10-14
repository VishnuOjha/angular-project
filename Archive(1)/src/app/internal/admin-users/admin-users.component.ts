import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  addButtonLabel: string
  heading: string
  listHeading: { id: number, name: string }[]

  constructor() { }

  ngOnInit(): void {
    this.addButtonLabel = "Admin User"
    this.heading = "Admin Users"
    this.listHeading = [
      { id: 0, name: "id" },
      { id: 1, name: "code" },
      { id: 2, name: "name" },
      { id: 3, name: "email" },
      { id: 4, name: "password" },
      { id: 5, name: 'Action' },
      { id: 5, name: "role" },
      { id: 6, name: "phone" },
      { id: 7, name: "profile" },
      { id: 8, name: "enabled/disabled" }
    ]
  }

}

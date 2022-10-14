import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  addButtonLabel: string
  listHeading: { id: number, name: string }[]
  heading: string

  constructor() { }

  ngOnInit(): void {
    this.heading = "Roles"
    this.addButtonLabel = "Role"
    this.listHeading = [
      { id: 0, name: 'id' },
      { id: 1, name: "code" },
      { id: 2, name: "name" },
      { id: 4, name: "description" },
      { id: 5, name: "enabled/disabled" },
      { id: 6, name: "Action" }
    ]
  }

}

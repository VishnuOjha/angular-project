import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  addButtonLabel: string
  listHeading: { id: number, name: String }[]
  heading: string

  constructor() { }

  ngOnInit(): void {
    this.addButtonLabel = "Action"
    this.heading = "Actions"
    this.listHeading = [
      { id: 1, name: "code" },
      { id: 2, name: "method" },
      { id: 3, name: "name" },
      { id: 4, name: "description" },
      { id: 5, name: "enabled/disabled" },
      { id: 6, name: "Action" },
    ]
  }

}

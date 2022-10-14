import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  addButtonLabel: string
  listHeading: { id: number, name: String }[]
  heading: string

  constructor() { }

  ngOnInit(): void {
    this.addButtonLabel = "Resource"
    this.heading = "Resources"
    this.listHeading = [
      { id: 0, name: 'id' },
      { id: 1, name: "code" },
      { id: 2, name: "name" },
      { id: 3, name: "application" },
      { id: 4, name: "description" },
      { id: 5, name: "Action" },
      { id: 6, name: "enabled/disabled" }
    ]
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-api',
  templateUrl: './inner-api.component.html',
  styleUrls: ['./inner-api.component.scss']
})
export class InnerApiComponent implements OnInit {

  addButtonLabel: string
  heading: string
  listHeading: { id: number, name: String }[]

  constructor() { }

  ngOnInit(): void {
    this.heading = "API"
    this.addButtonLabel = "API"
    this.listHeading = [
      { id: 0, name: 'key id' },
      { id: 1, name: "key" },
      { id: 2, name: "app" },
      { id: 3, name: "desciption" },
      { id: 4, name: "status" },
      { id: 5, name: "action" },
    ]
  }

}

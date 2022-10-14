import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {

  addButtonLabel: string
  listHeading: { id: number, name: String }[]
  heading: string

  constructor() { }

  ngOnInit(): void {
    this.heading = "Operation"
    this.addButtonLabel = "Operation"
    this.listHeading = [
      { id: 0, name: 'id' },
      { id: 1, name: "code" },
      { id: 2, name: "resource" },
      { id: 3, name: "description" },
      { id: 4, name: "enabled/disabled" },
      { id: 5, name: "Action" },
    ]
  }

}

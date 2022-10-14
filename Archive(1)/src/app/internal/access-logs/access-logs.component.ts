import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-logs',
  templateUrl: './access-logs.component.html',
  styleUrls: ['./access-logs.component.scss']
})
export class AccessLogsComponent implements OnInit {

  listHeading: { id: number, name: string }[]
  addButtonLabel: string
  heading: string

  constructor() { }

  ngOnInit(): void {
    this.addButtonLabel = "Access Log"
    this.heading = "Access Logs"
    this.listHeading = [
      { id: 0, name: "id" },
      { id: 1, name: "code" },
      { id: 2, name: "api" },
      { id: 3, name: "resource" },
      { id: 4, name: "caller" },
      { id: 5, name: "role" },
      { id: 6, name: "method" },
      { id: 7, name: "policy effect" },
      { id: 8, name: "enabled/disabled" }
    ]
  }

}

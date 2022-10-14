import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-permission',
  templateUrl: './inner-permission.component.html',
  styleUrls: ['./inner-permission.component.scss']
})
export class InnerPermissionComponent implements OnInit {

  addButtonLabel: string
  listHeading: { id: number, name: String }[]
  heading: string

  constructor() { }

  ngOnInit(): void {
    this.addButtonLabel = "Permission"
    this.heading = "Permissions"
    this.listHeading = [
      { id: 0, name: 'id' },
      { id: 1, name: "code" },
      { id: 2, name: "operation" },
      { id: 3, name: "policy" },
      { id: 4, name: "description" },
      { id: 5, name: "Action" },
      { id: 6, name: "enabled/disabled" },
    ]
  }

}

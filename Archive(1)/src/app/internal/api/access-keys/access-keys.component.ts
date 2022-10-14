import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-keys',
  templateUrl: './access-keys.component.html',
  styleUrls: ['./access-keys.component.scss']
})
export class AccessKeysComponent implements OnInit {

  addButtonLabel: string
  listHeading: { id: number, name: String }[]
  heading: string

  constructor() { }

  ngOnInit(): void {
    this.addButtonLabel = "Access Keys"
    this.heading = "Access Keys"
    this.listHeading =
      [
        { id: 0, name: 'key id' },
        { id: 1, name: "key" },
        { id: 2, name: "app" },
        { id: 3, name: "description" },
        { id: 3, name: "status" },
        { id: 4, name: "action" },
      ]
  }

}

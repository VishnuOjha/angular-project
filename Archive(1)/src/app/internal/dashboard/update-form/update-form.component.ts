import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
  optionData: { label: string, value: string }[]

  constructor() { }

  ngOnInit(): void {
    this.optionData = [{ label: "GET", value: "get" }, { label: "POST", value: "post" }, { label: "PATCH", value: "patch" }, { label: 'DELETE', value: 'delete' }]

  }

}

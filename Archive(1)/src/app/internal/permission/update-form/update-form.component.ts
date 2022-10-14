import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

  href: string = ""
  optionData: { label: string, value: string }[]

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.href = this.route.url
    this.optionData = [{ label: "role", value: "role" }, { label: "role1", value: "role1" }, { label: "role2", value: "role2" }]
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
  href: string = ""
  resourceOption: { label: string, value: string }[]
  actionOption: { label: string, value: string }[]


  constructor(private route: Router) { }

  ngOnInit(): void {
    this.href = this.route.url
    console.log('href', this.href)
    this.resourceOption = [{ label: "resource", value: "resource" }, { label: "resource1", value: "resource1" }, { label: "resource3", value: "resource2" }]

    this.actionOption = [{ label: "action", value: "action" }, { label: "action1", value: "action1" }, { label: "action3", value: "action2" }]
  }

}

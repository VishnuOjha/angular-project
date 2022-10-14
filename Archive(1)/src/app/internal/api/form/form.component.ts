import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  resourceOption: { label: string, value: string }[]
  actionOption: { label: string, value: string }[]

  href: string = ""
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.href = this.route.url
    this.resourceOption = [{ label: "resource", value: "resource" }, { label: "resource1", value: "resource1" }, { label: "resource3", value: "resource2" }]

    this.actionOption = [{ label: "action", value: "action" }, { label: "action1", value: "action1" }, { label: "action3", value: "action2" }]
  }

}

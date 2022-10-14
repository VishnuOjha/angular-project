import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() optionData: { label: string, value: string }[]
  @Input() disable: string

  constructor() { }

  ngOnInit(): void {
  }

}

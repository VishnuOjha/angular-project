import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-intenal',
  templateUrl: './internal.component.html'
})
export class InternalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    feather.replace();
  }

}

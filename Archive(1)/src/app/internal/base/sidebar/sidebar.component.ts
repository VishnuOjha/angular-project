import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  selectedUrl: string = ""

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.selectedUrl = this.route.url
  }
  selectUrlSet(url: string) {
    this.selectedUrl = this.route.url
  }

}

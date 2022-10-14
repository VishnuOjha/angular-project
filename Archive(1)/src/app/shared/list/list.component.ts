import { Component, OnInit, QueryList, ViewChildren, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from 'src/app/services/bootstrap/country';
import { CountryService } from 'src/app/services/bootstrap/country.service';
import { NgbdSortableHeader, SortEvent } from 'src/app/services/bootstrap/sortable.directive';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() listHeading: { id: number, name: String }[];
  @Input() addButtonLabel: string
  @Input() heading: string
  countries$: Observable<Country[]>;
  total$: Observable<number>;
  href: string
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  constructor(public service: CountryService, private route: Router) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
    this.href = this.route.url
  }
  ngOnInit(): void {

  }
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}

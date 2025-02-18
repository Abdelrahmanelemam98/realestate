import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { CheckboxModule } from 'primeng/checkbox';
import { CardSharedComponent } from '../../../assets/shared/card-shared/card-shared.component';
import { CommonModule } from '@angular/common';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [
    DropdownModule,
    SliderModule,
    FormsModule,
    ButtonModule,
    CardSharedComponent,
    PaginatorModule,
    CheckboxModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('closed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('open', style({ height: '*', opacity: 1 })),
      transition('closed => open', [animate('300ms ease-out')]),
      transition('open => closed', [animate('300ms ease-in')]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class PropertyListComponent implements OnInit {
  cities!: any[];
  cities2!: any[];
  cities3!: any[];
  property!: any[];
  value: number = 100;
  selectedCity: any;
  first: number = 9;
  rows: number = 9;
  advanced: boolean = false;
  colInpt = 'col-md-4';

  ngOnInit(): void {
    this.property = [
      {
        img: '../../../assets/img/property/park-house-02-460x300.jpg',
        type: 'villa',
        location: 'brookyn',
        area: '250m',
        price: '265,000 $',
        room: '3',
        bath: '3',
      },
      {
        img: '../../../assets/img/property/main-home-property-460x300.jpg',
        type: 'villa',
        location: 'brookyn',
        area: '250m',
        price: '265,000 $',
        room: '3',
        bath: '3',
      },
      {
        img: '../../../assets/img/property/main-home-property-460x300.jpg',
        type: 'villa',
        location: 'brookyn',
        area: '250m',
        price: '265,000 $',
        room: '3',
        bath: '3',
      },
      {
        img: '../../../assets/img/property/main-home-property-460x300.jpg',
        type: 'villa',
        location: 'brookyn',
        area: '250m',
        price: '265,000 $',
        room: '3',
        bath: '3',
      },
      {
        img: '../../../assets/img/property/main-home-property-460x300.jpg',
        type: 'villa',
        location: 'brookyn',
        area: '250m',
        price: '265,000 $',
        room: '3',
        bath: '3',
      },
      {
        img: '../../../assets/img/property/main-home-property-460x300.jpg',
        type: 'villa',
        location: 'brookyn',
        area: '250m',
        price: '265,000 $',
        room: '3',
        bath: '3',
      },
      {
        img: '../../../assets/img/property/park-house-02-460x300.jpg',
        type: 'villa',
        location: 'brookyn',
        area: '250m',
        price: '265,000 $',
        room: '3',
        bath: '3',
      },
      {
        img: '../../../assets/img/property/main-home-property-460x300.jpg',
        type: 'villa',
        location: 'brookyn',
        area: '250m',
        price: '265,000 $',
        room: '3',
        bath: '3',
      },
      {
        img: '../../../assets/img/property/main-home-property-460x300.jpg',
        type: 'villa',
        location: 'brookyn',
        area: '250m',
        price: '265,000 $',
        room: '3',
        bath: '3',
      },
    ];
    this.cities = [
      { name: 'Buy', code: 'NY' },
      { name: 'For Rent', code: 'RM' },
      { name: 'Sell', code: 'LDN' },
    ];
    (this.cities2 = [
      { name: 'Apartment', code: 'NY' },
      { name: 'Condos', code: 'NY' },
      { name: 'Houses', code: 'NY' },
      { name: 'Villas', code: 'Ny' },
    ]),
      (this.cities3 = [
        { name: 'Brooklyn', code: 'NY' },
        { name: 'Queens', code: 'NY' },
        { name: 'Staten Island', code: 'NY' },
        { name: 'The Bronx', code: 'Ny' },
      ]);
  }
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  get paginatedProperties(): any[] {
    return this.property.slice(this.first, this.first + this.rows);
  }
  toggleAdvanced() {
    this.advanced = !this.advanced;
  }
}

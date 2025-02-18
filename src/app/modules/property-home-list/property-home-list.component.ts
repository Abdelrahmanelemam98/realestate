import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardSharedComponent } from '../../../assets/shared/card-shared/card-shared.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-property-home-list',
  standalone: true,
  imports: [CardSharedComponent, ButtonModule, RouterModule],
  templateUrl: './property-home-list.component.html',
  styleUrl: './property-home-list.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PropertyHomeListComponent implements OnInit {
  property!: any[];
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
    ];
  }
}

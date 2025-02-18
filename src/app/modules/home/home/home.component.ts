import { Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { PropertyHomeListComponent } from '../../property-home-list/property-home-list.component';
import { ModelSpaceComponent } from '../../model-space/model-space.component';
import { HowItWorkComponent } from '../../how-it-work/how-it-work.component';
import { MakeInquiryComponent } from '../../make-inquiry/make-inquiry.component';
import { LoginComponent } from '../../../../assets/shared/login/login.component';
import { AdvancedSearchModalComponent } from '../../../../assets/shared/advanced-search-modal/advanced-search-modal.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    DropdownModule,
    MultiSelectModule,
    ButtonModule,
    PropertyHomeListComponent,
    ModelSpaceComponent,
    HowItWorkComponent,
    MakeInquiryComponent,
    LoginComponent,
    AdvancedSearchModalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  products!: any[];
  cities!: any[];
  cities2!: any[];
  responsiveOptions: any[] | undefined;
  visible: boolean = false;
  ngOnInit() {
    this.cities = [
      { name: 'Category', code: 'NY' },
      { name: 'Apartments', code: 'RM' },
      { name: 'Condos', code: 'LDN' },
      { name: 'House', code: 'IST' },
      { name: 'Villas', code: 'PRS' },
    ];
    this.cities2 = [
      { name: 'Brookly', code: 'NY' },
      { name: 'Manhattan', code: 'NY' },
      { name: 'Queens', code: 'NY' },
      { name: 'The Bronx', code: 'NY' },
    ];
    this.products = [
      { img: '../../../../assets/img/home/1.jpg' },
      { img: '../../../../assets/img/home/2.jpg' },
      { img: '../../../../assets/img/home/3.jpg' },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  closeModal() {
    this.visible = false;
  }
  showModalAdvanced() {
    this.visible = true;
  }
}

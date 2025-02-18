import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-advanced-search-modal',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SliderModule,
    DropdownModule,
  ],
  templateUrl: './advanced-search-modal.component.html',
  styleUrl: './advanced-search-modal.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AdvancedSearchModalComponent implements OnInit {
  cities!: any[];
  cities2!: any[];
  cities3!: any[];
  value: number = 100;
  selectedCity: any;
  @Input() visible!: boolean;
  @Output() close: EventEmitter<any> = new EventEmitter();
  closeModal() {
    this.close.emit();
  }
  ngOnInit(): void {
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
}

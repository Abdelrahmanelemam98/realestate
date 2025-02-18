import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CardSharedComponent } from '../../../assets/shared/card-shared/card-shared.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-broker-profile',
  standalone: true,
  imports: [
    CardSharedComponent,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './broker-profile.component.html',
  styleUrl: './broker-profile.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BrokerProfileComponent implements OnInit {
  property!: any[];
  colInpt = 'col-md-6';
  contactForm!: FormGroup;
  messageServics = inject(MessageService);
  fb = inject(FormBuilder);
  ngOnInit(): void {
    this.Forminit();
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
    ];
  }
  Forminit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }
  submit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.messageServics.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Form Contact is Invalid',
      });
    } else {
      console.log('Submit');
      this.messageServics.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Message Send SuccessFully',
      });
    }
  }
}

import { Component, inject, ViewEncapsulation } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { TooltipModule } from 'primeng/tooltip';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [
    GalleriaModule,
    TooltipModule,
    SpeedDialModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PropertyDetailsComponent {
  images!: any[];
  inquireyForm!: FormGroup;
  fb = inject(FormBuilder);
  messageServices = inject(MessageService);
  activeIndex: number = 0;
  loading: boolean = false;
  ngOnInit() {
    this.formInit();
    this.images = [
      { itemImageSrc: '../../../assets/img/home/south-sun-house03.jpg' },
      { itemImageSrc: '../../../assets/img/home/property-grid-img-3.jpg' },
      { itemImageSrc: '../../../assets/img/home/property-grid-img-5.jpg' },
      { itemImageSrc: '../../../assets/img/home/south-sun-house03.jpg' },
      { itemImageSrc: '../../../assets/img/home/property-grid-img-3.jpg' },
      { itemImageSrc: '../../../assets/img/home/property-grid-img-5.jpg' },
    ];
    this.activeIndex = this.images.length - 1;
  }

  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 },
  ];

  updateImages(event: any) {
    this.images = [...event];
  }

  formInit() {
    this.inquireyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }
  submit() {
    if (this.inquireyForm.invalid) {
      this.inquireyForm.markAsUntouched();
      this.messageServices.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid Data',
      });
    } else {
      setTimeout(() => {
        this.loading = true;
      }, 4);
      this.messageServices.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Enquiry Send SuccessFully',
      });
      this.loading = false;
      this.inquireyForm.reset();
    }
  }
}

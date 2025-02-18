import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-make-inquiry',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './make-inquiry.component.html',
  styleUrl: './make-inquiry.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MakeInquiryComponent implements OnInit {
  inquiryForm!: FormGroup;
  formbuilder: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.inquiryForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Added Validators.email
      phone: ['', Validators.required],
    });
  }
}

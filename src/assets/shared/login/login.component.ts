import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  fb = inject(FormBuilder);
  @Input() visible!: boolean;
  @Output() close: EventEmitter<any> = new EventEmitter();
  closeModal() {
    this.close.emit();
  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  loginSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    } else {
      console.log('Login Successfully ');
    }
  }
}

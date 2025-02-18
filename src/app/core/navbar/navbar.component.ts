import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from '../../../assets/shared/login/login.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, RouterModule, LoginComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  visible: boolean = false;
  closeModal() {
    this.visible = false;
  }
  showModalLogin() {
    this.visible = true;
  }
}

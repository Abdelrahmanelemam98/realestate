import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss',
})
export class MissionComponent {}

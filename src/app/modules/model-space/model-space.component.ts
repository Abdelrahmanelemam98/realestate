import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-model-space',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './model-space.component.html',
  styleUrl: './model-space.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ModelSpaceComponent {}

import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class VisionComponent {}

import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-card-shared',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    CommonModule,
    TooltipModule,
    RouterModule,
  ],
  templateUrl: './card-shared.component.html',
  styleUrl: './card-shared.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CardSharedComponent {
  @Input() property!: any;
  @Input() colInpt!: any;
}

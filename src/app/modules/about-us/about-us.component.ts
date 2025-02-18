import { Component } from '@angular/core';
import { VisionComponent } from '../vision/vision.component';
import { CountComponent } from '../count/count.component';
import { MissionComponent } from '../mission/mission.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [VisionComponent, CountComponent, MissionComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {}

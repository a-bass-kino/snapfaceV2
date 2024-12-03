import { Component, Input } from '@angular/core';
import { FaceSnap } from '../../../core/Models/snap-face';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() facesnap!: FaceSnap;

  constructor(private router: Router) {}
  
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`)
  }
}

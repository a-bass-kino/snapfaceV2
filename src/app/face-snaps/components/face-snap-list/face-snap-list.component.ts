import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/Models/snap-face';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../../../core/Services/face-snaps.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent,
    NgFor,
    AsyncPipe
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getFaceSnaps();

  }
}

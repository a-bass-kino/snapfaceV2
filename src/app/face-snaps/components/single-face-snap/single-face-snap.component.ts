import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/Models/snap-face';
import { AsyncPipe, DatePipe, NgClass, NgIf, NgStyle } from '@angular/common';
import { FaceSnapsService } from '../../../core/Services/face-snaps.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    NgIf,
    DatePipe,
    AsyncPipe,
    RouterModule
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$!: Observable<FaceSnap>;
  snapText!:string;
  userHasSnapped!:boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute ) { }

  ngOnInit() : void {
    this.prepareInterface();

    this.getFaceSnap();
  }

  onAddSnap(faceSnapId: number) {
    if (this.snapText === 'Oh Snap!') {
        this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
            tap(() => {
                this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
                this.snapText = 'Oops, unSnap!';
            })
        ).subscribe();
    } else {
        this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
            tap(() => {
                this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
                this.snapText = 'Oh Snap!';
            })
        ).subscribe();
    }
}

  snap(faceSnapId: number) : void {
    this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
      tap(() => {
        this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId)
        this.userHasSnapped = true;
        this.snapText = "Oops, un Snap!"
      })
    ).subscribe();
  }

  unSnap(faceSnapId: number) : void {
    this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
      tap(() => {
        this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId)
        this.userHasSnapped = false;
        this.snapText = "Oh Snap!"
      })
    ).subscribe();
  }

  private prepareInterface() {
    this.userHasSnapped = false;
    this.snapText = "Oh Snap!";
  }

  private getFaceSnap() {
    const snapfaceId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapfaceId);
  }

}

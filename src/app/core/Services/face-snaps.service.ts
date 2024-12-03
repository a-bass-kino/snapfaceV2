import { map, Observable, switchMap } from 'rxjs';
import { SnapType } from '../Models/snap-type.type';
import { Injectable } from "@angular/core";
import { FaceSnap } from "../Models/snap-face";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {}

  getFaceSnaps(): Observable<FaceSnap[]> {
      return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }
    
  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
    return this.getFaceSnaps().pipe(
      map(facesnaps => [...facesnaps].sort((a: FaceSnap, b: FaceSnap) => a.id - b.id)),
      map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
      map(lastFaceSnap => ({
        ...formValue,
        snaps:0,
        createdAt: new Date(),
        id: lastFaceSnap.id + 1
      })),
      switchMap(newFacesnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFacesnap))
    )
  }

  snapFaceSnapById(faceSnapId: number, snapType: SnapType): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(facesnap => ({
        ...facesnap,
        snaps:facesnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
    );
  }
}
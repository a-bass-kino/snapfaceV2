import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'create', component: NewFaceSnapComponent },
  { path: ':id', component: SingleFaceSnapComponent },
  { path: '', component: FaceSnapListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FaceSnapsModule { }

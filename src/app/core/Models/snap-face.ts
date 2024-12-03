import { SnapType } from './snap-type.type';
export class FaceSnap {

    location?: string;

    id: number;
    
    constructor(  public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public snaps: number) {
                  this.id =0;
    }

    addSnap(): void {
        this.snaps++;
      }
    
    removeSnap(): void {
       this.snaps--;
    }

    snap(snapType:SnapType): void {
      if (snapType === 'snap') {
        this.addSnap();
      }
      else if (snapType === 'unsnap') {
        this.removeSnap();
      }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FaceSnap {
      this.setLocation(location);
      return this;
    }
  }
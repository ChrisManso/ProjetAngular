import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoIdToDisplayService {
  public video0Obs: Subject<string>;
  public video1Obs: Subject<string>;

  constructor() {
    this.video0Obs = new Subject<string>();
    this.video1Obs = new Subject<string>();
  }
  public getObservable(videoId: string): Subject<string> {
    return (videoId === '0') ? this.video0Obs : this.video1Obs;
  }
  public emitVideoUrl(videoId: string, videoUrl: string): void {
    const obs = this.getObservable(videoId);
    obs.next(videoUrl);
  }
}
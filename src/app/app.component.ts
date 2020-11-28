import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  videoIdForIframe: string = "";

  // displayVideo(videoID: string) {
  //   this.videoIdForIframe = videoID;
  // }
}

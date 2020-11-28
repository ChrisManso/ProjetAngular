import { Component, ElementRef, Input, OnInit, ViewChild, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Video } from '../models/video';
import { VideoIdToDisplayService } from '../service/video-id-to-display.service';

@Component({
  selector: 'app-video-yt',
  templateUrl: './video-yt.component.html',
  styleUrls: ['./video-yt.component.css']
})
export class VideoYtComponent implements OnInit {

  @Input() videoId!: string ;
  videoUrlToDisplay: any;  
  @ViewChild('videoFrame') iframe!: ElementRef;
  private obs: Observable<string> | undefined;
  private currentVideoUrl: string = "";

  constructor( private sanitizer: DomSanitizer, private videoIdToDisplay : VideoIdToDisplayService ) {
  }

  ngOnInit(): void {
    this.obs = this.videoIdToDisplay.getObservable(this.videoId);
    this.obs.subscribe((value: string) => {
      const sanitizedUrl = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(value));
      this.currentVideoUrl = value;
      this.iframe.nativeElement.src = sanitizedUrl;
    });
  }

}

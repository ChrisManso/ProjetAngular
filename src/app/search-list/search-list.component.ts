import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../models/video';
import {VideoIdToDisplayService} from '../service/video-id-to-display.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input() videos!: Video[];
  @Input() videoId!: string;
  @Output() videoToDisplay = new EventEmitter<Video>();

  constructor(private videoIdToDisplay: VideoIdToDisplayService) { }

  ngOnInit(): void {
  }

  onClickDisplay(video: Video): void {
    this.videoIdToDisplay.emitVideoUrl(this.videoId, `https://www.youtube.com/embed/${video.videoId}`);
  }
}

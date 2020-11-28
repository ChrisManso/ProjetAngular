import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { SearchService } from '../service/search-videos.service';
import { Video } from '../models/video';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  @Input() videoId!: string;
  value: string = "";
  videos : Video[] = [];
  constructor(private searchService: SearchService) {}
  @Output() idVideoToDisplay =  new EventEmitter<string>();

  ngOnInit(): void {
  }

  onClickSearch():void {
    console.log(this.value);
    this.searchService.getVideos(this.value)
    .subscribe((items: any) => {
      this.videos = items.map( (item: { id: { videoId: any; }; snippet: { channelId: any; channelTitle: any; title: any; thumbnails: { high: { url: any; }; }; }; }) => {
        console.log(item);
        return {
          videoId: item.id.videoId,
          videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          channelId: item.snippet.channelId,
          channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
          channelTitle: item.snippet.channelTitle,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          }
        }
      )
    });
  }

  // displayVideo(video: Video) {
  //   this.idVideoToDisplay.emit(video.videoId);
  // }

}

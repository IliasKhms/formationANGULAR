import { Component, OnInit} from '@angular/core';
import { SharePicComponent } from '../share-pic/share-pic.component';
import { Pic } from '../models/pic';
import { SharePicService } from '../services/share-pics.service';

@Component({
  selector: 'app-share-pic-list',
  standalone: true,
  imports: [SharePicComponent],
  templateUrl: './share-pic-list.component.html',
  styleUrl: './share-pic-list.component.scss'

})
export class SharePicListComponent implements OnInit {
  sharePics!: Pic[];
  constructor(private sharePicService: SharePicService){};
 
  ngOnInit() : void{
    this.sharePics = this.sharePicService.getSharePics();
    
  }

}

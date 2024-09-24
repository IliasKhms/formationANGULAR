import { Component, OnInit,Input } from '@angular/core';
import { Pic } from '../models/pic';
import { NgClass, NgStyle,UpperCasePipe,DatePipe, } from '@angular/common';
import { SharePicService } from '../services/share-pics.service';

@Component({
  selector: 'app-share-pic',
  standalone: true,
  imports: [
    NgStyle, 
    NgClass,
    UpperCasePipe,
    DatePipe, 
   
  ],
  templateUrl: './share-pic.component.html',
  styleUrl: './share-pic.component.scss'
})
export class SharePicComponent implements OnInit {
  @Input() pic!: Pic;

  
  buttonText !: string;
  UserHaslike !:boolean;
  
  constructor(private PicService : SharePicService) { 

  }

  ngOnInit() : void{
    this.buttonText = 'Like';
    this.UserHaslike = false;
  }

  hasLike(): void{
    if(this.UserHaslike){
     this.PicService.unlikePicById(this.pic.id, 'unlike');
     this.UserHaslike = false;
     this.buttonText = 'Like';
    }else{
      this.PicService.likePicById(this.pic.id, 'like');
      this.UserHaslike = true;
      this.buttonText = 'Unlike';
    }

  }

  

}



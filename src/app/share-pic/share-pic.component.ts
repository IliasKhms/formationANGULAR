import { Component, OnInit,Input } from '@angular/core';
import { Pic } from '../models/pic';
import { NgClass, NgStyle,UpperCasePipe,DatePipe, } from '@angular/common';

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
  

  ngOnInit() : void{
    this.buttonText = 'Like';
    this.UserHaslike = false;
  }

  hasLike(): void{
    if(this.UserHaslike){
      this.pic.likes--;
      this.buttonText = 'Like';
    }else{
      this.pic.likes++;
      this.buttonText = 'Unlike';
    }
    this.UserHaslike = !this.UserHaslike;
  }
  

}



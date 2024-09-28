import { Component, OnInit,Input } from '@angular/core';
import { Pic } from '../models/pic';
import { UpperCasePipe} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-pic',
  standalone: true,
  imports: [
   
    UpperCasePipe,
     
  ],
  templateUrl: './share-pic.component.html',
  styleUrl: './share-pic.component.scss'
})
export class SharePicComponent implements OnInit {
  @Input() pic!: Pic;

  constructor(private routeur : Router) { 
  }

  ngOnInit() : void{
    
  }

  viewPic(){

    this.routeur.navigateByUrl('picsshare/'+this.pic.id);

  }


  

}



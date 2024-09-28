import { Component, OnInit} from '@angular/core';
import { Pic } from '../models/pic';
import { NgClass, NgStyle,UpperCasePipe,DatePipe, } from '@angular/common';
import { SharePicService } from '../services/share-pics.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-share-pic',
  standalone: true,
  imports: [
    NgStyle, 
    NgClass,
    UpperCasePipe,
    DatePipe, 
    RouterLink
  ],
  templateUrl: './single-share-pic.component.html',
  styleUrl: './single-share-pic.component.scss'
})
export class SingleSharePicComponent implements OnInit {
  pic!: Pic;
  buttonText !: string;
  UserHaslike !:boolean;
  
  constructor(private PicService : SharePicService,
              private route : ActivatedRoute
            ) { 
            

  }

  ngOnInit() : void{
    this.buttonText = 'Like';
    this.UserHaslike = false;
    this.getPicShare();
    this.prepareInterface();
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

  private getPicShare(){
    const id = this.route.snapshot.params['id']; //snapchot donne l'état de la route au moment de la création du composant
    this.pic = this.PicService.getPicById(id);
  }

  private prepareInterface(){
    this.buttonText = 'Like';
    this.UserHaslike = false;
  }


  

}



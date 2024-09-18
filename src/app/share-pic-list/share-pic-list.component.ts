import { Component, OnInit} from '@angular/core';
import { SharePicComponent } from '../share-pic/share-pic.component';
import { Pic } from '../models/pic';

@Component({
  selector: 'app-share-pic-list',
  standalone: true,
  imports: [SharePicComponent],
  templateUrl: './share-pic-list.component.html',
  styleUrl: './share-pic-list.component.scss'
})
export class SharePicListComponent implements OnInit {
  sharePics!: Pic[];
  ngOnInit() : void{
    this.sharePics = [
    new Pic('My first post',
      'This is my first post',
      new Date(),
      111,
      'https://assets-fr.imgfoot.com/media/cache/642x382/photo-sin-17-6550a17c7a385.jpg'
    ),
    new Pic('My second post',
      'This is my second post',
      new Date(),
      256,
      'https://i.eurosport.com/2024/01/16/3864127-78515468-2560-1440.jpg'
    ),
    new Pic('My third post',  
      'This is my third post',
      new Date(),
      120000,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinB35KfQUIL9xxLnClGzrhCgm73BFYLq3bA&s'
    )
    ];
   
    this.sharePics[0].setLocation('Stade Vélodrome');
  }

}

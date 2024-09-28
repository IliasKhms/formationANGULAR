import {Injectable} from '@angular/core';
import { Pic } from '../models/pic';
import { PicType } from '../models/pic-type.type';


@Injectable({
  providedIn: 'root' //enregistre à la racine de l'application pour avoir une seule instance de ce service
})
export class SharePicService {
    private sharePics :  Pic [] = [
        new Pic('My first post',
          'This is my first post',
          new Date(),
          111,
          'https://assets-fr.imgfoot.com/media/cache/642x382/photo-sin-17-6550a17c7a385.jpg'
        ).withLocation("Stade Vélodrome"),
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
    
        getSharePics(): Pic[]{
            return [...this.sharePics]; //retourne une copie du tableau mais pas le tableau original
        }

        getPicById(id: string): Pic{

          const foundPic = this.sharePics.find(pic => pic.id === id);
          if(!foundPic){
            throw new Error('Pic not found');
          }
          return foundPic;

        }

        likePicById(id: string, picType : PicType): void{
          const foundPic = this.sharePics.find(pic => pic.id === id);
          if(!foundPic){
            throw new Error('Pic not found');
          }
          foundPic.like(picType);
          
        }

        unlikePicById(id: string , picType : PicType): void{
          const foundPic = this.sharePics.find(pic => pic.id === id);
          if(!foundPic){
            throw new Error('Pic not found');
          }
          foundPic.unlike();
          
        }


          
}
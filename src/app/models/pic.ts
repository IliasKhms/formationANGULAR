import { PicType } from "./pic-type.type";

export class Pic {
    location?: string;
    id !: string;
    constructor( public title: string, public description: string, public createdAt: Date, public likes: number, public imageURL: string) {
        this.id = crypto.randomUUID().substring(0,8);   
    }
    
    setLocation(location: string) : void {
        this.location = location;
        
     }

    withLocation(location: string) : Pic {
        this.setLocation(location);
        return this;

    }


    addLike(): void {
        this.likes++;
    }

    unlike(): void {
        this.likes--;
    }

    
    like(picType : PicType): void {
        if(picType === 'like'){
            this.addLike();
        }else{
            this.unlike();
        }
    }
                
}
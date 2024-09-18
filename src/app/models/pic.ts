export class Pic {
    location?: string;
    
    constructor( public title: string, public description: string, public createdAt: Date, public likes: number, public imageURL: string) {}
    
    setLocation(location: string) : void {
        this.location = location;
    }
                
}
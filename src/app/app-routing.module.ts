import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharePicListComponent } from './share-pic-list/share-pic-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleSharePicComponent } from './single-share-pic/single-share-pic.component';
import { NewSharePicComponent } from './new-share-pic/new-share-pic.component';


const routes: Routes = [
        {path:"picsshare/:id", component: SingleSharePicComponent},
        {path:"picsshare", component: SharePicListComponent},
        {path:"", component: LandingPageComponent},
        {path:"create", component : NewSharePicComponent}
    ];
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configuration des routes principales
  exports: [RouterModule]                   // Exporter RouterModule pour l'utiliser dans AppModule
})
export class AppRoutingModule { }

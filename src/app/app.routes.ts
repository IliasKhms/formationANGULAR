import { Routes } from '@angular/router';
import { SharePicListComponent } from './share-pic-list/share-pic-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleSharePicComponent } from './single-share-pic/single-share-pic.component';

export const routes: Routes = [
    {path:"picsshare/:id", component: SingleSharePicComponent},
    {path:"picsshare", component: SharePicListComponent},
    {path:"", component: LandingPageComponent}
];

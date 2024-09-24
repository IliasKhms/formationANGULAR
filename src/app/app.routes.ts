import { Routes } from '@angular/router';
import { SharePicListComponent } from './share-pic-list/share-pic-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {path:"picsshare", component: SharePicListComponent},
    {path:"", component: LandingPageComponent}
];

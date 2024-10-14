import { registerLocaleData } from "@angular/common";
import * as en from "@angular/common/locales/fr";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SharePicComponent} from "./share-pic/share-pic.component";
import { SharePicListComponent } from "./share-pic-list/share-pic-list.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleSharePicComponent } from "./single-share-pic/single-share-pic.component";
import { NewSharePicComponent } from "./new-share-pic/new-share-pic.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        SharePicComponent,
        SharePicListComponent,
        HeaderComponent,
        LandingPageComponent,
        SingleSharePicComponent,
        NewSharePicComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule, 
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
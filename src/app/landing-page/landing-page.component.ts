import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  userEmail: string= "ourmail@ilias.fr";

  constructor(private router: Router) { }

  goPicShare(){
    this.router.navigateByUrl("picsshare");
  }

  onSubmitForm(form :NgForm){
    console.log(form.value);
  }

}

import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Pic } from '../models/pic';
import { map } from 'rxjs/operators';
import { SharePicService } from '../services/share-pics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-share-pic',
  standalone: false,
  templateUrl: './new-share-pic.component.html',
  styleUrl: './new-share-pic.component.scss'
})
export class NewSharePicComponent {

  picForm!: FormGroup;
  sharePicPreview$!:Observable<Pic>;
  URLRegex !:RegExp;

  constructor(private formBuilder: FormBuilder,
              private sharePicService: SharePicService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.URLRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.picForm = this.formBuilder.group({
      title: [null,Validators.required],
      description: [null,Validators.required],
      imageURL:[null,[Validators.required, Validators.pattern(this.URLRegex)]],
      location: [null]   
    },
    {
      updateOn : 'blur'
    });

    this.sharePicPreview$ = this.picForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createAt : new Date(),
        likes: 0
      }))
    )
  }

  onSubmitForm(){
    this.sharePicService.addPic(this.picForm.value);
    this.router.navigate(['/picsshare']);
  }

}

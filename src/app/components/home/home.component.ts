import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { Router } from '@angular/router';
import { ContentfulService } from '../../services/contentful.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  landingPage: Entry<any>;
  phraseCaption = '" Energy Through Renewables "';
  buttonCaptionText = 'Contact us';

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);

  whatWeDoHead = 'What We Do?';
  whatWeDoParagraph = 'TBD';

  constructor() {}

  // constructor(
  //   private router: Router,
  //   private contentfulService: ContentfulService
  // ) {}

  ngOnInit() {
    // this.contentfulService
    //   .getLandingPage()
    //   .then(landingPage => (this.landingPage = landingPage));
  }

  getNameErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' : '';
  }

  getEmailErrorMessage() {
    return this.email.hasError('required')
      ? 'You must enter a value'
      : this.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }
}

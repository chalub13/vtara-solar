import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  landingPage: Entry<any>;
  phraseCaption = '" Energy Through Renewables "';
  buttonCaptionText = 'Contact us';
  whatWeDoHead = 'What We Do?';
  whatWeDoParagraph = 'TBD';

  constructor(
    private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit() {
    // this.contentfulService
    //   .getLandingPage()
    //   .then(landingPage => (this.landingPage = landingPage));
  }
}

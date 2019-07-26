import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  mainCaption = 'VTara Solar';
  phraseCaption = '" Energy Through Renewables "';
  buttonCaptionText = 'Contact us';
  whatWeDoHead = 'What We Do?';
  whatWeDoParagraph = 'TBD';

  constructor() {}

  ngOnInit() {}
}

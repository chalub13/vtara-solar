import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  forHome = 'For Home Owners';
  forBusiness = 'For Business';
  about = 'about';
  solarEmail = 'info@vtaraenergygroup.com';
  solarPhone = '+61 2 6108 36 09';

  constructor() {}

  ngOnInit() {
    $('ul.nav li.dropdown').hover(
      function() {
        $(this)
          .find('.dropdown-menu')
          .stop(true, true)
          .delay(200)
          .fadeIn(500);
      },
      function() {
        $(this)
          .find('.dropdown-menu')
          .stop(true, true)
          .delay(200)
          .fadeOut(500);
      }
    );
  }
}

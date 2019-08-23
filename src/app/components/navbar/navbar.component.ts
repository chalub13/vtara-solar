import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  menus = [
    { key: 'home', value: 'home' },
    { key: 'whatshappening', value: "what's happening" },
    {
      key: 'business',
      value: 'businesses',
      sub: [
        { key: 'b-case-study', value: 'case study' },
        { key: 'b-solutions', value: 'solutions' },
        { key: 'b-testimonials', value: 'testimonials' },
        { key: 'b-process', value: 'process' },
        { key: 'b-why-us', value: 'why us' },
        { key: 'b-contact-us', value: 'contact us' }
      ]
    },

    {
      key: 'residential',
      value: 'residential',
      sub: [
        { key: 'r-why-us', value: 'why us' },
        { key: 'r-next-steps', value: 'next steps' },
        { key: 'r-warranty-and-after-care', value: 'warranty and after care' },
        { key: 'r-testimonials', value: 'testimonials' },
        { key: 'r-products', value: 'products' },
        { key: 'r-contact-us', value: 'contact us' }
      ]
    },

    {
      key: 'about-us',
      value: 'about us',
      sub: [
        { key: 'a-team-and-work-with-us', value: 'team + work with us' },
        { key: 'a-mission-and-core-values', value: 'mission + core values' },
        { key: 'a-our-group', value: 'our group' },
        { key: 'a-contact-us', value: 'contact us' },
        { key: 'a-social-entrepreneur', value: 'social entrepreneur' }
      ]
    }
  ];

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

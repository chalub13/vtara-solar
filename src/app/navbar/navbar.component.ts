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
        { key: 'b_case_study', value: 'case study' },
        { key: 'b_solutions', value: 'solutions' },
        { key: 'b_testimonials', value: 'testimonials' },
        { key: 'b_process', value: 'process' },
        { key: 'b_why_us', value: 'why us' },
        { key: 'b_contact_us', value: 'contact us' }
      ]
    },

    {
      key: 'residential',
      value: 'residential',
      sub: [
        { key: 'r_why_us', value: 'why us' },
        { key: 'r_next_steps', value: 'next steps' },
        { key: 'r_warranty_and_after_care', value: 'warranty and after care' },
        { key: 'r_testimonials', value: 'testimonials' },
        { key: 'r_products', value: 'products' },
        { key: 'r_contact_us', value: 'contact us' }
      ]
    },

    {
      key: 'about_us',
      value: 'about us',
      sub: [
        { key: 'a_team_and_work_with_us', value: 'team + work with us' },
        { key: 'a_mission_and_core_values', value: 'mission + core values' },
        { key: 'a_our_group', value: 'our group' },
        { key: 'a_contact_us', value: 'contact us' },
        { key: 'a_social_entrepreneur', value: 'social entrepreneur' }
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

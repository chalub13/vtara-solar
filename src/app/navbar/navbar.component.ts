import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  forHome = 'For Home Owners';
  forBusiness = 'For Business';
  about = 'about';
  solarEmail = 'info@vtaraenergygroup.com';
  solarPhone = '+61 2 6108 36 09';

  constructor() {}

  ngOnInit() {}
}

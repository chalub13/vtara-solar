import { Component, OnInit } from '@angular/core';
import { Venobox } from 'venobox';

@Component({
  selector: 'b-testimonials',
  templateUrl: './b-testimonials.component.html',
  styleUrls: ['./b-testimonials.component.sass']
})
export class BTestimonialsComponent implements OnInit {
  constructor(private venobox: Venobox) {}

  ngOnInit() {
    this.venobox.venobox();
  }
}

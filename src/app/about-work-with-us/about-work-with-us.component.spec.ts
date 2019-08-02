import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWorkWithUsComponent } from './about-work-with-us.component';

describe('AboutWorkWithUsComponent', () => {
  let component: AboutWorkWithUsComponent;
  let fixture: ComponentFixture<AboutWorkWithUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWorkWithUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWorkWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

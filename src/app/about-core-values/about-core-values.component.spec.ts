import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoreValuesComponent } from './about-core-values.component';

describe('AboutCoreValuesComponent', () => {
  let component: AboutCoreValuesComponent;
  let fixture: ComponentFixture<AboutCoreValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCoreValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCoreValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

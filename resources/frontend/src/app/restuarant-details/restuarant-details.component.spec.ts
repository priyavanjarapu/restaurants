import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantDetailsComponent } from './restuarant-details.component';

describe('RestuarantDetailsComponent', () => {
  let component: RestuarantDetailsComponent;
  let fixture: ComponentFixture<RestuarantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestuarantDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

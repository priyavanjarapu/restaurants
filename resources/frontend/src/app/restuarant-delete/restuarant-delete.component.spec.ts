import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantDeleteComponent } from './restuarant-delete.component';

describe('RestuarantDeleteComponent', () => {
  let component: RestuarantDeleteComponent;
  let fixture: ComponentFixture<RestuarantDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestuarantDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarantDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantListComponent } from './restuarant-list.component';

describe('RestuarantListComponent', () => {
  let component: RestuarantListComponent;
  let fixture: ComponentFixture<RestuarantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestuarantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

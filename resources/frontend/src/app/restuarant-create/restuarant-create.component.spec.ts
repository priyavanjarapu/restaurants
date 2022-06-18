import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantCreateComponent } from './restuarant-create.component';

describe('RestuarantCreateComponent', () => {
  let component: RestuarantCreateComponent;
  let fixture: ComponentFixture<RestuarantCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestuarantCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarantCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

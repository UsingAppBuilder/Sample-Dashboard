import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Containers1Component } from './containers1.component';

describe('Containers1Component', () => {
  let component: Containers1Component;
  let fixture: ComponentFixture<Containers1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Containers1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Containers1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

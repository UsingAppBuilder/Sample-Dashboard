import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxGridModule } from 'igniteui-angular';
import { AddingContentComponent } from './adding-content.component';

describe('AddingContentComponent', () => {
  let component: AddingContentComponent;
  let fixture: ComponentFixture<AddingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingContentComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

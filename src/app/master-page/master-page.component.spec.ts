import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxCardModule, IgxGridModule } from 'igniteui-angular';
import { MasterPageComponent } from './master-page.component';

describe('MasterPageComponent', () => {
  let component: MasterPageComponent;
  let fixture: ComponentFixture<MasterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPageComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxCardModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

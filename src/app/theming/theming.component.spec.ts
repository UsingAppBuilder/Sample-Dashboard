import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxCardModule, IgxGridModule } from 'igniteui-angular';
import { ThemingComponent } from './theming.component';

describe('ThemingComponent', () => {
  let component: ThemingComponent;
  let fixture: ComponentFixture<ThemingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemingComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxCardModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

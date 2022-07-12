import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxCardModule, IgxGridModule } from 'igniteui-angular';
import { FinishedDashboardComponent } from './finished-dashboard.component';

describe('FinishedDashboardComponent', () => {
  let component: FinishedDashboardComponent;
  let fixture: ComponentFixture<FinishedDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedDashboardComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxCardModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

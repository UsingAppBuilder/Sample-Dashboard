import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxCardModule, IgxGridModule } from 'igniteui-angular';
import { ContainersWithContentComponent } from './containers-with-content.component';

describe('ContainersWithContentComponent', () => {
  let component: ContainersWithContentComponent;
  let fixture: ComponentFixture<ContainersWithContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainersWithContentComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAvatarModule, IgxListModule, IgxCardModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainersWithContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

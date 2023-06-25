import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopspageComponent } from './devopspage.component';

describe('DevopspageComponent', () => {
  let component: DevopspageComponent;
  let fixture: ComponentFixture<DevopspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevopspageComponent]
    });
    fixture = TestBed.createComponent(DevopspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

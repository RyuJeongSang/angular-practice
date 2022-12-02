import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsvisibleComponent } from './isvisible.component';

describe('IsvisibleComponent', () => {
  let component: IsvisibleComponent;
  let fixture: ComponentFixture<IsvisibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsvisibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsvisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

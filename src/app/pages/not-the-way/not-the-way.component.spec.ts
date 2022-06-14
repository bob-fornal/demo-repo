import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotTheWayComponent } from './not-the-way.component';

describe('NotTheWayComponent', () => {
  let component: NotTheWayComponent;
  let fixture: ComponentFixture<NotTheWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotTheWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotTheWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

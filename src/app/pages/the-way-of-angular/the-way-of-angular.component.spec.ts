import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWayOfAngularComponent } from './the-way-of-angular.component';

describe('TheWayOfAngularComponent', () => {
  let component: TheWayOfAngularComponent;
  let fixture: ComponentFixture<TheWayOfAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheWayOfAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheWayOfAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TzComponent } from './tz.component';

describe('TzComponent', () => {
  let component: TzComponent;
  let fixture: ComponentFixture<TzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

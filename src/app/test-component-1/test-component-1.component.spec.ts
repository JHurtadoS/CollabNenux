/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestComponent-1Component } from './test-component-1.component';

describe('TestComponent-1Component', () => {
  let component: TestComponent-1Component;
  let fixture: ComponentFixture<TestComponent-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

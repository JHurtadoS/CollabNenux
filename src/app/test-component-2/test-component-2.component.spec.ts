/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestComponent-2Component } from './test-component-2.component';

describe('TestComponent-2Component', () => {
  let component: TestComponent-2Component;
  let fixture: ComponentFixture<TestComponent-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

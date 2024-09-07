/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParImparComponent } from './parImpar.component';

describe('ParImparComponent', () => {
  let component: ParImparComponent;
  let fixture: ComponentFixture<ParImparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParImparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParImparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

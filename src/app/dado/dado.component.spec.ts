/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DadoComponent } from './dado.component';

describe('DadoComponent', () => {
  let component: DadoComponent;
  let fixture: ComponentFixture<DadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

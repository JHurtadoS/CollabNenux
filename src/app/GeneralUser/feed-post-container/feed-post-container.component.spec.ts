/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FeedPostPageComponent } from './feed-post-container.component';

describe('FeedPostPageComponent', () => {
  let component: FeedPostPageComponent;
  let fixture: ComponentFixture<FeedPostPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedPostPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

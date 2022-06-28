/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Main_formComponent } from './main_form.component';

describe('Main_formComponent', () => {
  let component: Main_formComponent;
  let fixture: ComponentFixture<Main_formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main_formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main_formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigClassComponent } from './config-class.component';

describe('ConfigClassComponent', () => {
  let component: ConfigClassComponent;
  let fixture: ComponentFixture<ConfigClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

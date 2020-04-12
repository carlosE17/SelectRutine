import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecRutinaComponent } from './ejec-rutina.component';

describe('EjecRutinaComponent', () => {
  let component: EjecRutinaComponent;
  let fixture: ComponentFixture<EjecRutinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecRutinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

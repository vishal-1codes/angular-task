import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpcallComponent } from './httpcall.component';

describe('HttpcallComponent', () => {
  let component: HttpcallComponent;
  let fixture: ComponentFixture<HttpcallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpcallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

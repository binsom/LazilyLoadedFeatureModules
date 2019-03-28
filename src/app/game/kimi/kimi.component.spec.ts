import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KimiComponent } from './kimi.component';

describe('KimiComponent', () => {
  let component: KimiComponent;
  let fixture: ComponentFixture<KimiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KimiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

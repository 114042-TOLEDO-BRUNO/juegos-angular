import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJuegoComponent } from './update-juego.component';

describe('UpdateJuegoComponent', () => {
  let component: UpdateJuegoComponent;
  let fixture: ComponentFixture<UpdateJuegoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateJuegoComponent]
    });
    fixture = TestBed.createComponent(UpdateJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

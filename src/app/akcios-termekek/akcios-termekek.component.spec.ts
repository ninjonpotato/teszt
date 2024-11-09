import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkciosTermekekComponent } from './akcios-termekek.component';

describe('AkciosTermekekComponent', () => {
  let component: AkciosTermekekComponent;
  let fixture: ComponentFixture<AkciosTermekekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkciosTermekekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkciosTermekekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelenlegiAjanlatokComponent } from './jelenlegi-ajanlatok.component';

describe('JelenlegiAjanlatokComponent', () => {
  let component: JelenlegiAjanlatokComponent;
  let fixture: ComponentFixture<JelenlegiAjanlatokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JelenlegiAjanlatokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JelenlegiAjanlatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

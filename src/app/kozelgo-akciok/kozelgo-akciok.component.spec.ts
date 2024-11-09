import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KozelgoAkciokComponent } from './kozelgo-akciok.component';

describe('KozelgoAkciokComponent', () => {
  let component: KozelgoAkciokComponent;
  let fixture: ComponentFixture<KozelgoAkciokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KozelgoAkciokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KozelgoAkciokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

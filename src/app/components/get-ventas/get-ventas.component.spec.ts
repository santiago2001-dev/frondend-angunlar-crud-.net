import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVentasComponent } from './get-ventas.component';

describe('GetVentasComponent', () => {
  let component: GetVentasComponent;
  let fixture: ComponentFixture<GetVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

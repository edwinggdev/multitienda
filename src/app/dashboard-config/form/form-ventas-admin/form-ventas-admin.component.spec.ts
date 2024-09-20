import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVentasadminComponent } from  './form-ventas-admin.component'

describe('FormVentasadminComponent', () => {
  let component: FormVentasadminComponent;
  let fixture: ComponentFixture<FormVentasadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVentasadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVentasadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

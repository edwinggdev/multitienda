import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVentasadminComponent } from './list-ventas-admin.component';

describe('ListVentasadminComponent', () => {
  let component: ListVentasadminComponent;
  let fixture: ComponentFixture<ListVentasadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVentasadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVentasadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

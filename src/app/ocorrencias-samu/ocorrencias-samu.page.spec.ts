import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OcorrenciasSamuPage } from './ocorrencias-samu.page';

describe('OcorrenciasSamuPage', () => {
  let component: OcorrenciasSamuPage;
  let fixture: ComponentFixture<OcorrenciasSamuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OcorrenciasSamuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

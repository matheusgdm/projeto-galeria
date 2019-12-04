import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirServicosComponent } from './exibir-servicos.component';

describe('ExibirServicosComponent', () => {
  let component: ExibirServicosComponent;
  let fixture: ComponentFixture<ExibirServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

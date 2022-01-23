import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtivoLDCListPage } from './ativo-ldclist.page';

describe('AtivoLDCListPage', () => {
  let component: AtivoLDCListPage;
  let fixture: ComponentFixture<AtivoLDCListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivoLDCListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtivoLDCListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtivoLDCDetailsPage } from './ativo-ldcdetails.page';

describe('AtivoLDCDetailsPage', () => {
  let component: AtivoLDCDetailsPage;
  let fixture: ComponentFixture<AtivoLDCDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivoLDCDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtivoLDCDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

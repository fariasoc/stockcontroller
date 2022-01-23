import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReuniaodiariadetailsPage } from './reuniaodiariadetails.page';

describe('ReuniaodiariadetailsPage', () => {
  let component: ReuniaodiariadetailsPage;
  let fixture: ComponentFixture<ReuniaodiariadetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuniaodiariadetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReuniaodiariadetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

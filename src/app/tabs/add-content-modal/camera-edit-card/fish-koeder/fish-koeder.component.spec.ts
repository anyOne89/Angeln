import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FishKoederComponent } from './fish-koeder.component';

describe('FishKoederComponent', () => {
  let component: FishKoederComponent;
  let fixture: ComponentFixture<FishKoederComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishKoederComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FishKoederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

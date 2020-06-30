import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Nachrichten } from './nachrichten.component';

describe('Tab3Page', () => {
  let component: Nachrichten;
  let fixture: ComponentFixture<Nachrichten>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Nachrichten],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Nachrichten);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

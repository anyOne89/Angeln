import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NewsCardContentComponent } from './news-card-content.component';
describe('NewsCardContentComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewsCardContentComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(NewsCardContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=news-card-content.component.spec.js.map
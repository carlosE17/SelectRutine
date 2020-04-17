import { async, TestBed } from '@angular/core/testing';
import { EjecRutinaComponent } from './ejec-rutina.component';
describe('EjecRutinaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EjecRutinaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EjecRutinaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ejec-rutina.component.spec.js.map
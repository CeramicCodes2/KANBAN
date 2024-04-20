import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSecctionComponent } from './panel-secction.component';

describe('PanelSecctionComponent', () => {
  let component: PanelSecctionComponent;
  let fixture: ComponentFixture<PanelSecctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelSecctionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelSecctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsContainerComponent } from './modals-container.component';

describe('ModalsContainerComponent', () => {
  let component: ModalsContainerComponent;
  let fixture: ComponentFixture<ModalsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

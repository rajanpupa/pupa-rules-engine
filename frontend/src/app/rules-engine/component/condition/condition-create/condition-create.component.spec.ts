import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionCreateComponent } from './condition-create.component';

describe('ConditionCreateComponent', () => {
  let component: ConditionCreateComponent;
  let fixture: ComponentFixture<ConditionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

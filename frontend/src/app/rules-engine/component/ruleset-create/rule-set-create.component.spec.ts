import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSetCreateComponent } from './rule-set-create.component';

describe('RuleSetCreateComponent', () => {
  let component: RuleSetCreateComponent;
  let fixture: ComponentFixture<RuleSetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleSetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleSetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleCreateComponent } from './rule-create.component';

describe('RuleCreateComponent', () => {
  let component: RuleCreateComponent;
  let fixture: ComponentFixture<RuleCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

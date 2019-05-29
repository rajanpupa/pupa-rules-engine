import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleDetailComponent } from './rule-detail.component';

describe('RuleDetailComponent', () => {
  let component: RuleDetailComponent;
  let fixture: ComponentFixture<RuleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

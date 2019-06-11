import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCreateComponent } from './action-create.component';

describe('ActionCreateComponent', () => {
  let component: ActionCreateComponent;
  let fixture: ComponentFixture<ActionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

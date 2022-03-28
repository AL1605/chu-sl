import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateInformationComponent } from './duplicate-information.component';

describe('DuplicateInformationComponent', () => {
  let component: DuplicateInformationComponent;
  let fixture: ComponentFixture<DuplicateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicateInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

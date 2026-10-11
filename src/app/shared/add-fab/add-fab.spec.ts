import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFab } from './add-fab';

describe('AddFab', () => {
  let component: AddFab;
  let fixture: ComponentFixture<AddFab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFab],
    }).compileComponents();

    fixture = TestBed.createComponent(AddFab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

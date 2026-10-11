import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalog } from './catalog';
import { provideDb } from '@core/db/db';

describe('Catalog', () => {
  let component: Catalog;
  let fixture: ComponentFixture<Catalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catalog],
      providers: [provideDb()],
    }).compileComponents();

    fixture = TestBed.createComponent(Catalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

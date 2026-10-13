import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHub } from './home-hub';
import { provideDb } from '@core/db/db';

describe('HomeHub', () => {
  let component: HomeHub;
  let fixture: ComponentFixture<HomeHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHub],
      providers: [provideDb()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeHub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

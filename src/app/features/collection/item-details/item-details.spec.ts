import {TestBed} from '@angular/core/testing';

import ItemDetails from './item-details';

describe('ItemDetails', () => {
  let service: ItemDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

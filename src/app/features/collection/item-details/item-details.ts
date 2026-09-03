import {inject, Service} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ItemParamTypes, ItemTypes} from '@features/collection/item-details/item-details.model';
import {ListDetails} from '@features/collection/shopping-list/list-details/list-details';

@Service()
export class ItemDetails {
  private modal = inject(MatDialog);

  showDetails(type: ItemTypes, params?: ItemParamTypes) {
    if (type === ItemTypes.LIST) {
      this.modal.open(ListDetails, {
        data: params
      });
    }
  }
}

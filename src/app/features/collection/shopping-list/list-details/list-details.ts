import {Component, inject, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {form, FormField, FormRoot} from '@angular/forms/signals';
import {
  INITIAL_MODEL,
  listDetailsModel,
  ListDetailsModel,
  ListDetailsModelSchema
} from '@features/collection/shopping-list/list-details/list-details.model';

import {failure, ResponseDetails, success} from '@core/response-details/response-details';
import {db} from '@shared/db/db';
import {ListDetailsParams} from '@features/collection/item-details/item-details.model';

@Component({
  selector: 'app-list-details',
  imports: [
    MatDialogTitle,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    FormField,
    FormRoot,
    MatError
  ],
  templateUrl: './list-details.html',
  styleUrl: './list-details.scss',
})
export class ListDetails implements OnInit {
  editForm = form(listDetailsModel, ListDetailsModelSchema, {
    submission: {
      action: async (field) => {
        const result = await this.save(field().value());
        if (result.ok) {
          field().reset({...INITIAL_MODEL});
          return;
        }
        return {kind: result.kind, message: result.message};
      },
    }
  });
  private params: ListDetailsParams = inject(MAT_DIALOG_DATA);

  constructor(private dialogRef: MatDialogRef<ListDetails>) {
  }

  ngOnInit() {
    db.shoppingLists.get(this.params?.id)
      .then((list) => {
        if (list) {
          listDetailsModel.set({...list});
        }
      })
  }

  private async save(form: ListDetailsModel): Promise<ResponseDetails> {
    return db.shoppingLists.put({...form}, this.params?.id)
      .then((id) => {
        this.dialogRef.close(form);
        return success();
      })
      .catch((err) => {
        return failure(err.message, err)
      });
  }

}

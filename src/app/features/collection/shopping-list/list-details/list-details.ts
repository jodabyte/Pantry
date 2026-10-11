import {Component, inject, OnInit, signal} from '@angular/core';
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
  ListDetailsModel,
  ListDetailsModelSchema
} from '@features/collection/shopping-list/list-details/list-details.model';

import {failure, ResponseDetails, success} from '@shared/response-details/response-details';
import {DB} from '@core/db/db';
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
  private model = signal<ListDetailsModel>({...INITIAL_MODEL});
  editForm = form(this.model, ListDetailsModelSchema, {
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
  private db = inject(DB);
  private dialogRef = inject(MatDialogRef<ListDetails>);

  ngOnInit() {
    this.db.shoppingLists.get(this.params?.id)
      .then((list) => {
        if (list) {
          this.model.set({...list});
        }
      });
  }

  private async save(form: ListDetailsModel): Promise<ResponseDetails> {
    return this.db.shoppingLists.put({...form}, this.params?.id)
      .then((id) => {
        this.dialogRef.close(form);
        return success();
      })
      .catch((err) => {
        return failure(err.message, err)
      });
  }

}

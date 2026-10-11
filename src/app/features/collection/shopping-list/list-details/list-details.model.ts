import {required, SchemaFn} from '@angular/forms/signals';

export interface ListDetailsModel {
  name: string;
}

export const INITIAL_MODEL = {
  name: '',
};

export const ListDetailsModelSchema: SchemaFn<ListDetailsModel> = (schemaPath) => {
  required(schemaPath.name, {message: 'Name is required'});
};

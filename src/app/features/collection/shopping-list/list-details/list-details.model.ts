import {signal} from '@angular/core';
import {required, SchemaFn} from '@angular/forms/signals';

export interface ListDetailsModel {
  name: string;
}

export const listDetailsModel = signal<ListDetailsModel>({
  name: '',
});

export const ListDetailsModelSchema: SchemaFn<ListDetailsModel> = (schemaPath) => {
  required(schemaPath.name, {message: 'Name is required'});
};

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from "./core/toolbar/toolbar";
import { Catalog } from "./features/catalog/catalog";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, Catalog],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Pantry');
}

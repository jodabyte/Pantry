import {RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'shopping-list/:id',
    renderMode: RenderMode.Client,
  },
];

import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { environment } from './environments/environment';

// Import additional components for routing
import { HomeComponent } from './app/components/home/home.component';
import { ShopComponent } from './app/components/shop/shop.component';
import { NotFoundComponent } from './app/components/not-found/not-found.component';

if (environment.production) {
  enableProdMode();
}

// Define your app routes
const appRoutes = [
  { path: '', component: HomeComponent }, // Home page route
  { path: 'shop', component: ShopComponent }, // Shop page route
  { path: '**', component: NotFoundComponent }, // Wildcard route for 404
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes), // Pass routes to provideRouter
  ],
}).catch((err) => console.error(err));

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactModule } from './contact/contact.module';

export function loadContactModule() {
	return ContactModule;
}

export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'contact', loadChildren: loadContactModule }
];

export const routing = RouterModule.forRoot(routes);

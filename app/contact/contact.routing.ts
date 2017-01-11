import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ContactComponent } from './contact.component';

export const routes: Routes = [
	{ path: '', component: ContactComponent }
];

export const routing = RouterModule.forChild(routes);

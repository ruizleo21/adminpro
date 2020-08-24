import { Routes, RouterModule} from '@angular/router';
// modulo
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages/pages.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutignModule } from './auth/auth.routing';
const appRoutes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', component: NopagefoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true}),
        PagesRoutingModule,
        AuthRoutignModule
    ],
    exports: [RouterModule]
})


export class AppRoutingModule {}

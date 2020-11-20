import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { LanguageComponent } from './language/language.component';

const routes: Routes = [
    { path: '', redirectTo: '/language', pathMatch: 'full' },
    { path: 'language', component: LanguageComponent },
    { path: 'enter-code', loadChildren: () => import('./enter-code/enter-code.module').then(m => m.EnterCodeModule) }

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

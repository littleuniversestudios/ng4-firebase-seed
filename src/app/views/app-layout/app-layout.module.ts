import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {AppHeaderComponent} from './app-header/app-header.component';
import {RouterModule} from '@angular/router';
import {AppLayoutComponent} from './app-layout.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    declarations: [
        AppLayoutComponent,
        AppHeaderComponent,
    ],
    exports: [
        AppLayoutComponent
    ]
})
export class AppLayoutModule {

}

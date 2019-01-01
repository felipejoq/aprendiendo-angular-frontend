import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

// PIPES
import { PipesModule } from './../pipes/pipes.module';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        PipesModule
    ],
    declarations: [
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        NopagefoundComponent
    ],
    exports: [
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        NopagefoundComponent
    ]
})
export class SharedModule {}

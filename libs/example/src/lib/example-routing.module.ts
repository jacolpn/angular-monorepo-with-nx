import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

const appRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                component: HomeComponent,
            },
            { path: '**', redirectTo: '' },
        ],
    },
];

@NgModule({
    imports: [HomeModule, RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class ExampleRoutingModule {}

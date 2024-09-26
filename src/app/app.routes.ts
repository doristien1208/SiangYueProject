import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { BrandComponent } from './pages/brand/brand.component';
import { ProjectComponent } from './pages/project/project.component';
import { ServiceflowComponent } from './pages/serviceflow/serviceflow.component';


export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'brand',component:BrandComponent},
    {path:'project',component:ProjectComponent},
    {path:'serviceflow',component:ServiceflowComponent},
    {path:'home',component:HomepageComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
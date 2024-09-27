import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { BrandComponent } from './pages/brand/brand.component';
import { ProjectComponent } from './pages/project/project.component';
import { ServiceflowComponent } from './pages/serviceflow/serviceflow.component';
import { BusinessComponent } from './pages/business/business.component';
import { FamilytheaterComponent } from './pages/familytheater/familytheater.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { KtvComponent } from './pages/ktv/ktv.component';
import { PublicsectorComponent } from './pages/publicsector/publicsector.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'brand',component:BrandComponent},
    {path:'project',component:ProjectComponent},
    {path:'serviceflow',component:ServiceflowComponent},
    {path:'home',component:HomepageComponent},
    {path:'business',component:BusinessComponent},
    {path:'familytheater',component:FamilytheaterComponent},
    {path:'hotel',component:HotelComponent},
    {path:'ktv',component:KtvComponent},
    {path:'publicsector',component:PublicsectorComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
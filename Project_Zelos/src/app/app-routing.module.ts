import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { GoalsComponent } from './goals/goals.component';
import { BoostsComponent } from './boosts/boosts.component';

const routes: Routes = [
  { path: 'kalender', component: CalenderComponent },
  { path: 'ziele', component: GoalsComponent },
  { path: 'boosts', component: BoostsComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

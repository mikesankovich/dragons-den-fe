import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellsComponent } from './spells/spells.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { HomebrewDashboardComponent } from './homebrew-dashboard/homebrew-dashboard.component';
import { ClassComponent } from './homebrew-dashboard/class/class.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'spells', component: SpellsComponent},
  {path: 'blog', component: BlogDashboardComponent},
  {path: 'homebrew', component: HomebrewDashboardComponent},
  {path: 'homebrew/class', component: ClassComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

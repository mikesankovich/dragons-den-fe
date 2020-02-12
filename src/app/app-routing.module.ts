import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellsComponent } from './spells/spells.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { BlogComponent } from './blog-dashboard/blog/blog.component';
import { HomebrewDashboardComponent } from './homebrew-dashboard/homebrew-dashboard.component';
import { ClassComponent } from './homebrew-dashboard/class/class.component';
import { RaceComponent } from './homebrew-dashboard/race/race.component';
import { PointAllocationComponent } from './homebrew-dashboard/miscellaneous/point-allocation/point-allocation.component';
import { CTTRPGDashboardComponent } from './cttrpg-dashboard/cttrpg-dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'spells', component: SpellsComponent},
  {path: 'blog', component: BlogDashboardComponent},
  {path: 'CTTRPG', component: CTTRPGDashboardComponent},
  {path: 'blog/blog', component: BlogComponent},
  {path: 'homebrew', component: HomebrewDashboardComponent},
  {path: 'homebrew/classes/:id', component: ClassComponent},
  {path: 'homebrew/races/:id', component: RaceComponent},
  {path: 'homebrew/miscellaneous/point-allocation', component: PointAllocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

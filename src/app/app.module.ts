import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpellsComponent } from './spells/spells.component';
import { SpellCardComponent } from './spell-card/spell-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { HomebrewDashboardComponent } from './homebrew-dashboard/homebrew-dashboard.component';
import { ClassComponent } from './homebrew-dashboard/class/class.component';
import { BlogComponent } from './blog-dashboard/blog/blog.component';
import { RaceComponent } from './homebrew-dashboard/race/race.component';
import { PointAllocationComponent } from './homebrew-dashboard/miscellaneous/point-allocation/point-allocation.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellsComponent,
    SpellCardComponent,
    DashboardComponent,
    BlogDashboardComponent,
    HomebrewDashboardComponent,
    ClassComponent,
    BlogComponent,
    RaceComponent,
    PointAllocationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

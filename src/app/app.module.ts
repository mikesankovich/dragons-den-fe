import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpellsComponent } from './spells/spells.component';
import { SpellCardComponent } from './spell-card/spell-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { HomebrewDashboardComponent } from './homebrew-dashboard/homebrew-dashboard.component';
import { ClassComponent } from './homebrew-dashboard/class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellsComponent,
    SpellCardComponent,
    DashboardComponent,
    BlogDashboardComponent,
    HomebrewDashboardComponent,
    ClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

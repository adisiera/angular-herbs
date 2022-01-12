import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerbAppComponent } from './pages/herb-app/herb-app.component';
import { HerbListComponent } from './cmps/herb-list/herb-list.component';
import { HerbPreviewComponent } from './cmps/herb-preview/herb-preview.component';
import { HerbDetailsComponent } from './pages/herb-details/herb-details.component';
import { HerbEditComponent } from './pages/herb-edit/herb-edit.component';
import { AboutComponent } from './pages/about/about.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HerbFilterComponent } from './cmps/herb-filter/herb-filter.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StopClickPropagationDirective } from './directives/stop-click-propagation.directive';
import { SignupComponent } from './pages/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HerbAppComponent,
    HerbListComponent,
    HerbPreviewComponent,
    HerbDetailsComponent,
    HerbEditComponent,
    AboutComponent,
    AppHeaderComponent,
    HerbFilterComponent,
    HomeComponent,
    StopClickPropagationDirective,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

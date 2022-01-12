import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HerbAppComponent } from './pages/herb-app/herb-app.component';
import { HerbDetailsComponent } from './pages/herb-details/herb-details.component';
import { HerbEditComponent } from './pages/herb-edit/herb-edit.component';
import { HerbResolverService } from './services/herb-resolver.service';


const routes: Routes = [
  {
    path: 'herb/edit/:id',
    component: HerbEditComponent
  },
  {
    path: 'herb/herb/:id',
    resolve: { herb: HerbResolverService },
    component: HerbDetailsComponent,
  },
  {
    path: 'herb',
    component: HerbAppComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewApplicationFormComponent } from './new-application-form/new-application-form.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/application',
    pathMatch: 'full'
  },
  {path: 'application',
    component: NewApplicationFormComponent
},
{
  path: 'profile',
  component: ProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

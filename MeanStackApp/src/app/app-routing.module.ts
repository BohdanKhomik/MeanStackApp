import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTeamComponent } from './list-team/list-team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';

const routes: Routes = [
  { path:'', component:ListTeamComponent },
  { path:'add-team', component:AddTeamComponent },
  { path:'list-team', component:ListTeamComponent },
  { path:'edit-team/:id', component:EditTeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

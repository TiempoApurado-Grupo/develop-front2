import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {JoinUpComponent} from "./components/join-up/join-up.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {PropertyListComponent} from "./components/property-list/property-list.component";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import {AddTenantComponent} from "./components/add-tenant/add-tenant.component";
import {ListTenantsComponent} from "./components/list-tenants/list-tenants.component";
import {ViewPostsComponent} from "./components/view-posts/view-posts.component";
import {PostsComponent} from "./components/posts/posts.component";

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:JoinUpComponent},
  {path:'navigation/login', component:LoginFormComponent},
  {path:'navigation/register', component:RegisterComponent},
  {path:'navigation/list/property', component:PropertyListComponent},
  {path:'navigation/edit/profile', component:EditProfileComponent},
  {path:'navigation/add/tenant', component:AddTenantComponent},
  {path:'navigation/list/tenant', component:ListTenantsComponent},
  {path:'navigation/add/tenant', component:AddTenantComponent},
  {path: 'lessors', component: PostsComponent},
  {path: 'lessors/:lessorId/posts/:postId', component: ViewPostsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

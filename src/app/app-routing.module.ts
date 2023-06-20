import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {ListPostsComponent} from "./components/list-posts/list-posts.component";
import {SeePostComponent} from "./components/see-post/see-post.component";
import {SeeProfileComponent} from "./components/see-profile/see-profile.component";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import {FormPostComponent} from "./components/form-post/form-post.component";
import {YourPostsComponent} from "./components/your-posts/your-posts.component";
import {YourClientsComponent} from "./components/your-clients/your-clients.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {SeeMessagesComponent} from "./components/see-messages/see-messages.component";
import {SendMessageComponent} from "./components/send-message/send-message.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'register', component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'listposts', component:ListPostsComponent},
  {path: 'seepost/:id', component:SeePostComponent},
  {path: 'seeprofile/:id', component:SeeProfileComponent},
  {path: 'editprofile', component:EditProfileComponent},
  {path: 'post', component:FormPostComponent},
  {path: 'post/edit/:id', component:FormPostComponent},
  {path: 'post/new', component:FormPostComponent},
  {path: 'yourposts', component:YourPostsComponent},
  {path: 'yourclients', component:YourClientsComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'messages', component: SeeMessagesComponent},
  {path: 'sendmessage/:id', component: SendMessageComponent},
  {path: 'postproperty', component: FormPostComponent},
  {path: 'myprofile', component: EditProfileComponent},


  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

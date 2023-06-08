import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

import {FormsModule} from "@angular/forms";

import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {PropertyListComponent} from "./components/property-list/property-list.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {MatInputModule} from "@angular/material/input";
import {RegisterComponent} from "./components/register/register.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {PropertyFormComponent} from "./components/property-form/property-form.component";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import {HeaderProfileComponent} from "./components/header-profile/header-profile.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ListTenantsComponent} from "./components/list-tenants/list-tenants.component";
import { JoinUpComponent } from './components/join-up/join-up.component';
import {HeaderLessorComponent} from "./components/header-lessor/header-lessor.component";
import {MatTableModule} from "@angular/material/table";
import {FlexModule} from "@angular/flex-layout";
import {MatNativeDateModule} from "@angular/material/core";



import {MaterialModule} from "./shared/material.module";
import {AddTenantComponent} from "./components/add-tenant/add-tenant.component";
import {ViewPostsComponent} from "./components/view-posts/view-posts.component";
import {PostsComponent} from "./components/posts/posts.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SubscriptionComponent,
    LoginFormComponent,
    RegisterComponent,
    PropertyFormComponent,
    EditProfileComponent,
    HeaderProfileComponent,
    ListTenantsComponent,
    JoinUpComponent,
    HeaderLessorComponent,
    PropertyListComponent,
    ToolbarComponent,
    AddTenantComponent,
    ViewPostsComponent,
    PostsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatTableModule,
    FlexModule,
    FormsModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

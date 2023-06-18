import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import { FilterComponent } from './components/filter/filter.component';
import { HederLogoComponent } from './components/heder-logo/heder-logo.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SeeMessagesComponent } from './components/see-messages/see-messages.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { SeeProfileComponent } from './components/see-profile/see-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { YourClientsComponent } from './components/your-clients/your-clients.component';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import { YourPostsComponent } from './components/your-posts/your-posts.component';
import { SeePostComponent } from './components/see-post/see-post.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FilterComponent,
    HederLogoComponent,
    RegisterComponent,
    LoginComponent,
    WelcomeComponent,
    SeeMessagesComponent,
    SendMessageComponent,
    SeeProfileComponent,
    EditProfileComponent,
    YourClientsComponent,
    YourPostsComponent,
    SeePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

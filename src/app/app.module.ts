import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { HomeComponent } from './layout/home/home.component';
import{AuthService} from './auth/auth.service';
import{CookieService} from 'ngx-cookie-service';
import{AuthGuard} from './auth/auth.guard';
import{ AuthinterceptorService} from './auth/authinterceptor.service';
import { RegistrationComponent } from './layout/registration/registration.component'
import { CommentsComponent } from './post/comments/comments.component';
import { CreateComponent } from './post/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    RegistrationComponent,
    CommentsComponent,
    CreateComponent
  
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:"home", component:HomeComponent, canActivate:[AuthGuard] },
      { path:"login", component:LoginComponent },
      { path:"Register", component:RegistrationComponent },
      { path:"create", component:CreateComponent,  canActivate:[AuthGuard] },
       { path:"post", loadChildren:"app/post/post/post.module#PostModule"},
       { path:"comments/:postTitle", component:CommentsComponent, canActivate:[AuthGuard] },
       { path:"", redirectTo:"home", pathMatch:"full" },
       { path: "**", redirectTo:"home" }
    ])
  ],
  providers: [ AuthGuard, AuthService, CookieService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi:true

    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

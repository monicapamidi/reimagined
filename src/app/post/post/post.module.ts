import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';




import { PostComponent } from '../post/post.component';

import{ AuthGuard} from '../../auth/auth.guard';
import{ AuthinterceptorService} from '../../auth/authinterceptor.service'


@NgModule({
  declarations: [
    PostComponent,
  

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
         
         { path:"", component:PostComponent, canActivate:[AuthGuard] },
        
    ])
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi:true
    }],
})
export class PostModule { }

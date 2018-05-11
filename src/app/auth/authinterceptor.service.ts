import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpHeaders } from '@angular/common/http';
import{ AuthService} from './auth.service';

@Injectable()
export class AuthinterceptorService  implements HttpInterceptor{

  constructor(private _authservice :AuthService) { }

  intercept(req, next)
  {

    var authReq =req.clone({
headers :new HttpHeaders().set('token', this._authservice.checkUsrStatus())

    });
return next.handle(req);
  }
}

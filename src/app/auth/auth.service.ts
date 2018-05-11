import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
import{CookieService} from 'ngx-cookie-service';
import { Subject} from 'rxjs/Subject';
import { error } from 'util';


@Injectable()
export class AuthService {

  authCheck$ = new Subject<any>(); // to communicate between sibling components

  constructor(private _http : HttpClient, private _router:Router, private _cookieService:CookieService) { }

  login(loginDetails:any){
  this._http.post('http://localhost:3000/authenticate', loginDetails).subscribe((data:any)=>{
  if(data.isLoggedIn)
  {
this._cookieService.set('token', data.token);
console.log(data);
this.authCheck$.next(data.isLoggedIn);
this._router.navigate(['/home']);
}

  });

  }
  register(details:any)
  {
    this._http.post('http://localhost:3000/register', details).subscribe((data:any)=>{
      console.log(data);
      
      this._router.navigate(['/login']);
  });
  }


  checkUsrStatus()  {
    return this._cookieService.get('token');
  }

  logout()
 
  {
    this._cookieService.deleteAll();
    this._router.navigate(['/login']);
  }
 

}



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class PostService {;
  
  constructor(private _http: HttpClient, private _authService: AuthService) { }
  getPost()
  {
    console.log("hello");
    return this. _http.get('http://localhost:3000/getpost', {
    headers: new HttpHeaders().set('token', this._authService.checkUsrStatus())
  
  });
  
  }

getcomments()
  {
   return this._http.get('http://localhost:3000/getcomments',{
  headers: new HttpHeaders().set('token', this._authService.checkUsrStatus())
});
}

  addComment(commentdetails:any)
  {
     return this._http.post('http://localhost:3000/addcomment', commentdetails,{

      headers: new HttpHeaders().set('token',this._authService.checkUsrStatus())

  });
}

like(newlike:any)
{
  return this._http.post('http://localhost:3000/like', newlike,{

      headers: new HttpHeaders().set('token',this._authService.checkUsrStatus())

  });
}

  createPost(postdetails:any){
    return this._http.post('http://localhost:3000/createpost',postdetails,{
      headers: new HttpHeaders().set('token',this._authService.checkUsrStatus())
    });
  }


  }
  

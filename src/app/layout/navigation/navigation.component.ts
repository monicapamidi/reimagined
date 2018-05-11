import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  toggleMenuItems : any ='';
  constructor(private _authService : AuthService) { }

  ngOnInit() {
    this. _authService.authCheck$.subscribe((data)=>
    {
      this.toggleMenuItems=data;

    });
  }

  //   this.toggleMenuItems = this ._authService.checkUsrStatus();
  // }
  logout()
  {
  this._authService.logout();
  }

  }

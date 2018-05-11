import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
authDetails: any={};

  constructor(private _authservice :AuthService) { }

  ngOnInit() {
  }

  register()
  {
    this._authservice.register(this.authDetails);
  }
}

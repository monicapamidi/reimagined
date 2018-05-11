import { Component, OnInit } from '@angular/core';
import{ PostService } from '../../post/post.service';
import{ ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {

  post: any;
  constructor(private _activeRoute: ActivatedRoute, private _postService: PostService, private _router:Router) { }


  ngOnInit() {
  }

  learnmore()
{
  this._router.navigate(['/home']);
}
}

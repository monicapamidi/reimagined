import { Component, OnInit } from '@angular/core';
import{ PostService } from '../post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [PostService]

})
export class CreateComponent implements OnInit {

post:any={};
  constructor(private _postService:PostService) { }

  ngOnInit() {
  }

  createPost(){
    this._postService.createPost(this.post).subscribe((data)=>{
  
      console.log(data);
    });

  }
}


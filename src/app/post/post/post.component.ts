import { Component, OnInit } from '@angular/core';
import{ PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
providers: [PostService]
})
export class PostComponent implements OnInit {


  postName : string ="post"
  post: any={};
  constructor(private _postService:PostService) { }

  ngOnInit() {
   this._postService.getPost().subscribe((data)=>
{
  console.log(data);        
      this.post=data;
  
    });
    }

 
  }

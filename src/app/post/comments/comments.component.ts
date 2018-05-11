import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router';
import{ PostService } from '../post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [PostService]
})
export class CommentsComponent implements OnInit {
 post:any=[] ;

 comments:any=[];

 showHideLike :boolean =false;

 commentDetails: any={};
 newlike:any ={};
likecount:any= [];

com : any=[];
  constructor(private _activateRoute: ActivatedRoute, private _postService:PostService ,private _router:Router) { }

  ngOnInit() {
    this._activateRoute.params.subscribe((data)=>{
      console.log(data);
       
     this._postService.getPost().subscribe((data1)=>
      {
      console.log(data1);
      this.post=data1;
      for(let i=0;i<this.post.length;i++){
      if(data.postTitle== data1[i].postTitle){
        this.post=this.post[i];
      }
    }
      });
      this._postService.getcomments().subscribe((data2:any)=>
      {
        // console.log(data2);
  
        // this.comments= data2;
        // for(let i=0;i<this.comments.length;i++)
        // {
        //   if(data.postTitle== data2[i].postTitle)
        //   {
        //    this.com.push(data2[i])
  
        //   }
        // }
        // this.comments=this.com;
        // console.log(this.com);
      });
    });
  }


  // getcomments()
  // {

  //   this._activateRoute.params.subscribe((data)=>{
  //     console.log(data);

  //     this._postService.getcomments().subscribe((data2:any)=>
  //   {
  //     console.log(data2);

  //     this.comments= data2;
  //     for(let i=0;i<this.comments.length;i++)
  //     {
  //       if(data.postTitle== data2[i].postTitle)
  //       {
  //        this.com.push(data2[i])

  //       }
  //     }
  //     this.comments=this.com;
  //     console.log(this.com);
  //   });
  //   });



addComment(title)
{
  this.commentDetails.postTitle = title;
  console.log(this.commentDetails);

      this._postService.addComment(this.commentDetails).subscribe((data:any)=>
    {
      console.log(data);

      // this.comments= data2;
      // for(let i=0;i<this.comments.length;i++)
      // {
      //   if(title.postTitle== data2[i].postTitle)
      //   {
      //    this.com.push(data2[i])

      //   }
      //   console.log(this.com);
      // }
  
    });
}


like(title,email)
{
  this.newlike.postTitle= title;
  this.newlike.email= email;
  this._postService.like(this.newlike).subscribe((data:any)=>
{
  console.log(data);
});
}
gotoPost()
{
  this._router.navigate(['/post']);
}
}
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { CreatepostComponent } from './createpost/createpost.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule    
  ],
  declarations: [PostListComponent, CreatepostComponent]
})
export class PostsModule { }

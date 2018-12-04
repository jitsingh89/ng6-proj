import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { CreatepostComponent } from './createpost/createpost.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'createpost',
    component: CreatepostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }

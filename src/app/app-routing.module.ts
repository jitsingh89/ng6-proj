import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : 'users',
    loadChildren : './users/users.module#UsersModule'
  },
  {
    path : 'posts',
    loadChildren : './posts/posts.module#PostsModule'
  }, 
  {
    path : 'albums',
    loadChildren : './albums/albums.module#AlbumsModule'
  }, 
  {
    path : 'comments',
    loadChildren : './comments/comments.module#CommentsModule'
  },
  {
    path : 'todos',
    loadChildren : './todos/todos.module#TodosModule'
  },
  {
    path : '', 
    loadChildren : './users/users.module#UsersModule',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

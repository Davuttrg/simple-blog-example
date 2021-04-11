import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './pages/author/author.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/posts/details/details.component';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts/:id', component: PostsComponent },
  { path: 'posts/detail/:id', component: DetailsComponent },
  { path: 'author/:id', component: AuthorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

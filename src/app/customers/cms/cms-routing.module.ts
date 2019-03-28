import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {ArticleComponent} from "./article/article.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: 'a', component: ArticleComponent },
    ],
  },
  { path: 'c', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }

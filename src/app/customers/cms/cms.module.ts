import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    CmsRoutingModule
  ],
  declarations: [ArticleComponent, CategoryComponent, HomeComponent]
})
export class CmsModule { }

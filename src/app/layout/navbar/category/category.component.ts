import { CategoryService } from './../../../../../../airbnb-clone-frontend/src/app/layout/navbar/category/category.service';
import { Component,inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  CategoryService: CategoryService = inject(CategoryService)

  categories: Category[] | undefined;

  currentActivityCategory: Category = this.CategoryService.getCategoryByDefault();

  ngOnInit(): void{
    this.fetchCategories()
  }

  private fetchCategories(){
    this.categories = this.CategoryService.getCategories();
  }
}


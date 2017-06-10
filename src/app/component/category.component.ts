import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service'

@Component({
  selector: 'app-category',
  templateUrl: 'app/template/category.component.html'
})

export class CategoryComponent implements OnInit {

  constructor(private catService: CategoryService) {}
  listCategory: String[] = [];

  ngOnInit(): void {
    this.catService.getAllCategoryName()
      .then(list => this.listCategory =list);
  }
}

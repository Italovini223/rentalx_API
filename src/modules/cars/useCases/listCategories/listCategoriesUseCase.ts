import { Category } from '../../model/category';
import {ICategoriesRepository} from '../../repositories/ICategoriesRepository'

class ListCategoriesUseCase {
  constructor(private listCategoryUseCase: ICategoriesRepository ){}

  execute():Category[] {
    const categories = this.listCategoryUseCase.list();
    return categories
  }
}

export { ListCategoriesUseCase }
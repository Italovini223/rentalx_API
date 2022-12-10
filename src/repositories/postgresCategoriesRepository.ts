import { Category } from "../model/category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class postgresCategoriesRepository implements ICategoriesRepository{
  findByName(name: string): Category {
    console.log(name)
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description)
  }

}

export { postgresCategoriesRepository}
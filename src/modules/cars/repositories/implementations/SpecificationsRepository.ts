import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";
import {Specification} from '../../model/Specification'

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];
    
  constructor() {
    this.specifications = [];
  }
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    
    Object.assign(specification, {
      name,
      description,
      create_at: new Date()
    });
    
    this.specifications.push(specification);
  }
  
  findByName(name: string): Specification {
    const specification = this.specifications.find(spec => spec.name === name);
    return specification
  }
}

export { SpecificationsRepository }
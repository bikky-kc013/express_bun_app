import type {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectLiteral,
  Repository,
} from "typeorm";
import type { IBaseRepository } from "./baseRepository.interface";

export abstract class BaseAbstractRepository<T extends ObjectLiteral>
  implements IBaseRepository<T>
{
  private readonly entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  /**
   * Save an entity to the database.
   * @param data - Partial data of the entity to save.
   * @returns The saved entity.
   */
  public async save(data: DeepPartial<T>): Promise<T> {
    return await this.entity.save(data);
  }

  /**
   * Create and save a new entity to the database.
   * @param data - Partial data of the entity to create.
   * @returns The created and saved entity.
   */
  public async create(data: DeepPartial<T>): Promise<T> {
    const entity = this.entity.create(data);
    return await this.entity.save(entity);
  }

  /**
   * Retrieve an entity by its ID.
   * @param id - The ID of the entity.
   * @returns The found entity or null.
   */
  public async findOneById(id: any): Promise<T | null> {
    return await this.entity.findOneBy({ id } as FindOptionsWhere<T>);
  }

  /**
   * Retrieve all entities with optional filtering options.
   * @param options - Search options for retrieving entities.
   * @returns An array of entities.
   */
  public async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return await this.entity.find(options);
  }

  /**
   * Remove an existing entity from the database.
   * @param data - The entity to be removed.
   * @returns The removed entity.
   */
  public async remove(data: T): Promise<T> {
    return await this.entity.remove(data);
  }

  /**
   * Find a single entity by specified criteria.
   * @param options - Criteria for searching the entity.
   * @returns The found entity or null.
   */
  public async findOneBy(options: FindOneOptions<T>): Promise<T | null> {
    return await this.entity.findOne(options);
  }

  /**
   * Update an existing entity with new data.
   * @param data - Partial data to update the entity.
   * @returns The updated entity.
   */
  public async update(data: DeepPartial<T>): Promise<T> {
    return await this.entity.save(data);
  }
}

import type { DeepPartial, FindManyOptions, FindOneOptions } from "typeorm";

export interface IBaseRepository<T> {
  /**
   * Create a new entity.
   * @param data - The data for the new entity.
   * @returns The created entity.
   */
  create?(data: DeepPartial<T>): Promise<T>;

  /**
   * Save an entity to the database.
   * @param data - The data to be saved.
   * @returns The saved entity.
   */
  save?(data: DeepPartial<T>): Promise<T>;

  /**
   * Retrieve an entity by its ID.
   * @param id - The ID of the entity.
   * @returns The found entity.
   */
  findOneById?(id: string): Promise<T | null>;

  /**
   * Retrieve all entities with optional search parameters.
   * @param options - Search options for retrieving entities.
   * @returns An array of entities.
   */
  findAll?(options?: FindManyOptions<T>): Promise<T[]>;

  /**
   * Remove an existing entity.
   * @param data - The entity to be removed.
   * @returns The removed entity.
   */
  remove?(data: T): Promise<T>;

  /**
   * Find a single entity based on specified criteria.
   * @param options - Criteria for searching the entity.
   * @returns The found entity.
   */
  findOneBy?(options: FindOneOptions<T>): Promise<T | null>;

  /**
   * Update an existing entity with new data.
   * @param data - The updated data for the entity.
   * @returns The updated entity.
   */
  update?(data: DeepPartial<T>): Promise<T>;
}

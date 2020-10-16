export interface IRepository<A> {
  getAll: () => A[];
  findByName: (name: string) => A | null;
}

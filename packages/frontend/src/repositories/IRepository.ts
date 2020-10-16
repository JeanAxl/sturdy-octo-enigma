interface IRepository<A> {
  getAll: () => Array<A>;
  findByName: (name: string) => A | null;
}

export { IRepository };

import { IProjectData, IProjectEntity } from '$src/domain/entities/Project';

interface IRepository {
  create: (params: IProjectData) => void;
  getAll: () => Array<IProjectEntity>;
}
class AddProjectUseCase {
  private projectsRepository: IRepository;

  constructor(projectsRepository: IRepository) {
    this.projectsRepository = projectsRepository;
  }

  execute(params: IProjectData) {
    this.projectsRepository.create(params);
  }
}
export { AddProjectUseCase };

import { ProjectGallery } from './project-gallery.model';

export class ProjectGalleryList {
  public galleries: ProjectGallery[];

  public static fromJson(json: any): ProjectGalleryList {
    const response = new ProjectGalleryList();
    const { galleries = [] } = json;
    json.results = ProjectGallery.fromJson(json);
    Object.assign(response, json);
    return response;
  }
}

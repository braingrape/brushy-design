import {ProjectGalleryPic} from './project-gallery-pic.model';

export class ProjectGallery {
  public title: string;
  public path: string;
  public pics: ProjectGalleryPic[];

  public static fromJson(json: any): ProjectGallery | ProjectGallery[] {
    const response = new ProjectGallery();
    const { pics = [] } = json;
    json.pics = ProjectGalleryPic.fromJson(json);
    Object.assign(response, json);
    return response;
  }
}

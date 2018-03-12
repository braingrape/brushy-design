export class ProjectGalleryPic {
  public small: string;
  public medium: string;
  public large: string;

  public static fromJson(json: any): ProjectGalleryPic | ProjectGalleryPic[] {
    const response = new ProjectGalleryPic();
    Object.assign(response, json);
    return response;
  }
}

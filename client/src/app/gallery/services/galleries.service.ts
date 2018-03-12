import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ProjectGalleryList } from '../models/project-gallery-list.model';

@Injectable()
export class GalleriesService {
  constructor (private http: Http) {
  }

  public GetProjectGalleries(): Observable<any> {
    const path = '../../../assets/projects/projects.json';
    return this.http.get(path);
  }
}

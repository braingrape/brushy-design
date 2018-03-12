import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { ProjectGalleryList } from './models/project-gallery-list.model';
import { GalleriesService } from './services/galleries.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ProjectGalleryPic } from './models/project-gallery-pic.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  public projects: ProjectGalleryList;
  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];

  constructor(private galleriesService: GalleriesService) {
    this.galleryImages = [];
  }

  public loadGalleryImages(index: number): void {
    this.galleryImages = [];
    const galleryPath = this.projects.galleries[index].path;
    this.projects.galleries[index].pics
      .forEach((pic: ProjectGalleryPic) => {
        const ngxGalleryImage = new NgxGalleryImage({
          small: `${environment.imageDirectory}${galleryPath}/${pic.small}`,
          medium: `${environment.imageDirectory}${galleryPath}/${pic.medium}`,
          big: `${environment.imageDirectory}${galleryPath}/${pic.large}`,
        });
        this.galleryImages.push(ngxGalleryImage);
      });
  }

  ngOnInit() {
    this.galleriesService.GetProjectGalleries().subscribe((response) => {
      this.projects = ProjectGalleryList.fromJson(JSON.parse(response._body));
      this.loadGalleryImages(0);
    });

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        thumbnailsSwipe: true,
        previewSwipe: true,
        previewCloseOnEsc: true,
        previewCloseOnClick: true,
        previewKeyboardNavigation: true,
        thumbnailsArrows: true,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
  }
}

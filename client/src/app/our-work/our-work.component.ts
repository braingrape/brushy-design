import { Component, OnInit } from '@angular/core';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Gallery, GalleryItem } from 'ng-gallery';


@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})

export class OurWorkComponent  implements OnInit {
  title = 'app';
  private apiUrl = 'http://localhost:3000/galleries';
  data: any = [];

  constructor (public gallery: Gallery , private http: Http){

    console.log('Hello');
    this.getData();
    this.getContacts();
    }

  getData() {
      return this.http.get(this.apiUrl).map((res:Response) => res.json())
      }
      getContacts() {

        this.getData().subscribe(data => {
          console.log(data);
          console.log(data[0].pics[0]);
          
          this.data = data;
        })
      }

      ngOnInit() {
        this.gallery.load(this.data);
      }
  
}


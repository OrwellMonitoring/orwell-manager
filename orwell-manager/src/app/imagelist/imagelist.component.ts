import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../model';

@Component({
  selector: 'app-imagelist',
  templateUrl: './imagelist.component.html',
  styleUrls: ['./imagelist.component.css']
})
export class ImagelistComponent implements OnInit {
  images: Image[];


  constructor(private service: ImageService) { this.images = [] }

  ngOnInit(): void {
    this.getImages()
  }

  getImages() {
    this.service.getImages().subscribe(
      data => {
        (this.images = data)
        console.log(this.images)
      }
    )
  }

}

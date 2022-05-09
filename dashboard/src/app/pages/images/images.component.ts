import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];
  trashIcon = faTrashCan;
  constructor(private service: ImageService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.service.getImages().subscribe(
      (data) => {
        console.log(data)
        this.images = data;
      }
    )
  }

  deleteImage(event: any) {
    if (window.confirm("Are you sure you want to delete this image?")) {
      this.service.deleteImage(event.id).subscribe({
        next: (data) => console.log(data),
        error: (e) => alert(e.error.detail.error)
      })
    }
  }
}

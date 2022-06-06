import { CollectorService } from './../../services/collector.service';
import { Collector } from './../../models/collector';
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
  collectors: Collector[] = []

  newImageNameInput: HTMLInputElement = <HTMLInputElement> document.getElementById('name')
  newImageCollectorsInput: HTMLSelectElement = <HTMLSelectElement> document.getElementById('collectors')

  constructor(private service: ImageService, private collectorService: CollectorService) { }

  ngOnInit(): void {
    this.getImages();

    this.newImageNameInput = <HTMLInputElement> document.getElementById('name')
    this.newImageCollectorsInput = <HTMLSelectElement> document.getElementById('collectors')
  }

  loadCollectors () {
    this.collectorService.getAll().subscribe(cs => this.collectors = cs)
  }

  getImages() {
    this.service.getImages().subscribe(
      (data) => {
        console.log(data)
        this.images = data;
      }
    )
  }

  createImage() {

    let collectors: number[] = []
    let ncollectors = this.newImageCollectorsInput.selectedOptions.length

    for (let i=0; i < ncollectors; i++) collectors.push(parseInt(this.newImageCollectorsInput.selectedOptions[i].value))

    this.service.createImage(this.newImageNameInput.value).subscribe(image => collectors.forEach(collector => this.service.addCollector(image.id, collector).subscribe(() => this.getImages())))

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

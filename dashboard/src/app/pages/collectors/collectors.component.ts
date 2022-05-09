import { Component, OnInit } from '@angular/core';
import { Collector } from 'src/app/models/collector';
import { CollectorService } from 'src/app/services/collector.service';

@Component({
  selector: 'app-collectors',
  templateUrl: './collectors.component.html',
  styleUrls: ['./collectors.component.css']
})
export class CollectorsComponent implements OnInit {
  collectors: Collector[] = [];
  constructor(private service: CollectorService) { }

  ngOnInit(): void {
    this.getHosts()
  }

  getHosts() {
    this.service.getHosts().subscribe(
      (data) => {
        console.log(data);
        this.collectors = data;
      }
    )
  }

}

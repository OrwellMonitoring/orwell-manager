import { Component, OnInit } from '@angular/core';
import { Host } from 'src/app/models/host';
import { HostService } from 'src/app/services/host.service';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {
  hosts: Host[] = [];
  constructor(private service: HostService) { }

  ngOnInit(): void {
    this.getHosts()
  }

  getHosts() {
    this.service.getHosts().subscribe(
      (data) => {
        console.log(data);
        this.hosts = data;
      }
    )
  }

}

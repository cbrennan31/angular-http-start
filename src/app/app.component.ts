import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http'

import { ServerService } from './server.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: any[]
  appName = this.serverService.getAppName()
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
  }

  ngOnInit() {
    this.serverService.getServers()
      .subscribe(
        (response: HttpResponse) => {
          this.servers = response
        },
        (error) => console.log(error)
      )
  }

  constructor(private serverService: ServerService) {}
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}

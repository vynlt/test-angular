import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DxDataGridComponent, } from 'devextreme-angular';
import DataSource from "devextreme/data/data_source";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataSource: any;

  ngOnInit() {
    this.loadData();
  }

  loadData = () => {

    this.dataSource = new DataSource({
      store: {
        type: "array",
        key: "Id",
        data: [
          {
            Id: 1,
            Name: "Test",
            CV: 12,
            IsCurrent: true,
            LastUpdated: new Date(),
          }
        ]
      }
    });
  }
}


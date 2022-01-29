import { Client } from './../../clients/client.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ClientRead2DataSource } from './client-read2-datasource';

@Component({
  selector: 'app-client-read2',
  templateUrl: './client-read2.component.html',
  styleUrls: ['./client-read2.component.css']
})
export class ClientRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Client>;
  dataSource: ClientRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description','dateOld', 'gender'];

  ngOnInit() {
    this.dataSource = new ClientRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

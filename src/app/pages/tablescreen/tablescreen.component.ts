import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { DataService } from "../../services/data.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ExampleData } from "../../utils/example.interface";

@Component({
  selector: "app-tablescreen",
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
  ],
  providers: [DataService],
  templateUrl: "./tablescreen.component.html",
  styleUrl: "./tablescreen.component.scss",
})
export class TablescreenComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "type",
    "links",
    "attributes",
    "relationships",
  ];
  data: any = {};
  dataSource: MatTableDataSource<ExampleData> = new MatTableDataSource();

  constructor(private dataService: DataService) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      this.data = result.data;
      this.dataSource.data = this.data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

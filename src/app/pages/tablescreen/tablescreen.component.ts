import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatSort, MatSortModule, Sort } from "@angular/material/sort";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { DataService } from "../../services/data.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-tablescreen",
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
  ],
  providers: [DataService],
  templateUrl: "./tablescreen.component.html",
  styleUrl: "./tablescreen.component.scss",
})
export class TablescreenComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "id",
    "type",
    "links",
    "attributes",
    "relationships",
  ];
  data: any = {};
  dataSource: MatTableDataSource<any> = new MatTableDataSource(this.data);
  columnFilters: { [key: string]: string } = {};

  constructor(private dataService: DataService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataService.getData().subscribe((result) => {
      this.data = result.data;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sortingDataAccessor = this.customSortingDataAccessor;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = this.customFilterPredicate;
    });
  }

  customSortingDataAccessor = (
    data: any,
    sortHeaderId: string
  ): string | number => {
    const [column, subColumn] = sortHeaderId.split(".");
    if (subColumn) {
      return data[column][subColumn];
    }
    return data[sortHeaderId];
  };

  // applyFilter(event: Event): void {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  applyFilter(event: Event, column: string): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.columnFilters[column] = filterValue.trim().toLowerCase();

    this.dataSource.filter = JSON.stringify(this.columnFilters);

    // const overallFilter = Object.values(this.columnFilters).join("");
    // this.dataSource.filter = overallFilter;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  customFilterPredicate = (data: any, filter: string): boolean => {
    const filterObject = JSON.parse(filter);
    return Object.keys(filterObject).every((key) => {
      const columnValue = this.getColumnValue(data, key);
      return columnValue.includes(filterObject[key]);
    });
  };

  getColumnValue(data: any, column: string): string {
    const keys = column.split(".");
    let value = data;
    for (const key of keys) {
      value = value[key];
    }
    return value ? value.toString().toLowerCase() : "";
  }
}

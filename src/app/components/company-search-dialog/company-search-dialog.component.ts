import { Company } from 'src/app/models/company';
import { AfterContentChecked, AfterViewInit, Component, Input, OnInit, ViewChild, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/service/common-service';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-company-search-dialog',
  templateUrl: './company-search-dialog.component.html',
  styleUrls: ['./company-search-dialog.component.scss']
})
export class CompanySearchDialogComponent implements OnInit,
                                              AfterViewInit,
                                              AfterContentChecked {

  displayedColumns: string[] = ['name', 'region_id', 'sector', 'industry'];
  dataSource: any;
  regions: any;
  selectedRegion: any;
  clickedRows = new Set<Company>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private service:CommonService,
              public dialogRef: MatDialogRef<CompanySearchDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngAfterViewInit() {

  }

  ngOnInit(): void {
    this.service.getCompanies().subscribe(res=>{
      this.dataSource = new MatTableDataSource(Object.values(res));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = function(data: any, filter: string): boolean {
        return data.name.toLowerCase().includes(filter) || data.region_id.includes(filter);
      };
    })

    this.service.getRegions().subscribe(res=>{
      let dataRegions = Object.values(res);
      this.regions = [];
      dataRegions.forEach(region =>{
      this.regions.push({id: region.id});
      })
      this.selectedRegion = this.regions.id;
    })
  }

  applyFilter(input: { value: string; }) {
    const filterValue = input.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  applySelect(selectedRegion:any) {
    this.dataSource.filter = selectedRegion;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngAfterContentChecked(): void {

  }

}

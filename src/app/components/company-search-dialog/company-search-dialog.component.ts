import { Company } from 'src/app/models/company';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { CommonService } from 'src/app/service/common-service';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-company-search-dialog',
  templateUrl: './company-search-dialog.component.html',
  styleUrls: ['./company-search-dialog.component.scss']
})
export class CompanySearchDialogComponent implements OnInit {

  displayedColumns: string[] = ['name', 'region_id', 'sector', 'industry'];
  dataSource: any;
  regions: any;
  selectedRegion: any;
  clickedRow = new Set<Company>();
  currency: any;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private service:CommonService,
              public dialogRef: MatDialogRef<CompanySearchDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

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
      this.regions = Object.values(res);
      this.selectedRegion = this.regions.id;
    })
  }

  getCurrency(){
    let clickedRegion = Array.from(this.clickedRow)[0].region_id;
    this.regions.forEach((region:any) =>{
      if(clickedRegion === region.id){
        this.currency = region.currency;}
    })
    this.service.currentCurrency(this.currency)
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
}

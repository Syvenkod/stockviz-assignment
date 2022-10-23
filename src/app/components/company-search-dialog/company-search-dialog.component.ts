import { AfterContentChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/service/common-service';


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

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private service:CommonService,) { }

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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
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

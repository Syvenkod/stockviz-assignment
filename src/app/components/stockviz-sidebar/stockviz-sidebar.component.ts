import { Company } from './../../models/company';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common-service';
import { MatDialog } from '@angular/material/dialog';
import { CompanySearchDialogComponent } from '../company-search-dialog/company-search-dialog.component';


@Component({
  selector: 'app-stockviz-sidebar',
  templateUrl: './stockviz-sidebar.component.html',
  styleUrls: ['./stockviz-sidebar.component.scss']
})
export class StockvizSidebarComponent implements OnInit{
  constructor(private service:CommonService,
  public dialog: MatDialog) { }

  openDialog() {
      this.dialog.open(CompanySearchDialogComponent);
      this.service.getCompanies().subscribe(res=>{
        console.log(res);
      })
      this.service.getRegions().subscribe(res=>{
        console.log(res);
      })
    }


  ngOnInit(): void {


  }

}

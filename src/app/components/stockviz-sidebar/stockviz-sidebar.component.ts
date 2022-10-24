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
  clickedCompany: any | undefined;
  constructor(private service:CommonService,
  public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
     const dialogRef = this.dialog.open(CompanySearchDialogComponent, {
        width: '80%',
        enterAnimationDuration,
        exitAnimationDuration,
        data: {name: this.clickedCompany}
      });
      dialogRef.afterClosed().subscribe(res =>{
        this.clickedCompany = res;
        this.service.clickedCompany(res);
      })

    }


  ngOnInit(): void {

  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/service/common-service';
import { MatDialog } from '@angular/material/dialog';
import { CompanySearchDialogComponent } from '../company-search-dialog/company-search-dialog.component';



@Component({
  selector: 'app-stockviz-sidebar',
  templateUrl: './stockviz-sidebar.component.html',
  styleUrls: ['./stockviz-sidebar.component.scss'],

})
export class StockvizSidebarComponent implements OnInit{
  clickedCompany: any | undefined;
  collapsed: boolean = false;
  constructor(private service:CommonService,
  public dialog: MatDialog) { }

  iconRight: string = 'arrow_right_alt';
  iconLeft: string = 'arrow_left_alt';

  @Output() onCollapsed = new EventEmitter<boolean>()
  change(event:any){
    this.collapsed = !this.collapsed;
    this.onCollapsed.emit(event);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
     const dialogRef = this.dialog.open(CompanySearchDialogComponent, {
        width: '90%',
        enterAnimationDuration,
        exitAnimationDuration,
        data: {name: this.clickedCompany}
      });
      dialogRef.afterClosed().subscribe(result =>{
        this.clickedCompany = Array.from(result);
        this.service.clickedCompany(this.clickedCompany);
      })
    }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common-service';

@Component({
  selector: 'app-stockviz-company-details',
  templateUrl: './stockviz-company-details.component.html',
  styleUrls: ['./stockviz-company-details.component.scss']
})
export class StockvizCompanyDetailsComponent implements OnInit {

  clickedCompany: any;
  constructor(private service:CommonService) {
    this.service.clickedCompany$.subscribe((data) => {
      this.clickedCompany = data;
    });
}

  ngOnInit(): void {

  }

}

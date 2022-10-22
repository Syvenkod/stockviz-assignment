import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common-service';

@Component({
  selector: 'app-stockviz-company-details',
  templateUrl: './stockviz-company-details.component.html',
  styleUrls: ['./stockviz-company-details.component.scss']
})
export class StockvizCompanyDetailsComponent implements OnInit {

  constructor(private service:CommonService) { }

  ngOnInit(): void {
  }

}

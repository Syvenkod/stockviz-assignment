import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common-service';

@Component({
  selector: 'app-stockviz-sidebar',
  templateUrl: './stockviz-sidebar.component.html',
  styleUrls: ['./stockviz-sidebar.component.scss']
})
export class StockvizSidebarComponent implements OnInit {

  constructor(private service:CommonService) { }

  ngOnInit(): void {
  }

}

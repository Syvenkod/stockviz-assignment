import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stockviz-assignment';
  flag = false;

  onCollapsed (event:any){
    this.flag = !this.flag
  }

}

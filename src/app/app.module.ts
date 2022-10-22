import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockvizSidebarComponent } from './components/stockviz-sidebar/stockviz-sidebar.component';
import { StockvizCompanyDetailsComponent } from './components/stockviz-company-details/stockviz-company-details.component';
import { CompanySearchDialogComponent } from './components/company-search-dialog/company-search-dialog.component';
import { FormatePipe } from './shared/pipe/formate.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StockvizSidebarComponent,
    StockvizCompanyDetailsComponent,
    CompanySearchDialogComponent,
    FormatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

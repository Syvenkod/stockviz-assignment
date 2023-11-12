import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockvizSidebarComponent } from './components/stockviz-sidebar/stockviz-sidebar.component';
import { StockvizCompanyDetailsComponent } from './components/stockviz-company-details/stockviz-company-details.component';
import { CompanySearchDialogComponent } from './components/company-search-dialog/company-search-dialog.component';
import { FormatePipe } from './shared/pipe/formate.pipe';
import { AutofocusDirective } from './shared/directive/autofocus.directive'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxsReadMoreModule } from '@minni/read-more';

@NgModule({
  declarations: [
    AppComponent,
    StockvizSidebarComponent,
    StockvizCompanyDetailsComponent,
    CompanySearchDialogComponent,
    FormatePipe,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgxsReadMoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

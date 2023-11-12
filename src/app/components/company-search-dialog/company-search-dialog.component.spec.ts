import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanySearchDialogComponent } from './company-search-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('CompanySearchDialogComponent', () => {
  let component: CompanySearchDialogComponent;
  let fixture: ComponentFixture<CompanySearchDialogComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySearchDialogComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

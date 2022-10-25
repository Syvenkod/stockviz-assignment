import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockvizCompanyDetailsComponent } from './stockviz-company-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('StockvizCompanyDetailsComponent', () => {
  let component: StockvizCompanyDetailsComponent;
  let fixture: ComponentFixture<StockvizCompanyDetailsComponent>;
  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockvizCompanyDetailsComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockvizCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpClient = TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

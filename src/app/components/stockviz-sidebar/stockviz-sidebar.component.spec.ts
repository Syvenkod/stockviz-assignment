import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockvizSidebarComponent } from './stockviz-sidebar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';

describe('StockvizSidebarComponent', () => {
  let component: StockvizSidebarComponent;
  let fixture: ComponentFixture<StockvizSidebarComponent>;

  let httpClient: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockvizSidebarComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: MatDialog, useValue: {}  },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockvizSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

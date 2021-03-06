import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeDesktopComponent } from './home.component.desktop';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { TranslateTestingModule } from '../../../../test/utils/translate-mock.service';

describe('HomeComponent', () => {
  let component: HomeDesktopComponent;
  let fixture: ComponentFixture<HomeDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        TranslateTestingModule,
      ],
      declarations: [
        HomeDesktopComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
      providers: [
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

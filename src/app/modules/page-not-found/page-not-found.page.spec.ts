import {ComponentFixture, TestBed} from "@angular/core/testing";
import {SharedModule} from "../../shared/shared.module";
import {PageNotFoundPageComponent} from "./page-not-found.page";

describe('PageNotFoundPageComponent', () => {

  let component: PageNotFoundPageComponent;
  let fixture: ComponentFixture<PageNotFoundPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [PageNotFoundPageComponent],
    });

    fixture = TestBed.createComponent(PageNotFoundPageComponent);
    component = fixture.componentInstance;
  });

  it('should have a Component', () => {
    expect(component).toBeTruthy();
  });

});

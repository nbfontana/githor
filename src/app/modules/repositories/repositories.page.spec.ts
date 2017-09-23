import {RepositoriesPageComponent} from "app/modules/repositories/repositories.page";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DebugElement} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RepositoriesGuard} from "./repositories.guard";
import {ActivatedRoute} from "@angular/router";
import {Observable} from 'rxjs/Rx';
import {GithubRepository} from "./repository";

describe('RepositoriesPageComponent', () => {

  let component: RepositoriesPageComponent;
  let fixture: ComponentFixture<RepositoriesPageComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepositoriesPageComponent],
      imports: [SharedModule],
      providers: [
        RepositoriesGuard, {
          provide: ActivatedRoute,
          useValue: {queryParams: Observable.of({username: 'nbfontana'})}
        }]
    });

    fixture = TestBed.createComponent(RepositoriesPageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = debugElement.nativeElement;
  });

  it('should have a Component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a loading component', () => {
    expect(element.innerHTML).toContain("loading");
  });

  it('should have a githor-paginator component', () => {
    expect(element.innerHTML).toContain("githor-paginator");
  });

  it('showPaginator() should return the correct boolean value', () => {
    expect(component.showPaginator()).toBeFalsy();
    component.repositories = [new GithubRepository(), new GithubRepository()];
    component.loading = false;
    expect(component.showPaginator()).toBeTruthy();
    component.loading = true;
    expect(component.showPaginator()).toBeFalsy();
    component.loading = false;
    component.repositories = [];
    expect(component.showPaginator()).toBeFalsy();
  });
});

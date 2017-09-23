import {UsersPageComponent} from "./users.page";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DebugElement} from "@angular/core/src/core";
import {SharedModule} from "../../shared/shared.module";
import {GithubUser} from "./github-user";

describe('UsersPageComponent', () => {

  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [UsersPageComponent],
    });

    fixture = TestBed.createComponent(UsersPageComponent);
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

  it('should have a github-user-card component', () => {
    expect(element.getElementsByTagName("github-user-card")).toBeTruthy();
  });

  it('showNotFound() should return the correct boolean value', () => {
    expect(component.showNotFound()).toBeFalsy();
    component.users = [];
    expect(component.showNotFound()).toBeTruthy();
    component.users = [new GithubUser()];
    expect(component.showNotFound()).toBeFalsy();
  });

  it('showUsersAndPaginator() should return the correct boolean value', () => {
    expect(component.showUsersAndPaginator()).toBeFalsy();
    component.users = [new GithubUser(), new GithubUser()];
    component.loading = false;
    expect(component.showUsersAndPaginator()).toBeTruthy();
    component.loading = true;
    expect(component.showUsersAndPaginator()).toBeFalsy();
    component.loading = false;
    component.users = [];
    expect(component.showUsersAndPaginator()).toBeFalsy();
  });
});

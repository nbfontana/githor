import {Component, OnDestroy} from "@angular/core";
import {SearchConfig} from "../users/users.config";
import {GithubService} from "app/shared/services/github.service";
import {ActivatedRoute} from "@angular/router";

const ITEMS_PER_PAGE: number = 2;

@Component({
  selector: 'repositories-page',
  templateUrl: 'repositories.page.html'
})
export class RepositoriesPageComponent implements OnDestroy {

  public loading: boolean;
  public username: string;
  public repositories: any[] = [];
  public searchConfig: SearchConfig = new SearchConfig();

  private routeParamsSubscrible;

  constructor(private githubService: GithubService,
              private activatedRoute: ActivatedRoute) {
    this.initialize();
  }

  ngOnDestroy(): void {
    if (this.routeParamsSubscrible) {
      this.routeParamsSubscrible.unsubscribe();
    }
  }

  private initialize() {
    this.routeParamsSubscrible = this.activatedRoute.queryParams.subscribe(params => {
      this.username = params['username'];
      this.searchConfig.userName = this.username;
      this.searchConfig.itemsPerPage = ITEMS_PER_PAGE;

      this.getRepositories();
    });
  }

  public nextPage() {
    if (this.loading) {
      return;
    }

    if (this.repositories.length === this.searchConfig.itemsPerPage) {
      this.searchConfig.page = this.searchConfig.page + 1;
    }

    this.getRepositories();
  }

  public previousPage() {
    if (this.loading) {
      return;
    }

    if (this.searchConfig.page > 1) {
      this.searchConfig.page = this.searchConfig.page - 1;
    }
    this.getRepositories();
  }

  public showPaginator(): boolean {
    return !this.loading && this.repositories.length > 0;
  }

  private getRepositories() {
    this.loading = true;
    this.githubService.getRepositories(this.searchConfig).subscribe((data) => {
      this.loading = false;
      this.repositories = data
    }, () => this.loading = false);
  }
}

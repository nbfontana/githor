import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'github-users-paginator',
  templateUrl: 'github-users-paginator.component.html',
  styleUrls: ['./github-users-paginator.component.scss']
})
export class GithubUsersPaginatorComponent {

  @Input() visible: boolean = true;

  @Output() public nextPage = new EventEmitter();
  @Output() public previousPage = new EventEmitter();

  public next(): void {
    this.nextPage.next();
  }

  public previous(): void {
    this.previousPage.next();
  }
}


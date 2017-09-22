import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'githor-paginator',
  templateUrl: 'githor-paginator.component.html',
  styleUrls: ['./githor-paginator.component.scss']
})
export class GithorPaginatorComponent {

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


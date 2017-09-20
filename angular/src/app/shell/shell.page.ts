import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'shell',
  templateUrl: 'shell.page.html',
  styleUrls: ['./shell.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShellComponent {
  public isCollapsed: boolean = true;

  public collapse(): void {
    this.isCollapsed = true;
  }

  public collapsed(event: any): void {}
  public expanded(event: any): void {}
}

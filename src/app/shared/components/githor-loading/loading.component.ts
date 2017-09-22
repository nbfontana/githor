import {Component, Input} from "@angular/core";

@Component({
  selector: 'loading',
  templateUrl: 'loading.component.html'
})
export class LoadingComponent {
  @Input() visible: boolean = false;
}


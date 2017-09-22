import {Component, Inject} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {HttpClient} from '../../http/http-client';

@Component({
  selector: 'comment-user',
  templateUrl: 'comment-user.dialog.html',
})
export class CommentUserDialogComponent {

  public user: string = '';
  public comment: string = '';

  constructor(public dialogRef: MdDialogRef<CommentUserDialogComponent>,
              @Inject(MD_DIALOG_DATA) public data: any) {
    this.user = data;
    this.getLocalStorageComment();
  }

  public done() {
    localStorage.setItem(this.user, this.comment);
    this.dialogRef.close();
  }

  private getLocalStorageComment(): void {
    this.comment = localStorage.getItem(this.user);
  }
}

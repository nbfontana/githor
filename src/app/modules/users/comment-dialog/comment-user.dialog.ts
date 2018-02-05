import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {HttpClient} from '../../http/http-client';

@Component({
  selector: 'comment-user',
  templateUrl: 'comment-user.dialog.html',
})
export class CommentUserDialogComponent {

  public user: string = '';
  public comment: string = '';

  constructor(public dialogRef: MatDialogRef<CommentUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.user = data;
    this.getLocalStorageComment();
  }

  public done() {
    if (this.comment) {
      localStorage.setItem(this.user, this.comment);
    } else {
      localStorage.removeItem(this.user);
    }

    this.dialogRef.close();
  }

  private getLocalStorageComment(): void {
    this.comment = localStorage.getItem(this.user);
  }
}

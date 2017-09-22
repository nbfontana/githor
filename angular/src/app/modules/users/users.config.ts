export class SearchConfig {

  public language: string;
  public userName: string = '';
  public itensPerPage: number = 12;

  private pageNumber: number;
  private searchPlace: string;

  get place(): string {
    return this.searchPlace || 'Brazil';
  }

  set place(place: string) {
    this.searchPlace = place;
  }

  get page(): number {
    return this.pageNumber || 1;
  }

  set page(page: number) {
    this.pageNumber = page;
  }
}

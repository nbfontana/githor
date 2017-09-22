export class SearchConfig {

  public pageNumber: number;
  public searchPlace: string;
  public language: string;
  public userName: string = '';

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

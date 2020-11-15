export class Book {
  readonly id: number;
  readonly isbn: string;
  public title: string;
  public author: string;
  public bookFormat: BookFormat;
  public status: PublicationStatus;
  public bisac: string;
  public mainDescription: string;
  public publicationDate: Date;
  public salesTerritory: string;
  public pageCount: number;
  public totalRuntime: number;
  public spineSize: number;
  public weight: number;
  public trimSize: number;
  public keywords: string[];

  constructor(id: number, isbn: string, title: string, author: string, description?: string) {
      this.id = id;
      this.isbn = isbn;
      this.title = title;
      this.author = author;
      this.mainDescription = description ?? "n/a";
      this.bookFormat = BookFormat.EBOOKS;
      this.status = PublicationStatus.PUBLISHED;
      this.bisac = "n/a";
      this.publicationDate = new Date(Date.now());
      this.salesTerritory = "n/a";
      this.pageCount = 0;
      this.totalRuntime = 0;
      this.spineSize = 0;
      this.weight = 0;
      this.trimSize = 0;
      this.keywords = [];
  }

  public format(): string {
      return `${this.title} written by ${this.author}`;
  }

  public static parse(data: any): Book {
      let objData = data;
      let parsedBook: Book;

      parsedBook = new Book(objData.id, objData.isbn, objData.title, objData.author, objData.description);
      parsedBook.bookFormat = objData.bookFormat ?? BookFormat.EBOOKS;
      parsedBook.status = objData.status ?? PublicationStatus.PUBLISHED;
      parsedBook.bisac = objData.bisac ?? "n/a";
      parsedBook.publicationDate = objData.publicationDate ?? new Date(Date.now());
      parsedBook.salesTerritory = objData.salesTerritory ?? "n/a";
      parsedBook.pageCount = objData.pageCount ?? 0;
      parsedBook.totalRuntime = objData.totalRuntime ?? 0;
      parsedBook.spineSize = objData.spineSize ?? 0;
      parsedBook.weight = objData.weight ?? 0;
      parsedBook.trimSize = objData.trimSize ?? 0;
      parsedBook.keywords = objData.keywords ?? [];

      return parsedBook;
  }

}

export enum BookFormat {
    HARDCOVER,
    PAPERBACK,
    EBOOKS
}

export enum PublicationStatus {
    INCOMPLETE,
    UNASSIGNED,
    INREVIEWEXTERNAL,
    INREVIEWINTERNAL,
    AUTHORREVISION,
    INEDITING,
    PUBLISHED,
    REJECTED
}
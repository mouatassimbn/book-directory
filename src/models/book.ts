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
  }

  format(): string {
      return `${this.title} written by ${this.author}`;
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
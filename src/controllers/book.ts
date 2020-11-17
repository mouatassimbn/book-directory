import { Entities } from "../models/entities";
import { Request, Response, NextFunction } from "express";
import { Book } from "../models/book";

export function show(req: Request, res: Response, nxt: NextFunction): void {
  const entities = new Entities();

  entities.getAll((data: Book[]) => {
    res.status(200).send(data);
  });
}

export function get(req: Request, res: Response, nxt: NextFunction): void {
  const bookId: number = Number.parseInt(req.params.id);
  const entities: Entities = new Entities();

  entities.getAll((data: Book[]) => {
    let foundBook = data.find((book) => book.id === bookId);

    if (foundBook) {
      res.status(200).send(foundBook);
    } else {
      res.status(404).send({ error: "Requested book is not found!" });
    }
  });
}

export function store(req: Request, res: Response, nxt: NextFunction): void {
  //TODO: Add validation 
  let book: Book = Book.parse(req.body);

  let entities: Entities = new Entities();

  entities.books.push(book);
  entities.save((data: string) => {
    res.status(201).send(data);
  });
}

export function update(req: Request, res: Response, nxt: NextFunction): void {
  //TODO: Add validation
  const bookId: number = Number.parseInt(req.params.id);
  const entities: Entities = new Entities();

  entities.getAll((data: Book[]) => {
    let foundBook = data.find((book) => book.id === bookId);

    if(foundBook){
      let updatedBook: Book = Book.parse(req.body);

      foundBook.author = updatedBook.author || foundBook.author;
      foundBook.title = updatedBook.title || updatedBook.title;
      foundBook.bookFormat = updatedBook.bookFormat || foundBook.bookFormat;
      foundBook.status = updatedBook.status || foundBook.status;
      foundBook.bisac = updatedBook.bisac || foundBook.bisac;
      foundBook.mainDescription = updatedBook.mainDescription || foundBook.mainDescription;
      foundBook.publicationDate = updatedBook.publicationDate || foundBook.publicationDate;
      foundBook.salesTerritory = updatedBook.salesTerritory || foundBook.salesTerritory;
      foundBook.pageCount = updatedBook.pageCount || foundBook.pageCount;
      foundBook.totalRuntime = updatedBook.totalRuntime || foundBook.totalRuntime;
      foundBook.trimSize = updatedBook.trimSize || foundBook.trimSize;
      foundBook.weight = updatedBook.weight || foundBook.weight;
      foundBook.keywords = updatedBook.keywords || foundBook.keywords;

      const index = entities.books.indexOf(foundBook);

      entities.books[index] = foundBook;
      entities.save((data: string) => {
        res.status(200).send(data);
      });
    }
    else {
      res.status(404).send({ error: "Requested book is not found!" });
    }

  });
}

export function destroy(req: Request, res: Response, nxt: NextFunction): void {
  res.status(405).send({ error: "Not Implemented yet" });
}

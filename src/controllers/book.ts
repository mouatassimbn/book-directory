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
  const entities = new Entities();

  entities.getAll((data: Book[]) => {
    let found = data.find((book) => book.id === bookId);

    if (found) {
      res.status(200).send(found);
    } else {
      res.status(404).send({ error: "Requested book is not found!" });
    }
  });
}

export function store(req: Request, res: Response, nxt: NextFunction): void {
  let bookInfo = req.body;

  let book: Book = Book.parse(bookInfo);

  let entities = new Entities();

  entities.books.push(book);
  entities.save((data: string) => {
    res.status(201).send(data);
  });
}

export function update(req: Request, res: Response, nxt: NextFunction): void {
  res.status(405).send({ error: "Not Implemented yet" });
}

export function destroy(req: Request, res: Response, nxt: NextFunction): void {
  res.status(405).send({ error: "Not Implemented yet" });
}

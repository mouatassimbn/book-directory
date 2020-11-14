import fs from "fs";
import path from "path";
import { Book } from "./book";

export class Entities {
  private path: string;
  public books: Book[];

  constructor() {
    this.path = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "books.json"
    );
  }

  //TODO: Improve saving logic
  //TODO: make fucntion structure more clear
  public save(callback: Function): void {
      let parsedData: string = JSON.stringify(this.books);
      fs.writeFile(this.path, parsedData, (err) => {
          if(err){
              throw err;
          }

          callback(this.books);
      });
  }

  //TODO: Improve callback  
  public getAll(callback: Function): void {
      this.defaultQuery(callback);
  }
  
  //TODO: improve logic at a later iteration
  private defaultQuery(callback: Function): void {
    fs.readFile(this.path, (err, data) => {
        if(err){
            throw err;
        }

        let parsedData = JSON.parse(data.toString()); 

        this.books = parsedData;

        callback(this.books);
    });
  }
}
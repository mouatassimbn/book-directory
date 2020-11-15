import express from "express"
import { show, get, store, update, destroy } from "../controllers/book"

export const router = express.Router();

router.get('/books', show);
router.get('/books/:id', get);
router.post('/books', store);
router.put('/books/:id', update);
router.delete('/books/:id', destroy);
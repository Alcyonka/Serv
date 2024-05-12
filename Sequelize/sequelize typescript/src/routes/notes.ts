import { Router } from 'express';

import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
  getNoteById
} from '../controller/notes';

const router = Router();


router.post('/note', createNote);

router.get('/notes', getAllNotes);

router.get('/note/:id', getNoteById);

router.put('/note/:id', updateNote);

router.delete('/note/:id', deleteNote);

export default router;
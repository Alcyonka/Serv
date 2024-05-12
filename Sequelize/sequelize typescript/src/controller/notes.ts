import express, { RequestHandler } from 'express';
import  Note  from '../models/note';

export const createNote: RequestHandler = async (req, res, next) => {
  try {
    const note = await Note.create({ ...req.body });
    return res
      .status(200)
      .json({ message: 'Note created successfully', data: note });
  } catch (error) {
    next(error);
  }
};

export const deleteNote: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByPk(id);
    await Note.destroy({ where: { id } });
    return res
      .status(200)
      .json({ message: 'Note deleted successfully', data: deletedNote });
  } catch (error) {
    next(error);
  }
};

export const getAllNotes: RequestHandler = async (req, res, next) => {
  try {
    const allNotes = await Note.findAll();
    return res
      .status(200)
      .json({ message: 'Note fetched successfully', data: allNotes });
  } catch (error) {
    next(error);
  }
};

export const getNoteById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = await Note.findByPk(id);
    return res
      .status(200)
      .json({ message: 'Note fetched successfully', data: note });
  } catch (error) {
    next(error);
  }
};

export const updateNote: RequestHandler = async (req, res, next) => {
  try {
  const { id } = req.params;
  await Note.update({ ...req.body }, { where: { id } });
  const updatedNote = await Note.findByPk(id);
  return res
  .status(200)
  .json({ message: "Note updated successfully", data: updatedNote });
  } catch (error) {
  next(error);
  }
  };

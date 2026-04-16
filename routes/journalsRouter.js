import { Router } from 'express'
import { getJournalById, createJournal } from '../controllers/journalsController.js';

const journalsRouter = Router();

const links = [
  { href: "/journals", text: "Journals" },
  { href: "journals/new", text: "Write a new journal entry" },
];

journalsRouter.get("/", (req, res) => {
    res.render("index", { links });
})

journalsRouter.get("/new", (req, res) => {
    res.render("form")
})

journalsRouter.post("/new", createJournal)

journalsRouter.get("/:journalId", getJournalById)


export default journalsRouter;
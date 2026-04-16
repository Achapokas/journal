import db from '../db.js'
import CustomNotFoundError from '../errors/CustomNotFoundError.js';

export async function getJournalById(req, res) {
    const { journalId } = req.params;

    const journal = await db.getJournalById(Number(journalId))

    if(!journal) {
        throw new CustomNotFoundError("Journal not found")
    }

    res.send(`Journal Title: ${journal.title}`)

    // try {
    // } catch(e) {
    //     console.log("Error retrieving journal", e)
    //     const statusCode = e.statusCode || 500
    //     res.status(statusCode).send("Internal server error")
    // }
}

export async function createJournal(req, res) {
    db.newJournal(req.body)

    res.redirect("/journals")
}
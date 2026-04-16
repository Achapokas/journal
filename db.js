const journals = [
    {id: 1, title: 'Journal 1', body: "Lorem ipsum"},
    {id: 2, title: 'Journal 2', body: "Lorem ipsum"},
    {id: 3, title: 'Journal 3', body: "Lorem ipsum"}
]

async function getJournalById(journalId) {
    return journals.find(({id}) => id === journalId)
}

async function newJournal(obj) {
    const lastJournal = journals.pop()
    const lastJournalId = lastJournal.id

    const newJournal = {id: lastJournalId + 1, ...obj}

    journals.push(newJournal)
}


export default { getJournalById, newJournal }
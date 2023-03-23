const {nanoid} = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (request, h) => {
    const {title, tags, body} = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    notes.push({id, title, tags, body, createdAt, updatedAt});

    const isSuccess = notes.filter(note => note.id === id).length > 0;

    if (isSuccess) {
        return h.response({
            status: "success",
            message: "Catatan berhasil ditambahkan",
            data: {
                noteId: id,
            },
        }).code(201);
    }

    return h.response({
        status: "fail",
        message: "Catatan gagal ditambahkan",
    }).code(500);
};

const getAllNotesHandler = () => ({
    status: "success",
    data: {
        notes,
    },
});

const getNoteById = (request, h) => {
    const {id} = request.params;

    const note = notes.find(note => note.id === id);

    if (note !== undefined) {
        return h.response({
            status: "success",
            data: {
                note,
            },
        });
    }

    return h.response({
        status: "fail",
        message: "Catatan tidak ditemukan",
    }).code(404);
};

const editNoteById = (request, h) => {
    const {id} = request.params;

    const {title, tags, body} = request.payload;
    const updatedAt = new Date().toISOString();

    const noteIndex = notes.findIndex(note => note.id === id);

    if (noteIndex !== -1) {
        notes[noteIndex] = {
            ...notes[noteIndex],
            title,
            tags,
            body,
            updatedAt,
        };

        return h.response({
            status: "success",
            message: "Catatan berhasil diperbarui",
        });
    }

    return h.response({
        status: "fail",
        message: "Gagal memperbarui catatan. Id tidak ditemukan",
    }).code(404);
};

const deleteNoteById = (request, h) => {
    const {id} = request.params;

    const noteIndex = notes.findIndex(note => note.id === id);

    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);

        return h.response({
            status: "success",
            message: "Catatan berhasil dihapus",
        });
    }

    return h.response({
        status: "fail",
        message: "Catatan gagal dihapus. Id tidak ditemukan",
    }).code(404);
};

module.exports = {
    addNoteHandler,
    getAllNotesHandler,
    getNoteById,
    editNoteById,
    deleteNoteById,
};

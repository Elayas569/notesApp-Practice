export const addNewNote = ({
  newNote,
  setNewNote,
  setNotes,
  setModalVisible,
}) => {
  if (newNote.trim() === "") return;

  setNotes((prevNotes) => [
    ...prevNotes,
    { id: Date.now().toString(), text: newNote },
  ]);

  setNewNote("");
  setModalVisible(false);
};

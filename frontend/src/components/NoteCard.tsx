import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import type React from "react";
import { AxiosApiInstance } from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (
    e: React.FormEvent<HTMLFormElement>,
    noteId: number
  ) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await AxiosApiInstance.delete(`/notes/${noteId}`);
      setNotes((prev) => prev.filter((x) => x._id !== noteId)); // Remove the deleted note from notes collection so that the UI will be updated
      toast.success("Note deleted successfully!");
    } catch (error) {
      console.log("error while deleting note: ", error);
      toast.error("Failed to delete the note!");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className=" card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4  border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className=" card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;

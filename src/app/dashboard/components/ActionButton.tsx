import { FloppyDiskBackIcon, TrashIcon } from "@/lib/icons";
import handleDelete from "../handlers/delete.handler";
import handleUpdate from "../handlers/update.handler";

export default function ActionButton({
  book,
  bookData,
}: {
  book: Book;
  bookData: Book;
}) {
  if (book === bookData)
    return (
      <button onClick={() => handleDelete(bookData)}>
        <TrashIcon color="black" />
      </button>
    );

  return (
    <button onClick={() => handleUpdate(bookData)}>
      <FloppyDiskBackIcon color="black" />
    </button>
  );
}

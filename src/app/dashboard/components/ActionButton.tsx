import { FloppyDiskBackIcon, TrashIcon } from "@/lib/icons";

export default function ActionButton({
  book,
  bookData,
}: {
  book: Book;
  bookData: Book;
}) {
  if (book === bookData)
    return (
      <button>
        <TrashIcon color="black"  />
      </button>
    );

  return (
    <button>
      <FloppyDiskBackIcon color="black"  />
    </button>
  );
}

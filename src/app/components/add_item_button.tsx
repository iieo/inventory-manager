import Link from "next/link";

function AddItemButton() {
  return (
    <Link
      href={"/items/create"}
      className="bg-fuchsia-900 rounded-xl p-4 flex-end text-center"
    >
      Add Item
    </Link>
  );
}

export default AddItemButton;

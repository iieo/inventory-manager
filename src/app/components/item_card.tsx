"use client";
import { deleteItem } from "@/database/database_handler";
import { InventoryItem } from "@/inventory_item";
import { revalidatePath } from "next/cache";
import Link from "next/link";

type ItemCardProps = {
  item: InventoryItem;
};

function ItemCard({ item }: ItemCardProps) {
  return (
    <div className=" flex flex-row justify-between border-2 border-black p-4 rounded-xl mb-4">
      <Link href={`/items/${item.id}`}>
        <div>
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <p>{item.location}</p>
        </div>
      </Link>
      <button
        onClick={() => {
          deleteItem(item.id);
        }}
        className="rounded border-2 px-4"
      >
        Delete
      </button>
    </div>
  );
}

export default ItemCard;

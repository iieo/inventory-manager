import { getItem } from "@/database/database_handler";
import { InventoryItem } from "@/inventory_item";
import Link from "next/link";

type ItemScreenParams = {
  params: { id: string };
};

async function ItemScreen({ params }: ItemScreenParams) {
  if (isNaN(Number(params.id))) {
    return <h1>Invalid id</h1>;
  }
  const item: InventoryItem | null = await getItem(Number(params.id));
  if (!item) {
    return <h1>Id {params.id} not found!</h1>;
  }
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24">
      <div className="border-xl border-2 border-black p-4 min-w-80 rounded-xl flex flex-col">
        <h2 className="text-2xl font-bold m-8">{item.name}</h2>
        <p className="p-4">Price: {item.price}</p>
        <p className="p-4">Location: {item.location}</p>
        <p className="p-4">Rebuy: {item.rebuy}</p>
        <p className="p-4">Category: {item.category}</p>
        <Link
          className="border-2 rounded mt-4 p-2 hover:bg-fuchsia-950 border-black text-center"
          href="/"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}

export default ItemScreen;

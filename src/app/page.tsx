import Image from "next/image";
import Link from "next/link";
import InventoryList from "./components/inventory_list";
import AddItemButton from "./components/add_item_button";

export default function Home() {
  return (
    <main className="flex flex-col max-h-dvh h-dvh">
      <div className="m-24 flex flex-col ">
        <h1 className="text-4xl text-center font-bold pb-5">Inventory Items</h1>
        <InventoryList />
        <AddItemButton />
      </div>
    </main>
  );
}

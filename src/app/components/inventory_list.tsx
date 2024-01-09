import db from "@/database/database";
import { inventoryItem } from "@/database/schema";
import ItemCard from "./item_card";
import { getItems } from "@/database/database_handler";
import { useEffect, useState } from "react";
import { InventoryItem } from "@/inventory_item";
import { revalidatePath } from "next/cache";

async function InventoryList() {
  let items = await getItems();

  return (
    <div className="overflow-auto h-4/5">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default InventoryList;

"use server";

import { AddInventoryItem } from "@/app/items/create/page";
import db from "./database";
import { inventoryItem } from "./schema";
import { eq } from "drizzle-orm";
import { InventoryItem } from "@/inventory_item";
import { revalidatePath } from "next/cache";

async function insertItem(item: AddInventoryItem): Promise<boolean> {
  if (!item.name || item.name.trim() === "") {
    console.log("Name cannot be empty");
    return false;
  }
  let itemPrice: number | null = item.price
    ? Number.parseInt(item.price)
    : null;
  await db.insert(inventoryItem).values({
    name: item.name,
    location: item.location,
    price: itemPrice,
    category: item.category,
  });
  return true;
}

async function deleteItem(id: number) {
  await db.delete(inventoryItem).where(eq(inventoryItem.id, id));
  revalidatePath("/");
}

async function getItem(id: number): Promise<InventoryItem | null> {
  const result = await db
    .select()
    .from(inventoryItem)
    .where(eq(inventoryItem.id, id))
    .limit(1);
  if (result.length === 0) {
    return null;
  } else {
    return result[0];
  }
}

async function getItems(): Promise<InventoryItem[]> {
  return await db.select().from(inventoryItem).orderBy(inventoryItem.name);
}

export { insertItem, deleteItem, getItem, getItems };

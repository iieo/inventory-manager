"use client";

import db from "@/database/database";
import { insertItem } from "@/database/database_handler";
import { inventoryItem } from "@/database/schema";
import Link from "next/link";
import { useState } from "react";

export type AddInventoryItem = {
  name: string | undefined;
  location: string | undefined;
  category: string | undefined;
  price: string | undefined;
};

function CreateScreen() {
  const emptyItem = {
    name: undefined,
    location: undefined,
    category: undefined,
    price: undefined,
  };
  let [item, setItem] = useState<AddInventoryItem>(emptyItem);
  let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(item);

    let success = await insertItem(item);
    if (success) {
      setItem(emptyItem);
      window.location.href = "/";
    }
  };

  function buildInputItem(name: string, isNumeric = false) {
    return (
      <>
        <label htmlFor={name}>{name}</label>
        <input
          id={name}
          type={isNumeric ? "number" : "text"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setItem({ ...item, [name.toLocaleLowerCase()]: e.target.value });
          }}
          className="border-2 rounded mb-4 p-2 bg-fuchsia-900 border-black"
        ></input>
      </>
    );
  }

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24">
      <form
        onSubmit={handleSubmit}
        className="bg-fuchsia-900 p-8 rounded-xl flex flex-col"
      >
        {buildInputItem("Name")}
        {buildInputItem("Location")}
        {buildInputItem("Category")}
        {buildInputItem("Price", true)}
        <input
          type="submit"
          value="Add Item"
          className="border-2 rounded mt-4 p-2 hover:bg-fuchsia-950 border-black"
        />
        <Link
          className="border-2 rounded mt-4 p-2 hover:bg-fuchsia-950 border-black text-center"
          href="/"
        >
          Back home
        </Link>
      </form>
    </main>
  );
}

export default CreateScreen;

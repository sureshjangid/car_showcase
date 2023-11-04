"use client";
import { searchManufacturerProps } from "@/types";
import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";
const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: searchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filterManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className={"absolute top-[14px]"}>
            <Image
              src={"/car-logo.svg"}
              width={20}
              height={20}
              className="ml-4"
              alt="car Logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className={"search-manufacturer__input"}
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {
                filterManufacturers.length ===0 && query !=="" ?(
                  <Combobox.Option
                  value={query}
                  className={'search-manufacturer__option'}>
Create '{query}'
                  </Combobox.Option>
                ) : (
                  filterManufacturers?.map((item)=>(
                    <Combobox.Option
                    key={item} className={({active})}>

                    </Combobox.Option>
                  ))
                )
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;

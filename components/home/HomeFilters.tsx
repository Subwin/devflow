"use client";
import { HomePageFilters } from "@/constants/filters";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const active = "frequent";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => {
        return (
          <Button
            key={item.value}
            onClick={() => {}}
            className={`body-medium rounded-lg bg-light-800 px-6 py-3 text-light-500 ${active === item.value && "bg-primary-100 text-primary-500"}`}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilters;

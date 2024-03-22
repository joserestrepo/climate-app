import React from "react";
import { MdOutlineDateRange } from "react-icons/md";

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("es-CO", options).format(date);
};

const CurrentDate = () => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  return (
    <div className="flex items-center gap-1">
      {" "}
      <MdOutlineDateRange /> {formattedDate.replace(/de/g, " ")}
    </div>
  );
};

export default CurrentDate;

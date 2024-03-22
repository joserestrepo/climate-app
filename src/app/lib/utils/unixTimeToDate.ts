import { timeStamp } from "console";

export const unixTimeToDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const hourMinutes = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const hourMinutesFormatted = hourMinutes.substring(0, 5);

  return hourMinutesFormatted;
};

export const unixTimeToDateTime = (timestamp: number) => {
  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const date = new Date(timestamp * 1000);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${day} ${month} ${dayOfWeek}`;
};

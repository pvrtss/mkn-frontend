import dayjs from "dayjs";

const months = [
  "янв.",
  "фев.",
  "мар.",
  "апр.",
  "мая",
  "июня",
  "июля",
  "авг.",
  "сен.",
  "окт.",
  "ноя.",
  "дек.",
];

export const getDeadlineString = (timestamp: string) => {
  const date = dayjs(+timestamp);
  const hours = date.hour();
  const minutes = date.minute();
  return (
    date.date().toString() +
    " " +
    months[date.month()] +
    ", " +
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes
  );
};

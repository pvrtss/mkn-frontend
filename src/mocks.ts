import { ds_Notification } from "./api/generated";

export const SomeNotificationsMock: ds_Notification[] = [
  {
    deadline: "31 мар., 18:00",
    description: "Реферат на тему дауби",
    error_status: 0,
    id: "uuid1",
    section_id: "История",
    status: "delivered",
    title: "Сделать реферат по истории",
  },
  {
    deadline: "1 апр., 12:00",
    description: "Реферат на тему дауби",
    error_status: 0,
    id: "uuid2",
    section_id: "Домашние дела",
    status: "delivered",
    title: "Помыть окна",
  },
  {
    deadline: "12 апр., 17:00",
    description: "Очень важная встреча",
    error_status: 0,
    id: "uuid3",
    section_id: "ПСК Проминвест",
    status: "delivered",
    title: "Встреча с заказчиком",
  },
];

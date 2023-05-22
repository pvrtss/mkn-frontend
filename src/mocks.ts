import {
  ds_Notification,
  ds_Project,
  ds_Section,
  ds_User,
} from "./api/generated";

export const SomeNotificationsMock: ds_Notification[] = [
  {
    deadline: "1684192740000",
    description: "Реферат на тему дауби",
    error_status: 0,
    id: "uuid1",
    section_id: "История",
    status: "delivered",
    title: "Сделать реферат по истории",
  },
  {
    deadline: "1684192740000",
    description: "Реферат на тему дауби",
    error_status: 0,
    id: "uuid2",
    section_id: "Домашние дела",
    status: "delivered",
    title: "Помыть окна",
  },
  {
    deadline: "1684192740000",
    description: "Очень важная встреча",
    error_status: 0,
    id: "uuid3",
    section_id: "ПСК Проминвест",
    status: "delivered",
    title: "Встреча с заказчиком",
  },
];

export const SomeProjects: ds_Project[] = [
  {
    color: "#9F2525",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.",
    id: "uuid21",
    last_edited: "timestamp",
    owner_id: "uuid1",
    title: "Учеба",
  },
  {
    color: "#323232",
    description: "Напоминания по рабочим вопросам, так сказать.",
    id: "uuid22",
    last_edited: "timestamp",
    owner_id: "uuid2",
    title: "Работа",
  },
  {
    color: "#2558DB",
    description: "Вполне приличное",
    id: "uuid23",
    last_edited: "timestamp",
    owner_id: "uuid3",
    title: "Личное",
  },
  {
    color: "#9F2525",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.",
    id: "uuid24",
    last_edited: "timestamp",
    owner_id: "uuid1",
    title: "Учеба",
  },
  {
    color: "#323232",
    description: "Напоминания по рабочим вопросам, так сказать.",
    id: "uuid25",
    last_edited: "timestamp",
    owner_id: "uuid2",
    title: "Работа",
  },
  {
    color: "#2558DB",
    description: "Вполне приличное",
    id: "uuid26",
    last_edited: "timestamp",
    owner_id: "uuid3",
    title: "Личное",
  },
];

export const SomeFavouriteProjects: ds_Project[] = [
  {
    color: "#9F2525",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.",
    id: "uuid21",
    last_edited: "timestamp",
    owner_id: "uuid1",
    title: "Учеба",
  },
  {
    color: "#323232",
    description: "Напоминания по рабочим вопросам, так сказать.",
    id: "uuid23",
    last_edited: "timestamp",
    owner_id: "uuid2",
    title: "Работа",
  },
  {
    color: "#2558DB",
    description: "Вполне приличное",
    id: "uuid25",
    last_edited: "timestamp",
    owner_id: "uuid3",
    title: "Личное",
  },
];

export const NotificationsMock: ds_Notification[] = [
  {
    deadline: "1684192740000",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.",
    error_status: 0,
    id: "uuid1",
    section_id: "uuid1",
    status: "scheduled",
    title: "Сделать реферат по истории",
  },
  {
    deadline: "1684192740000",
    description: "Реферат на тему дауби",
    error_status: 0,
    id: "uuid2",
    section_id: "uuid1",
    status: "delivered",
    title: "Сдать документацию",
  },

  {
    deadline: "1684192740000",
    description: "Реферат на тему дауби",
    error_status: 0,
    id: "uuid3",
    section_id: "uuid1",
    status: "undelivered",
    title: "Дауби",
  },
  {
    deadline: "1684192740000",
    description: "Реферат на тему дауби",
    error_status: 0,
    id: "uuid4",
    section_id: "uuid1",
    status: "delivered",
    title: "Сделать реферат по истории",
  },
  {
    deadline: "1684192740000",
    description: "Реферат на тему дауби",
    error_status: 0,
    id: "uuid5",
    section_id: "uuid2",
    status: "delivered",
    title: "Сделать реферат по истории",
  },
];

export const SectionsMock: ds_Section[] = [
  {
    color: "#DB2525",
    id: "uuid1",
    project_id: "uuid1",
    title: "СТ",
  },
  {
    color: "#2558DB",
    id: "uuid2",
    project_id: "uuid1",
    title: "ТМО",
  },
  {
    color: "#25DB63",
    id: "uuid3",
    project_id: "uuid1",
    title: "Философия",
  },
];

export const CollaborantsMock: ds_User[] = [
  {
    email: "pvrtss@gmail.com",
    id: "uuid1",
    is_manager: 0,
    username: "pvrts",
  },
  {
    email: "sanyazay@gmail.comdasdasddasdasdas",
    id: "uuid2",
    is_manager: 0,
    username: "sanyazay",
  },
  {
    email: "vvjkee@gmail.com",
    id: "uuid3",
    is_manager: 0,
    username: "vvjkee",
  },
  {
    email: "shdav@gmail.com",
    id: "uuid4",
    is_manager: 0,
    username: "shdav",
  },
  {
    email: "daubi@gmail.com",
    id: "uuid5",
    is_manager: 0,
    username: "daubi",
  },
  {
    email: "pvrtss@gmail.com",
    id: "uuid1",
    is_manager: 0,
    username: "pvrts",
  },
  {
    email: "sanyazay@gmail.comdasdasddasdasdas",
    id: "uuid2",
    is_manager: 0,
    username: "sanyazay",
  },
  {
    email: "vvjkee@gmail.com",
    id: "uuid3",
    is_manager: 0,
    username: "vvjkee",
  },
  {
    email: "shdav@gmail.com",
    id: "uuid4",
    is_manager: 0,
    username: "shdav",
  },
  {
    email: "daubi@gmail.com",
    id: "uuid5",
    is_manager: 0,
    username: "daubi",
  },
];

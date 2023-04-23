import React from "react";

import { UpcomingNotificationsProps } from "./UpcomingNotifications.types";
import {
  EmptyStub,
  UCNotificationsList,
  UCNotificationsListWrap,
} from "./UpcomingNotifications.style";
import { SmallNotficationCard } from "../SmallNotficationCard";

export const UpcomingNotifications: React.FC<UpcomingNotificationsProps> = ({
  notifications,
}) => {
  return (
    <UCNotificationsListWrap>
      {notifications.length ? (
        <UCNotificationsList>
          {notifications.map((n, key) => (
            <SmallNotficationCard
              key={key}
              notifcation={n}
            ></SmallNotficationCard>
          ))}
        </UCNotificationsList>
      ) : (
        <EmptyStub>Нет ближайших уведомлений</EmptyStub>
      )}
    </UCNotificationsListWrap>
  );
};

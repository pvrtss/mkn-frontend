import React from "react";

import { ProfilePageProps } from "./ProfilePage.types";
import { Section } from "../../components/main/Sidebar/Sidebar.types";
import { PageLayout } from "../../components/common/PageLayout";
import {
  PageContent,
  PageTitle,
} from "../../components/common/PageLayout/PageLayout.style";
import { EditInput } from "../../components/common/EditInput";
import { EditInputWrap } from "./ProfilePage.style";
import { Button } from "@mui/material";

export const ProfilePage: React.FC<ProfilePageProps> = () => {
  const handleLogout = () => {
    alert("logout");
  };

  return (
    <PageLayout sidebarSection={Section.Profile}>
      <PageContent>
        <PageTitle>Профиль</PageTitle>
        <EditInputWrap>
          <EditInput
            onSave={() => {
              alert("save action");
            }}
            label="Email"
            defaultValue="pvrtss@gmail.com"
            mt="60px"
          />
        </EditInputWrap>
        <Button
          sx={{ mt: "32px" }}
          onClick={handleLogout}
          variant="outlined"
          color="error"
        >
          ВЫХОД
        </Button>
      </PageContent>
    </PageLayout>
  );
};

import { User } from "@src/API";
import React, { useState } from "react";

interface IModelHubContext {
  user?: User;
  setUser?: (user: User) => void;
  search?: string;
  setSearch?: (search: string) => void;
  listVisible?: boolean;
  setListVisible?: (listVisible: boolean) => void;
}

export const ModelHubContext: React.Context<IModelHubContext> =
  React.createContext({} as IModelHubContext);

export const ModelHubProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({
    createdAt: "",
    id: "",
    name: "joseph",
    updatedAt: "",
    __typename: "User",
  });
  const [search, setSearch] = useState<string>("");
  const [listVisible, setListVisible] = useState<boolean>(false);
  const context = {
    user,
    setUser,
    search,
    setSearch,
    listVisible,
    setListVisible,
  };
  return (
    <ModelHubContext.Provider value={context}>
      {children}
    </ModelHubContext.Provider>
  );
};

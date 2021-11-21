import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useEffect, useState } from "react";
import { clearObject } from "../../../util";
import { useDebounce, useMount } from "../../../hook";
import qs from "qs";
const url = process.env.REACT_APP_API_URL;
export interface paramType {
  name: string;
  personId: number | string;
}
export interface usersType {
  id: number;
  name: string;
}
export interface listType {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}

export const ProjectList = () => {
  const [param, setParam] = useState<paramType>({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState<usersType[]>([]);
  const [list, setList] = useState<listType[]>([]);
  const debouncedParam = useDebounce<paramType>(param, 200);
  useMount(() => {
    fetch(`${url}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  useEffect(() => {
    fetch(
      `${url}/projects?${qs.stringify(clearObject<paramType>(debouncedParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debouncedParam]);
  return (
    <>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </>
  );
};

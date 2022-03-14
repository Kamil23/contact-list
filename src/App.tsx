import styled from "styled-components";
import apiData from "./api";
import { useFetch } from "./hooks/useFetch";
import Info from "./components/Info";
import List from "./components/List";

export interface Person {
  firstNameLastName: string;
  jobTitle: string;
  emailAddress: string;
}
export interface PersonData extends Person {
  id: string,
  data: Person
};
export interface ApiData {
  isLoading: boolean,
  isError: boolean,
  data: PersonData[],
  fetchAgain: () => void,
};

function App() {
  const { data, isLoading, isError, fetchAgain } = useFetch<Person>(apiData, []);

  return (
    <AppWrapper>
      <List data={data} />
      <Info loading={isLoading} error={isError} handleAgain={fetchAgain} />
    </AppWrapper>
  );
}

export default App;

// styled-components

const AppWrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: fit-content;
  text-align: center;
  justify-content: center;
  text-align: center;
`;

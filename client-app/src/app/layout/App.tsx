import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Computer } from "../models/computer";
import NavBar from "./NavBar";
import ComputerDashboard from "../../features/computers/dashboard/ComputerDashboard";
import { v4 as uuid } from "uuid";

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_AXIOS_BASEURL;
  const [computers, setComputers] = useState<Computer[]>([]);
  const [selectedComputer, setSelectedComputer] = useState<
    Computer | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Computer[]>("/computers").then((response) => {
      setComputers(response.data);
    });
  }, []);

  function handleSelectComputer(id: string) {
    axios.get<Computer>(`/computers/${id}`).then((response) => {
      setSelectedComputer(response.data);
    });
  }

  function handleCancelSelectComputer() {
    setSelectedComputer(undefined);
  }

  function handleFormOpen(id?: string) {
    handleCancelSelectComputer();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditComputer(computer: Computer) {
    computer.id = uuid();
    axios
      .post<void>(
        `${computer.type === "Desktop" ? "desktops" : "laptops"}`,
        computer
      )
      .then(() => {
        setComputers([...computers, computer]);
        setSelectedComputer(computer);
        setEditMode(false);
      });
  }

  function handleDeleteComputer(id: string) {
    axios.delete<void>(`/computers/${id}`).then(() => {
      setComputers([...computers.filter((x) => x.id !== id)]);
    });
  }

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: "7em" }}>
        <ComputerDashboard
          computers={computers}
          selectedComputer={selectedComputer}
          selectComputer={handleSelectComputer}
          cancelSelectComputer={handleCancelSelectComputer}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditComputer}
          deleteComputer={handleDeleteComputer}
        />
      </Container>
    </>
  );
}

export default App;

import React, { SyntheticEvent } from "react";
import { Grid } from "semantic-ui-react";
import { Computer } from "../../../app/models/computer";
import ComputerDetails from "../details/ComputerDetails";
import ComputerForm from "../form/ComputerForm";
import ComputerList from "./ComputerList";

interface Props {
  computers: Computer[];
  selectedComputer: Computer | undefined;
  selectComputer: (id: string) => void;
  cancelSelectComputer: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (computer: Computer) => void;
  deleteComputer: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean;
  target: string;
}

export default function ComputerDashboard({
  computers,
  selectedComputer,
  deleteComputer,
  selectComputer,
  cancelSelectComputer,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  submitting,
  target,
}: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ComputerList
          computers={computers}
          selectComputer={selectComputer}
          deleteComputer={deleteComputer}
          submitting={submitting}
          target={target}
        />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedComputer && !editMode && (
          <ComputerDetails
            computer={selectedComputer}
            cancelSelectComputer={cancelSelectComputer}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ComputerForm
            closeForm={closeForm}
            computer={selectedComputer}
            createOrEdit={createOrEdit}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}

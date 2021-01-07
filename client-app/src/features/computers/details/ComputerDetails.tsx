import React from "react";
import { Button, Card, Image, Label } from "semantic-ui-react";
import { Computer } from "../../../app/models/computer";

interface Props {
  computer: Computer;
  cancelSelectComputer: () => void;
  openForm: (id: string) => void;
}

export default function ComputerDetails({
  computer,
  cancelSelectComputer,
  openForm,
}: Props) {
  return (
    <Card fluid>
      <Image src={`/assets/${computer.type}.jpg`} />
      <Card.Content>
        <Label
          as="a"
          color={computer.type === "Desktop" ? "teal" : "red"}
          ribbon="right"
        >
          {computer.type}
        </Label>
        <Card.Header>{computer.model}</Card.Header>
        <Card.Meta>
          <div>{computer.id}</div>
        </Card.Meta>
        <Card.Description>
          {computer.type === "Desktop" && (
            <Label color="teal">
              Form Factor
              <Label.Detail>{computer.formFactor}</Label.Detail>
            </Label>
          )}
          {computer.type === "Laptop" && (
            <Label color="red">
              Screen Size
              <Label.Detail>{computer.screenSize}</Label.Detail>
            </Label>
          )}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            onClick={cancelSelectComputer}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}

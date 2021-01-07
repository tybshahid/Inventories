import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Computer } from "../../../app/models/computer";

interface Props {
  computers: Computer[];
  selectComputer: (id: string) => void;
  deleteComputer: (id: string) => void;
}

export default function ComputerList({
  computers,
  selectComputer,
  deleteComputer,
}: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {computers.map((computer) => (
          <Item key={computer.id}>
            <Item.Content>
              <Item.Header as="a">{computer.model}</Item.Header>
              <Item.Meta>{computer.brand}</Item.Meta>
              <Item.Description>
                <Label size="tiny">
                  USB Ports
                  <Label.Detail>{computer.usbPorts}</Label.Detail>
                </Label>
                <Label size="tiny">
                  RAM Slots
                  <Label.Detail>{computer.ramSlots}</Label.Detail>
                </Label>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectComputer(computer.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  onClick={() => deleteComputer(computer.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={computer.type} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}

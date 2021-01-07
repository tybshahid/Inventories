import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Button, DropdownProps, Form, Segment } from "semantic-ui-react";
import { Computer } from "../../../app/models/computer";

interface Props {
  computer: Computer | undefined;
  closeForm: () => void;
  createOrEdit: (computer: Computer) => void;
  submitting: boolean;
}

export default function ComputerForm({
  computer: selectedComputer,
  closeForm,
  createOrEdit,
  submitting,
}: Props) {
  const initialState = selectedComputer ?? {
    id: "",
    model: "",
    type: "Laptop",
    processor: "i5",
    brand: "Dell",
    usbPorts: "1",
    ramSlots: "2",
    formFactor: "Tower",
    screenSize: "14",
  };

  const [computer, setComputer] = useState(initialState);

  function handleSubmit() {
    createOrEdit(computer);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setComputer({ ...computer, [name]: value });
  }

  function handleSelectChange(
    event: SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) {
    setComputer({ ...computer, [data.name]: data.value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Model"
          value={computer.model}
          name="model"
          onChange={handleInputChange}
          required
        />
        <Form.Dropdown
          onChange={handleSelectChange}
          options={[
            { key: 1, text: "Desktop", value: "Desktop" },
            { key: 2, text: "Laptop", value: "Laptop" },
          ]}
          placeholder="Choose Computer Type"
          selection
          name="type"
          value={computer.type}
        />
        <Form.Dropdown
          onChange={handleSelectChange}
          options={[
            { key: 1, text: "i3", value: "i3" },
            { key: 2, text: "i5", value: "i5" },
            { key: 3, text: "i7", value: "i7" },
          ]}
          placeholder="Choose Processor"
          selection
          name="processor"
          value={computer.processor}
        />
        <Form.Dropdown
          onChange={handleSelectChange}
          options={[
            { key: 1, text: "Lenovo", value: "Lenovo" },
            { key: 2, text: "Dell", value: "Dell" },
            { key: 3, text: "Sony", value: "Sony" },
          ]}
          placeholder="Choose Brand"
          selection
          name="brand"
          value={computer.brand}
        />
        <Form.Dropdown
          onChange={handleSelectChange}
          options={[
            { key: 1, text: "1", value: "1" },
            { key: 2, text: "2", value: "2" },
            { key: 3, text: "3", value: "3" },
          ]}
          placeholder="Choose USB Ports"
          selection
          name="usbPorts"
          value={computer.usbPorts}
        />
        <Form.Dropdown
          onChange={handleSelectChange}
          options={[
            { key: 1, text: "1", value: "1" },
            { key: 2, text: "2", value: "2" },
          ]}
          placeholder="Choose RAM Slots"
          selection
          name="ramSlots"
          value={computer.ramSlots}
        />
        {computer.type === "Desktop" && (
          <Form.Dropdown
            onChange={handleSelectChange}
            options={[
              { key: 1, text: "Tower", value: "Tower" },
              { key: 2, text: "SFF", value: "SFF" },
            ]}
            placeholder="Choose Form Factor"
            selection
            name="formFactor"
            value={computer.formFactor}
          />
        )}
        {computer.type === "Laptop" && (
          <Form.Dropdown
            onChange={handleSelectChange}
            options={[
              { key: 1, text: "14", value: "14" },
              { key: 2, text: "15", value: "15" },
            ]}
            placeholder="Choose Screen Size"
            selection
            name="screenSize"
            value={computer.screenSize}
          />
        )}
        <Button
          loading={submitting}
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button
          onClick={closeForm}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}

"use client";

import React from "react";
import { useState } from "react";
import { Button, ButtonToolbar, Form, Input } from "rsuite";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = formValues;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Show success message
        // Reset form
      } else {
        // Show error message
      }
    } catch (error) {
      // Handle error
    }
  };

  const [formValues, setFormValues] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Fixes error with Textarea 'rows' property
  interface TextareaProps extends React.ComponentProps<typeof Input> {
    rows?: number;
  }

  const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    (props, ref) => <Input {...props} as="textarea" ref={ref} />
  );

  return (
    <div id="contact">
      <h2>Contact</h2>
      <Form layout="horizontal">
        <Form.Group controlId="name-6">
          <Form.ControlLabel>Name</Form.ControlLabel>
          <Form.Control name="name" />
          <Form.HelpText tooltip>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email-6">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" />
          <Form.HelpText tooltip>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email-subject">
          <Form.ControlLabel>Subject</Form.ControlLabel>
          <Form.Control name="subject" type="text" />
        </Form.Group>
        <Form.Group controlId="textarea-1">
          <Form.ControlLabel>Message</Form.ControlLabel>
          <Form.Control rows={5} name="textarea" accepter={Textarea} />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary">Submit</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

"use client";

import React from "react";
import { useState } from "react";
import { Button, ButtonToolbar, Form, Input } from "rsuite";

type FormData = {
  name: string;
  replyTo: string;
  subject: string;
  message: string;
};

export const Contact = () => {
  const [name, setName] = useState<string>("");
  const [replyTo, setReplyTo] = useState<string>("");
  const [subject, setSubject] = useState<string>(""); // TODO: Add character restriction to 988
  const [message, setMessage] = useState<string>("");

  const resetForm = () => {
    setName("");
    setReplyTo("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = async () => {
    const formData: FormData = { name, replyTo, subject, message };

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
        console.log("message sent successfully");
        // Show success message
        // Reset form
      } else {
        console.log("XD");
        // Show error message
      }
    } catch (error) {
      console.log("LOL");
      // Handle error
    }
  };

  return (
    <div id="contact">
      <h2>Contact</h2>
      <Form layout="horizontal">
        <Form.Group controlId="name-6">
          <Form.ControlLabel>Name</Form.ControlLabel>
          <Form.Control name="name" value={name} onChange={setName} />
          <Form.HelpText tooltip>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email-6">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control
            name="email"
            type="email"
            value={replyTo}
            onChange={setReplyTo}
          />
          <Form.HelpText tooltip>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email-subject">
          <Form.ControlLabel>Subject</Form.ControlLabel>
          <Form.Control
            name="subject"
            type="text"
            value={subject}
            onChange={setSubject}
          />
        </Form.Group>
        <Form.Group controlId="textarea-1">
          <Form.ControlLabel>Message</Form.ControlLabel>
          <Form.Control name="textarea" value={message} onChange={setMessage} />
        </Form.Group>
        <Form.Group>
          <ButtonToolbar>
            <Button appearance="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button appearance="default" onClick={resetForm}>
              Reset
            </Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </div>
  );
};

"use client";

import React from "react";
import { useForm, Controller, ControllerRenderProps } from "react-hook-form";
import { Input, Button, Form, InputProps } from "rsuite";
import { RsRefForwardingComponent } from "rsuite/esm/internals/types";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type formFieldType = "name" | "email" | "subject" | "message";

type FieldProps = {
  as: RsRefForwardingComponent<"input", InputProps>;
  field: ControllerRenderProps<FormData, formFieldType>;
  error: string | undefined;
  placeholder: string;
};

const validationModel = {
  name: {
    required: "Name is required",
  },
  email: {
    required: "Email is required",
    pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
  },
  subject: {
    required: "Subject is required",
    maxLength: { value: 980, message: "Max length 980 characters" },
  },
  message: {
    required: "Message is required",
    maxLength: { value: 1500, message: "Max length 1500 characters" },
  },
};

const Field = ({
  as: Component = Input,
  field,
  error,
  placeholder,
}: FieldProps) => {
  return (
    <Form.Group>
      <Form.ControlLabel>{placeholder}:</Form.ControlLabel>
      <Component
        id={field.name}
        value={field.value}
        onChange={(value) => field.onChange(value)}
        placeholder={placeholder}
      />
      <Form.ErrorMessage show={!!error} placement="bottomStart">
        {error}
      </Form.ErrorMessage>
    </Form.Group>
  );
};

export const Contact = () => {
  const defaultValues: FormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  return (
    <div id="contact">
      <h2>Contact</h2>
      <Form
        onSubmit={(formValue, event) => {
          event && handleSubmit(onSubmit)(event);
        }}
      >
        <Controller
          name="name"
          control={control}
          rules={validationModel.name}
          render={({ field, fieldState }) => (
            <Field
              as={Input}
              field={field}
              error={errors[field.name]?.message}
              placeholder="Name"
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={validationModel.email}
          render={({ field, fieldState }) => (
            <Field
              as={Input}
              field={field}
              error={errors[field.name]?.message}
              placeholder="Email"
            />
          )}
        />
        <Controller
          name="subject"
          control={control}
          rules={validationModel.subject}
          render={({ field, fieldState }) => (
            <Field
              as={Input}
              field={field}
              error={errors[field.name]?.message}
              placeholder="Subject"
            />
          )}
        />
        <Controller
          name="message"
          control={control}
          rules={validationModel.message}
          render={({ field, fieldState }) => (
            <Field
              as={Input}
              field={field}
              error={errors[field.name]?.message}
              placeholder="Message"
            />
          )}
        />
        <Button appearance="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

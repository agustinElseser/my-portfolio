import { useState } from "react";

import { Input, Textarea, Form, FormDiv, Button, Title } from "./styled-components";

interface Form {
  name: string;
  email: string;
  tel: number | string;
  coment: string;
}

const initialState = {
  name: "",
  email: "",
  tel: "",
  coment: "",
};

const Contact = () => {
  const [form, setForm] = useState<Form>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ form }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        setForm(initialState);
      });
  };

  const a = `<`;
  const b = `>`;
  return (
    <>
      <div className="center">
        <FormDiv>
          {a}form{b}
        </FormDiv>
        <Title>Ante cualquier duda, comuníquese conmigo:</Title>
        <Form className="contacto" autoComplete="off" onSubmit={handleSubmit}>
          <Input placeholder="Nombre" name="name" type="text" value={form.name} onChange={handleChange} autoComplete="off" required />

          <Input placeholder="Email" name="email" type="email" value={form.email} onChange={handleChange} required />

          <Input placeholder="Teléfono" name="tel" type="text" value={form.tel} onChange={handleChange} required />

          <Textarea
            placeholder="Escribe tu comentario"
            cols={5}
            rows={10}
            name="coment"
            value={form.coment}
            onChange={handleChange}
            required
          ></Textarea>

          <Button>ENVIAR</Button>
        </Form>
        <FormDiv>
          {a}/form{b}
        </FormDiv>
      </div>
    </>
  );
};

export default Contact;

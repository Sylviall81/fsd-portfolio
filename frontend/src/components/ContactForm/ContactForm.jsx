import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor
    console.log("Datos del formulario:", formData);
  };

  return (
    <>
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jane Appleseed"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="contact-form-label" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="123-456-789"
            value={formData.phone}
            onChange={handleChange}
          />

          <label className="contact-form-label" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <label className="contact-form-label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="How can I help?"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <ColorButton type="submit" text="MESSAGE ME" />
        </form>
      </div>
    </>
  );
};

export default ContactForm;

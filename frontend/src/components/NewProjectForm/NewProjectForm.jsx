import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./NewProjectForm.css";
import ProjectService from "../../services/ProjectService";

function NewProjectForm() {
  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    project_background: "",
    project_link: "",
    project_repo: "",
    cover_image_url: "",
    hero_img_url: "",
    static_preview_1: "",
    static_preview_2: "",
    static_preview_3: "",
  });

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log("Datos del formulario:", formData);
  //--> prueba si funciona el handleOnchange

  //const  api = ContactDataService();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor
    ProjectService.storeProjectData(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));

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

          <button type="submit">ENVIAR</button>

          <ColorButton text="MESSAGE ME" />

          

        </form>
      </div>
    </>



  )
 
 
}

export default NewProjectForm;

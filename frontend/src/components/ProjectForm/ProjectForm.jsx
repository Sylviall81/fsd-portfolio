import React, { useState } from "react";
import ColorButton from "../ColorButton/ColorButton";
import "./ProjectForm.css";
import ProjectService from "../../services/ProjectService";

const ProjectForm = () => {
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

  //const  api = ProjectDataService();

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
          <label className="contact-form-label" htmlFor="title">
            Project Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Jane Appleseed"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <label className="contact-form-label" htmlFor="short_description">
            Short Description
          </label>
          <textarea
            id="short_description"
            name="short_description"
            rows="4"
            placeholder="Set a short description of the project"
            value={formData.short_description}
            onChange={handleChange}
          />

          <label className="contact-form-label" htmlFor="project_background">
            Background
          </label>
          <textarea
            type="textarea"
            id="project_background"
            name="project_background"
            rows="4"
            placeholder="Set a description of the project"
            value={formData.project_background}
            onChange={handleChange}
          />

          <label className="contact-form-label" htmlFor="project_link">
            Live Preview
          </label>
          <input
            type="url"
            id="project_link"
            name="project_link"
            placeholder="Enter a valid URL"
            value={formData.project_link}
            onChange={handleChange}
          />

          <label className="contact-form-label" htmlFor="project_repo">
            GitHub Link
          </label>
          <input
            type="url"
            id="project_repo"
            name="project_repo"
            placeholder="Insert the URL for the GitHub repository"
            value={formData.project_repo}
            onChange={handleChange}
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
  );
};

export default ProjectForm;

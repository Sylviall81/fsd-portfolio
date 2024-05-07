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
            required
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
            required
            onChange={handleChange}
          />

          <label className="contact-form-label" htmlFor="cover_image_url">
            Cover Image
          </label>
          <input
            type="url"
            id="cover_image_url"
            name="cover_image_url"
            placeholder="Insert the URL for a cover image of the project"
            value={formData.cover_image_url}
            onChange={handleChange}
          />

          <label className="contact-form-label" htmlFor="hero_image_url">
            Hero Image
          </label>
          <input
            type="url"
            id="hero_image_url"
            name="hero_image_url"
            placeholder="Insert the URL for the main image of the project"
            value={formData.hero_img_url}
            onChange={handleChange}
          />

          <label className="contact-form-label" htmlFor="static_preview_1">
            Aditional Static Images
          </label>
          <input
            type="url"
            id="static_preview_1"
            name="static_preview_1"
            placeholder="Insert additional images of the project"
            value={formData.static_preview_1}
            onChange={handleChange}
          />

          <input
            type="url"
            id="static_preview_2"
            name="static_preview_2"
            placeholder="Insert additional images of the project"
            value={formData.static_preview_2}
            onChange={handleChange}
          />

          <input
            type="url"
            id="static_preview_3"
            name="static_preview_3"
            placeholder="Insert additional images of the project"
            value={formData.static_preview_3}
            onChange={handleChange}
          />

          <button type="submit">ENVIAR</button>

          <ColorButton text="MESSAGE ME" />
        </form>
      </div>
    </>
  );
};

export default ProjectForm;

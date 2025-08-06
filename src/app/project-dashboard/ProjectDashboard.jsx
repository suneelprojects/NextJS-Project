/** @format */

"use client";
import React, { useState } from "react";
import { db, storage } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Image from "next/image";

const ProjectDashboard = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    featuredBasedTitle: "",
    projectSubTitle: "",
    projectImage: "",
    projectLink: "",
    topicsCovered: "",
    toolsTechnologies: "",
    description: "",
  });
  const [projects, setProjects] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  // const [toolLogos, setToolLogos] = useState([]);
  // const [filteredTools, setFilteredTools] = useState([]);
  // const [showSuggestions, setShowSuggestions] = useState(false);
  const [toolsTechnologies, setToolsTechnologies] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  // const handleToolsChange = (e) => {
  //     const value = e.target.value;
  //     setToolsTechnologies(value);

  //     if (value.length > 0) {
  //         const filtered = Object.keys(toolLogos).filter((tool) =>
  //             tool.toLowerCase().includes(value.toLowerCase())
  //         );
  //         setFilteredTools(filtered);
  //     }
  // };

  // const handleSelectTool = (tool) => {
  //     setToolsTechnologies((prev) => (prev ? `${prev}, ${tool}` : tool));
  //     setShowSuggestions(false);
  // };

  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
  };

  const handleSaveProject = async () => {
    const {
      projectName,
      projectLink,
      description,
      topicsCovered,
      toolsTechnologies,
    } = formData;
    if (!projectName || !projectLink || !description) {
      alert("All fields are required!");
      return;
    }
    setUploading(true);

    let imageUrl = "";
    if (imageFile) {
      const storageRef = ref(storage, `projects/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      try {
        await uploadTask;
        imageUrl = await getDownloadURL(storageRef);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error uploading image: " + (error.message || error.toString()));
        setUploading(false);
        return;
      }
    }

    const topicsArray = topicsCovered
      ? topicsCovered.split(",").map((topic) => topic.trim())
      : [];
    const toolsArray = toolsTechnologies
      ? toolsTechnologies.split(",").map((tool) => tool.trim())
      : [];

    const newProject = {
      ...formData,
      topicsCovered: topicsArray,
      toolsTechnologies: toolsArray,
      projectImage: imageUrl,
      createdAt: new Date(),
    };

    try {
      await addDoc(collection(db, "projects"), newProject);
      setProjects([...projects, newProject]);
      setFormData({
        projectName: "",
        featuredBasedTitle: "",
        projectSubTitle: "",
        projectImage: "",
        projectLink: "",
        topicsCovered: "",
        toolsTechnologies: "",
        description: "",
      });
      setImageFile(null);
      alert("Project saved successfully!");
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Error saving project. Please try again. " + (error.message || error.toString()));
    }
    setUploading(false);
  };

  const [content, setContent] = useState("");
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const quill = document.querySelector(".ql-editor");
          quill.innerHTML += `<img src="${reader.result}" style="width:300px; height:200px; object-fit:cover;" />`;
        };
        reader.readAsDataURL(file);
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ align: [] }],
        ["blockquote", "code-block"],
        ["link", "image", "video"],
        ["clean"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };

  return (
    <>
      <div className="bg-gray-50 border border-3 rounded-3 m-4">
        <div className="p-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Create a Project
            </h2>
            <div className="d-flex flex-wrap">
              {Object.keys(formData).map((key) =>
                key !== "description" &&
                key !== "content" &&
                key !== "projectImage" ? (
                  <div className="mb-3 me-4" key={key}>
                    <label className="block text-gray-700 fw-bold mb-2 me-2">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </label>
                    <input
                      type="text"
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-3 border-gray-300"
                      placeholder={`Enter ${key
                        .replace(/([A-Z])/g, " $1")
                        .toLowerCase()}`}
                    />
                  </div>
                ) : null
              )}

              <div className="mb-4">
                <label className="block text-gray-700 fw-bold mb-2">
                  Project Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full p-1 border border-gray-300 rounded-lg"
                />
              </div>

              {/* <div className="mb-3">
                               <label className="block text-gray-700 fw-bold mb-2">Tools & Technologies</label>
                               <input
                                   type="text"
                                   name="toolsTechnologies"
                                   value={toolsTechnologies}
                                   onChange={handleToolsChange}
                                   className="w-full p-2 border rounded-3 border-gray-300"
                                   placeholder="Enter tools (e.g., React, Node.js)"
                               />
                               {showSuggestions && (
                                   <ul className="border border-gray-300 rounded-lg mt-1 bg-white absolute z-10">
                                       {filteredTools.map((tool, index) => (
                                           <li
                                               key={index}
                                               onClick={() => handleSelectTool(tool)}
                                               className="p-2 cursor-pointer hover:bg-gray-200"
                                           >
                                               {tool}
                                           </li>
                                       ))}
                                   </ul>
                               )}
                           </div> */}
            </div>

            {/* Project Image Upload Field */}

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Project Explanation
              </label>
              <div
                contentEditable="true"
                className="ql-editor"
                dangerouslySetInnerHTML={{ __html: formData.description }}
                onInput={(e) => setContent(e.target.innerHTML)}
              />
            </div>

            <button
              className="px-6 py-2 rounded-3 fw-semibold shadow-md"
              onClick={handleSaveProject}
              disabled={uploading}
              style={{
                background: "#553cdf",
                color: "white",
              }}
            >
              {uploading ? "Saving..." : "Save Project"}
            </button>
          </div>

          {projects.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Saved Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {project.projectName}
                    </h3>
                    {project.projectImage && (
                      <Image
                        src={project.projectImage}
                        alt="Project"
                        className="w-full h-40 object-cover rounded-lg mb-2"
                      />
                    )}
                    {project.projectLink ? (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {project.projectLink}
                      </a>
                    ) : (
                      <span className="text-gray-500">No link available</span>
                    )}
                    <div
                      dangerouslySetInnerHTML={{ __html: project.description }}
                      className="mt-4 text-gray-600"
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectDashboard;

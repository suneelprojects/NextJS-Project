'use client';

import { useState, useEffect } from 'react';
import { db, storage } from '../../../../firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Plus, Minus, Upload, X, Edit2, Trash2, ExternalLink, Github } from 'lucide-react';

const ProjectDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    thumbnail: '',
    techstack: [],
    liveLink: '',
    githubLink: '',
    teamMembers: [],
    summary: '',
    category: '',
    videoLink: '',
    highlights: []
  });
  const [editingId, setEditingId] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'sosprojects'));
        const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTechstackChange = (e) => {
    setFormData({ ...formData, techstack: e.target.value.split(',').map(s => s.trim()) });
  };

  const handleImageUpload = async (e, type, index = null) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show local preview immediately
    const reader = new FileReader();
    reader.onload = (event) => {
      const localUrl = event.target.result;
      if (type === 'thumbnail') {
        setThumbnailPreview(localUrl);
        setFormData({ ...formData, thumbnail: localUrl }); // Temporary local URL
      } else if (type === 'teamMember' && index !== null) {
        const newMembers = [...formData.teamMembers];
        newMembers[index].image = localUrl; // Temporary local URL
        setFormData({ ...formData, teamMembers: newMembers });
      }
    };
    reader.readAsDataURL(file);

    try {
      // Create a unique filename
      const fileName = `${Date.now()}-${file.name}`;
      const storageRef = ref(storage, `sos-projects/${fileName}`);

      // Upload file to Firebase Storage
      await uploadBytes(storageRef, file);

      // Get download URL
      const downloadURL = await getDownloadURL(storageRef);

      // Update with permanent URL
      if (type === 'thumbnail') {
        setFormData({ ...formData, thumbnail: downloadURL });
        setThumbnailPreview(downloadURL);
      } else if (type === 'teamMember' && index !== null) {
        const newMembers = [...formData.teamMembers];
        newMembers[index].image = downloadURL;
        setFormData({ ...formData, teamMembers: newMembers });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
      // Revert to placeholder on error
      if (type === 'thumbnail') {
        setThumbnailPreview('');
        setFormData({ ...formData, thumbnail: '' });
      } else if (type === 'teamMember' && index !== null) {
        const newMembers = [...formData.teamMembers];
        newMembers[index].image = '';
        setFormData({ ...formData, teamMembers: newMembers });
      }
    }
  };

  const addTeamMember = () => {
    setFormData({ ...formData, teamMembers: [...formData.teamMembers, { image: '', fullname: '', linkedin: '' }] });
  };

  const updateTeamMember = (index, field, value) => {
    const newMembers = [...formData.teamMembers];
    newMembers[index][field] = value;
    setFormData({ ...formData, teamMembers: newMembers });
  };

  const removeTeamMember = (index) => {
    setFormData({ ...formData, teamMembers: formData.teamMembers.filter((_, i) => i !== index) });
  };

  const addHighlight = () => {
    setFormData({ ...formData, highlights: [...formData.highlights, ''] });
  };

  const updateHighlight = (index, value) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData({ ...formData, highlights: newHighlights });
  };

  const removeHighlight = (index) => {
    setFormData({ ...formData, highlights: formData.highlights.filter((_, i) => i !== index) });
  };

  const handleSubmit = async () => {
    try {
      if (editingId) {
        await updateDoc(doc(db, 'sosprojects', editingId), formData);
        setEditingId(null);
      } else {
        await addDoc(collection(db, 'sosprojects'), formData);
      }
      setFormData({
        title: '',
        thumbnail: '',
        techstack: [],
        liveLink: '',
        githubLink: '',
        teamMembers: [],
        summary: '',
        category: '',
        videoLink: '',
        highlights: []
      });
      setThumbnailPreview('');
      const querySnapshot = await getDocs(collection(db, 'sosprojects'));
      const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(projectsData);
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleEdit = (project) => {
    setFormData(project);
    setEditingId(project.id);
    setThumbnailPreview(project.thumbnail);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteDoc(doc(db, 'sosprojects', id));
        setProjects(projects.filter(p => p.id !== id));
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-7xl text-center font-bold text-orange-600 mb-12">Project Dashboard</p>
        
        {/* Form Card */}
        <div className="bg-white rounded shadow-lg p-8 mb-12">
          <p className="text-2xl font-bold text-blue-700 text-center mb-6">
            {editingId ? 'Edit Project' : 'Create New Project'}
          </p>
          
          <div className="space-y-6">
            {/* Project Title */}
            <div>
              <label className="block text-lg font-medium text-slate-700 mb-2">Project Title</label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter project title"
                className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Thumbnail Upload */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Thumbnail Image</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded cursor-pointer hover:bg-blue-100 transition">
                  <Upload size={36} />
                  <span>Upload Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'thumbnail')}
                    className="hidden"
                  />
                </label>
                {thumbnailPreview && (
                  <div className="relative">
                    <img src={thumbnailPreview} alt="Preview" className="w-35 h-35 object-cover rounded border-2 border-slate-200" />
                    <button
                      type="button"
                      onClick={() => {
                        setThumbnailPreview('');
                        setFormData({ ...formData, thumbnail: '' });
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Tech Stack</label>
              <input
                name="techstack"
                value={formData.techstack.join(', ')}
                onChange={handleTechstackChange}
                placeholder="React, Node.js, MongoDB (comma separated)"
                className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Links Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Live Link</label>
                <input
                  name="liveLink"
                  value={formData.liveLink}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">GitHub Link</label>
                <input
                  name="githubLink"
                  value={formData.githubLink}
                  onChange={handleChange}
                  placeholder="https://github.com/..."
                  className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Team Members */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-slate-700">Team Members</label>
                <button
                  type="button"
                  onClick={addTeamMember}
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  <Plus size={18} />
                  Add Member
                </button>
              </div>
              
              <div className="space-y-4">
                {formData.teamMembers.map((member, index) => (
                  <div key={index} className="bg-slate-50 border border-slate-200 rounded p-4">
                    <div className="flex items-start gap-4">
                      {/* Image Upload */}
                      <div className="flex-shrink-0">
                        <label className="cursor-pointer">
                          {member.image ? (
                            <img src={member.image} alt="Member" className="w-16 h-16 rounded-full object-cover border-2 border-slate-300" />
                          ) : (
                            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center hover:bg-slate-300 transition">
                              <Upload size={24} className="text-slate-500" />
                            </div>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, 'teamMember', index)}
                            className="hidden"
                          />
                        </label>
                      </div>

                      {/* Member Info */}
                      <div className="flex-1 space-y-3">
                        <input
                          value={member.fullname}
                          onChange={(e) => updateTeamMember(index, 'fullname', e.target.value)}
                          placeholder="Full Name"
                          className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                        <input
                          value={member.linkedin}
                          onChange={(e) => updateTeamMember(index, 'linkedin', e.target.value)}
                          placeholder="LinkedIn URL"
                          className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => removeTeamMember(index)}
                        className="flex-shrink-0 p-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                      >
                        <Minus size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Highlights */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-slate-700">Project Highlights</label>
                <button
                  type="button"
                  onClick={addHighlight}
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  <Plus size={18} />
                  Add Highlight
                </button>
              </div>

              <div className="space-y-4">
                {formData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <input
                      value={highlight}
                      onChange={(e) => updateHighlight(index, e.target.value)}
                      placeholder="Enter a project highlight..."
                      className="flex-1 px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => removeHighlight(index)}
                      className="p-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                    >
                      <Minus size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Project Summary</label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Describe your project..."
                rows="4"
                className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
              />
            </div>

            {/* Category and Video */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                <input
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Web App, Mobile App, etc."
                  className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Video Link</label>
                <input
                  name="videoLink"
                  value={formData.videoLink}
                  onChange={handleChange}
                  placeholder="https://youtube.com/..."
                  className="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="w-1/4 py-3 bg-blue-600 text-white text-lg font-bold rounded hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                {editingId ? 'Update Project' : 'Create Project'}
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div>
          <h2 className="text-2xl font-bold text-slate-700 mb-6">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500">
                  {project.thumbnail ? (
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  )}
                  {project.category && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-white text-slate-700 text-xs font-semibold rounded-full shadow">
                      {project.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{project.summary}</p>
                  
                  {/* Project Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">Highlights</h4>
                      <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techstack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Team Members */}
                  {project.teamMembers && project.teamMembers.length > 0 && (
                    <div className="flex -space-x-2 mb-4">
                      {project.teamMembers.slice(0, 4).map((member, idx) => (
                        <img
                          key={idx}
                          src={member.image || 'https://via.placeholder.com/40'}
                          alt={member.fullname}
                          className="w-8 h-8 rounded-full border-2 border-white object-cover"
                          title={member.fullname}
                        />
                      ))}
                      {project.teamMembers.length > 4 && (
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-semibold">
                          +{project.teamMembers.length - 4}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center text-decoration-none justify-center gap-2 px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition text-sm"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center text-decoration-none justify-center gap-2 px-3 py-2 bg-slate-700 text-white rounded hover:bg-slate-800 transition text-sm"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>

                  {/* Edit/Delete */}
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => handleEdit(project)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition text-sm"
                    >
                      <Edit2 size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded hover:bg-red-100 transition text-sm"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              <p className="text-lg">No projects yet. Create your first project above!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
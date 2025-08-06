/** @format */

// IMPORTANT: Requires lowlight@2.x for Tiptap CodeBlockLowlight compatibility.
"use client";
import React, { useState, useEffect, useRef } from "react";
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight';
import { Camera, Calendar, Tag, Clock, CheckCircle, User, FileText, Upload, X, Save, Trash2, Edit, Search } from 'lucide-react';
import styles from './CourseBlogdashboard.module.css';
import { addDoc, collection, getDocs, deleteDoc, doc, query, orderBy, updateDoc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { auth, db } from '../../../firebase';
import dynamic from 'next/dynamic';
const TiptapEditor = dynamic(() => import('./TiptapEditor'), { ssr: false });

const categories = [
  "Development", "Design", "Marketing", "Business", "Technology", "Programming", 
  "Web Development", "Mobile Development", "Data Science", "AI/ML", "DevOps", "UI/UX"
];

export default function CourseBlogdashboard() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [readTime, setReadTime] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const formRef = useRef();
  const [user, setUser] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && auth) {
      setUser(auth.currentUser);
    }
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        setBlogs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
    const interval = setInterval(fetchBlogs, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await updateDoc(doc(db, "blogs", currentBlogId), {
        title,
        excerpt,
        content,
        category: selectedCategory,
        readTime,
        author,
        tags,
        imageUrl,
        updatedAt: serverTimestamp(),
      });
    } else {
      await addDoc(collection(db, "blogs"), {
        title,
        excerpt,
        content,
        category: selectedCategory,
        readTime,
        author,
        tags,
        imageUrl,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
    setIsEditing(false);
    setCurrentBlogId(null);
    setTitle('');
    setExcerpt('');
    setContent('');
    setSelectedCategory('');
    setReadTime('');
    setAuthor('');
    setTags('');
    setImageUrl('');
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  const handleEdit = (blog) => {
    setIsEditing(true);
    setCurrentBlogId(blog.id);
    setTitle(blog.title);
    setExcerpt(blog.excerpt);
    setContent(blog.content || '');
    setSelectedCategory(blog.category);
    setReadTime(blog.readTime);
    setAuthor(blog.author);
    setTags(blog.tags);
    setImageUrl(blog.imageUrl);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const storageRef = ref(auth.storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Error uploading image:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
        });
      }
    );
  };

  // Toolbar for Tiptap
  const addImage = () => {
    const url = window.prompt('Enter image URL');
    if (url) {
      // This functionality needs to be adapted to the new TiptapEditor component
      // For now, it will be removed or replaced with a placeholder
      console.log("Image upload functionality is not yet implemented with the new TiptapEditor.");
    }
  };

  if (loading && !blogs.length) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>
            <FileText className={styles.titleIcon} />
            Blog Dashboard
          </h2>
          <p className={styles.subtitle}>
            Manage your blog posts with a modern, clean interface.
          </p>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Title</label>
        <input className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        <label className={styles.label}>Excerpt</label>
        <textarea className={styles.textarea} value={excerpt} onChange={e => setExcerpt(e.target.value)} required />
        <label className={styles.label}>Content</label>
        <div className={styles.editorContainer} style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
          <TiptapEditor value={content} onChange={setContent} />
        </div>
        <label className={styles.label}>Category</label>
        <select className={styles.input} value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} required>
          <option value="">Select a category</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <label className={styles.label}>Read Time (minutes)</label>
        <input className={styles.input} type="number" value={readTime} onChange={e => setReadTime(e.target.value)} required />
        <label className={styles.label}>Author</label>
        <input className={styles.input} type="text" value={author} onChange={e => setAuthor(e.target.value)} required />
        <label className={styles.label}>Tags (comma-separated)</label>
        <input className={styles.input} type="text" value={tags} onChange={e => setTags(e.target.value)} />
        <label className={styles.label}>Featured Image</label>
        <input className={styles.input} type="file" accept="image/*" onChange={handleImageUpload} />
        {imageUrl && <img src={imageUrl} alt="Featured" style={{ maxWidth: "100%", borderRadius: 8, marginTop: 8 }} />}
        <button className={styles.submitBtn} type="submit">{isEditing ? 'Update Blog' : 'Create Blog'}</button>
      </form>
      {/* Blog Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: 32 }}>
        {blogs.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', color: '#6b7280' }}>No blogs yet. Create a new one!</div>
        ) : (
          blogs.map(blog => (
            <div key={blog.id} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.07)', padding: 24, display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
              {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: 12 }} />}
              <h3 style={{ fontWeight: 700, fontSize: 22, margin: 0 }}>{blog.title}</h3>
              <div style={{ color: '#6b7280', fontSize: 14 }}>{blog.excerpt}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '8px 0' }}>
                <span style={{ background: '#f3f4f6', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}><Tag size={12} style={{ marginRight: 4 }} />{blog.category}</span>
                <span style={{ background: '#f3f4f6', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}><Clock size={12} style={{ marginRight: 4 }} />{blog.readTime} min</span>
                <span style={{ background: '#f3f4f6', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}><User size={12} style={{ marginRight: 4 }} />{blog.author}</span>
              </div>
              <div style={{ color: '#9ca3af', fontSize: 12 }}>Tags: {blog.tags}</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                <button className={styles.draftBtn} onClick={() => handleEdit(blog)}><Edit size={14} /> Edit</button>
                <button className={styles.resetBtn} onClick={() => handleDelete(blog.id)}><Trash2 size={14} /> Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

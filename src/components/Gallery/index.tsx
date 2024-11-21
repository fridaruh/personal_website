import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { firebaseConfig } from './config';
import { ImageData } from './types';
import './Gallery.css';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (query = '') => {
    try {
      let imagesRef = db.collection('images').orderBy('timestamp', 'desc');

      if (query) {
        imagesRef = imagesRef.where('tags', 'array-contains', query.toLowerCase())
          .or('title', '==', query)
          .or('author', '==', query);
      }

      const snapshot = await imagesRef.get();
      const imageList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ImageData[];
      setImages(imageList);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const file = formData.get('image-file') as File;
    const title = formData.get('image-title') as string;
    const prompt = formData.get('image-prompt') as string;
    const tags = (formData.get('image-tags') as string).split(',').map(tag => tag.trim().toLowerCase());
    const author = formData.get('image-author') as string;

    try {
      const storageRef = storage.ref(`images/${file.name}`);
      await storageRef.put(file);
      const imageUrl = await storageRef.getDownloadURL();

      await db.collection('images').add({
        title,
        prompt,
        tags,
        author,
        imageUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      setShowUploadModal(false);
      form.reset();
      fetchImages();
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <header className="bg-white shadow-sm py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">📸 AI Skills Advanced LoRA's</h1>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search images..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                onChange={(e) => fetchImages(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowUploadModal(true)}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              + Upload New Image
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => {
                setSelectedImage(image);
                setShowDetailModal(true);
              }}
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{image.prompt}</p>
                <div className="flex flex-wrap gap-2">
                  {image.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Upload New Image</h2>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleUpload}>
              <div className="space-y-4">
                <input
                  type="file"
                  name="image-file"
                  accept="image/*"
                  required
                  className="w-full"
                />
                <input
                  type="text"
                  name="image-title"
                  placeholder="Title"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <textarea
                  name="image-prompt"
                  placeholder="Prompt"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  name="image-tags"
                  placeholder="Tags (comma-separated)"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  name="image-author"
                  placeholder="Author"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDetailModal && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedImage.title}</h2>
              <button
                onClick={() => setShowDetailModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full max-h-[60vh] object-contain rounded-lg mb-4"
            />
            <div className="space-y-4">
              <p className="text-gray-600">{selectedImage.prompt}</p>
              <div className="flex flex-wrap gap-2">
                {selectedImage.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-500">By: {selectedImage.author}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
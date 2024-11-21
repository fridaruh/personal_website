export interface ImageData {
  id: string;
  title: string;
  prompt: string;
  tags: string[];
  author: string;
  imageUrl: string;
  timestamp: firebase.firestore.Timestamp;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}
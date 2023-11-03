import React from 'react';
import { useState, useEffect } from 'react';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';
import BlogSection from '../components/BlogSection';
import Spinner from '../components/spinner';
import { toast } from 'react-toastify';
import Trending from '../components/Trending';
import Footer from '../components/Footer';

const Home = ({ setActive, user }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [trendBlogs, setTrendBlogs] = useState([]);

  const getTrendingBlogs = async () => {
    const blogRef = collection(db, 'blogs');
    const trendQuery = query(blogRef, where('trending', '==', 'yes'));
    const querySnapshot = await getDocs(trendQuery);
    let trendBlogs = [];
    querySnapshot.forEach((doc) => {
      trendBlogs.push({ id: doc.id, ...doc.data() });
    });
    setTrendBlogs(trendBlogs);
  };

  useEffect(() => {
    getTrendingBlogs();
    const unsub = onSnapshot(
      collection(db, 'blogs'),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get('tags'));
          list.push({ id: doc.id, ...doc.data() });
        });
        const uniqueTags = [...new Set(tags)];
        setTags(uniqueTags);
        setBlogs(list);
        setLoading(false);
        setActive('home');
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
      getTrendingBlogs();
    };
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure wanted to delete that blog ?')) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, 'blogs', id));
        toast.success('Blog deleted successfully');
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className=' pt-4 '>
      <div className='container-padding'>
        <div className='row mx-0'>
          <Trending blogs={trendBlogs} />
        </div>
        <div>
          <div className=' mt-20  text-black text-2xl text-center font-bold py-2 mb-4 '>
            Daily <span className='text-orange-500'>B</span>logs{' '}
            <span className='text-orange-500'>...</span>
          </div>
          <BlogSection blogs={blogs} user={user} handleDelete={handleDelete} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

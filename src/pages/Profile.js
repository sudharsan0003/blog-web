import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';

const Profile = (setActive) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([false]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, 'users'),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className='bg-orange-300 h-full w-full flex flex-col'>
      <container>
        <div className='flex gap-96 grid-col-2 p-5 '>
          {users &&
            users.map((item) => (
              <div key={item.id}>
                <section className=' flex flex-col'>
                  <container className=' flex flex-col'>
                    <h2>
                      {item.firstName}
                      {item.lastName}
                    </h2>
                    <p>{item.email}</p>
                    <p>{item.city}</p>
                    <p>{item.contact}</p>
                  </container>
                  <div className='flex justify-center items-center'>
                    <button onClick={() => navigate(`/updation/${item.id}`)}>
                      Update
                    </button>
                  </div>
                </section>
              </div>
            ))}
        </div>
      </container>
    </div>
  );
};

export default Profile;

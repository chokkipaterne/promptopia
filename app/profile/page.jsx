'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/prompts`);
      const data = await response.json();
      setPrompts(data);
      console.log(data);
    };
    console.log(session?.user);
    if (session?.user.id) fetchPrompts();
  }, []);

  const handleEdit = (prompt) => {
    router.push(`/update-prompt?id=${prompt._id}`);
  };
  const handleDelete = async (prompt) => {
    const hasConfirmed = confirm(
      'Are you sure you want to delete this prompt?'
    );

    if (hasConfirmed) {
      //to prevent the browser to reload the form
      try {
        const response = await fetch(`/api/prompt/${prompt._id.toString()}`, {
          method: 'DELETE',
        });
        const filteredPrompts = prompts.filter(
          (post) => post._id !== prompt._id
        );
        setPrompts(filteredPrompts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Profile
      name='My'
      desc='Welcome to your personnalized profile page'
      prompts={prompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;

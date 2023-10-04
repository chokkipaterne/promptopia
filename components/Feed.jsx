'use client';
import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';
import { connectToDB } from '@utils/database';

const PromptCardList = ({ prompts, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {prompts.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [prompts, setPrompts] = useState([]);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleTagClick = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPrompts(data);
    };
    fetchPosts();
  }, []);
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search prompt by tag or username'
          value={searchText}
          onChange={handleSearchChange}
          className='search_input peer'
        />
      </form>
      <PromptCardList prompts={prompts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;

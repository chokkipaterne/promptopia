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
  const [filterPrompts, setFilterPrompts] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const searchResult = searchPrompts(tagName);
    setFilterPrompts(searchResult);
  };

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPrompts(data);
    };
    fetchPrompts();
  }, []);

  const searchPrompts = (search) => {
    const regex = new RegExp(search, 'i');
    return prompts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = searchPrompts(e.target.value);
        setFilterPrompts(searchResult);
      }, 500)
    );
  };
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
      <PromptCardList
        prompts={searchText && searchText.length > 0 ? filterPrompts : prompts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;

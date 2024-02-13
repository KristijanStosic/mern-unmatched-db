import { useState } from 'react';
import { Search } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Input } from './ui/input.jsx';
import { Button } from './ui/button.jsx';

const CharacterSearch = ({ isAdmin = false }) => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <div className='inline-flex relative'>
      <form onSubmit={submitHandler}>
        <Input
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="Search characters..."
          className="w-[200px]"
        />
        <Button variant='link' type="button" className="absolute right-[0.1px] top-1/2 transform -translate-y-1/2">
          <Search className='text-slate-700' />
        </Button>
      </form>
    </div>

  );
};

export default CharacterSearch;
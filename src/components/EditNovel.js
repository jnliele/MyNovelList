import React, { useContext } from 'react';
import NovelForm from './NovelForm';
import { useParams } from 'react-router-dom';
import NovelsContext from '../context/NovelsContext';

const EditNovel = ({ history }) => {
  const { id } = useParams();
  const { novels, setNovels } = useContext(NovelsContext);
  const novelToEdit = novels.find((novel) => novel.id === id);

  const handleOnSubmit = (novel) => {
    const filteredNovels = novels.filter((novel) => novel.id !== id);
    setNovels([novel, ...filteredNovels]);
    history.push('/');
  };

  return (
    <div>
      <NovelForm novel={novelToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditNovel;
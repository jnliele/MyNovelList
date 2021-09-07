import React, { useContext } from 'react';
import NovelForm from './NovelForm';
import NovelsContext from '../context/NovelsContext';

const AddNovel = ({ history }) => {
  const { novels, setNovels } = useContext(NovelsContext);
  
  const handleOnSubmit = (novel) => {
    setNovels([novel, ...novels]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <NovelForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddNovel;
import React, { useContext } from 'react';
import _ from 'lodash';
import Novel from './Novel';
import NovelsContext from '../context/NovelsContext';

const NovelsList = () => {
  const { novels, setNovels } = useContext(NovelsContext);

  const handleRemoveNovel = (id) => {
    setNovels(novels.filter((novel) => novel.id !== id));
  };

  return (
    <React.Fragment>
      <div className="novel-list">
        {!_.isEmpty(novels) ? (
          novels.map((novel) => (
            <Novel key={novel.id} {...novel} handleRemoveNovel={handleRemoveNovel} />
          ))
        ) : (
          <p className="message">No novels available. Please add some novels.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default NovelsList;
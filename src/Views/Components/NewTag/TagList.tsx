import React from 'react';
import TagNew from './TagNew';
import { lList } from '../../../Core/Interface/lForm';
// import { v4 as uuid4 } from 'uuid';

function TagList({ tags, onDeleteTag }: lList) {
  let tagsUI = tags.map((tag) => {
    return (
      <TagNew key={tag} value={tag} onDeleteTag={() => onDeleteTag(tag)} />
    );
  });
  return <div>{tagsUI}</div>;
}

export default TagList;

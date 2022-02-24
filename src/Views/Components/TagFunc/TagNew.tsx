import React from 'react';
import { lTagN } from '../../../Core/Interface/lForm';
import { TagCompItem, TagCompList } from './Tag.style';
import { v4 as uuidv4 } from 'uuid';

function TagNew({ onDeleteTag, value }: lTagN) {
  let tag = (
    <TagCompList>
      <TagCompItem onClick={() => onDeleteTag(value)} key={uuidv4()}>
        {value}
      </TagCompItem>
    </TagCompList>
  );
  return <>{tag}</>;
}

export default TagNew;

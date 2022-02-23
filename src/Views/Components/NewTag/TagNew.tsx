import React from 'react';
import { lTagN } from '../../../Core/Interface/lForm';
import { TagCompItem } from '../Tag/Tag.style';

function TagNew({ onDeleteTag, value }: lTagN) {
  let tag = (
    <div>
      <TagCompItem onClick={() => onDeleteTag(value)}>
        &#2716; {''}{' '}
      </TagCompItem>
      {value}
    </div>
  );
  return <div>{tag}</div>;
}

export default TagNew;

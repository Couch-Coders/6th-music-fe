import React, { useState } from 'react';
import InputTag from './InputTag';

function HolderTag() {
  const [tags, setTags] = useState([]);
  const onAddTag = (tag: string) => {
    setTags([...tags, tag]);
  };

  const onDeleteTag = (tag: string) => {
    let remainingTags = tags.filter((item) => {
      return item !== tag;
    });
    setTags([...remainingTags]);
  };
  return (
    <>
      <InputTag
        onAddTag={onAddTag}
        onDeleteTag={onDeleteTag}
        defaultTags={tags}
        placeholder="태그를 입력하세요"
      />
    </>
  );
}

export default HolderTag;

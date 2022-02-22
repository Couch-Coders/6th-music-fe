import React, { useState } from 'react';
import InputTag from './InputTag';

function HolderTag() {
  const [tags, setTags] = useState([]);

  const onAddTag = (tag: string) => {
    setTags([...tags, tag]);
  };

  const onDeleteTag = (tag: string) => {
    alert(`delete ${tag}!!`);
    let remainingTags = tags.filter((item) => {
      return item !== tag;
    });
    setTags([...remainingTags]);
  };
  return (
    <div>
      <InputTag
        onAddTag={onAddTag}
        onDeleteTag={onDeleteTag}
        defaultTags={tags}
        placeholder="enter tags seperated by comma"
      />
      <div>you can also press &lt; return &gt; or&lt;rnyrt&gt;key</div>
    </div>
  );
}

export default HolderTag;

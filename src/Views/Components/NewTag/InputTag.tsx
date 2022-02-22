import React from 'react';
import TagList from './TagList';
import { lInputTag } from '../../../Core/Interface/lForm';

function InputTag({
  defaultTags,
  onAddTag,
  onDeleteTag,
  placeholder,
}: lInputTag) {
  const onKeyup = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      let input = event.currentTarget.value.trim();
      event.preventDefault();
      if (input.length === 0 || input[0] === '') return;
      onAddTag(input);
      event.currentTarget.value = '';
    }
  };

  const onDelete = (tag: string) => {
    onDeleteTag(tag);
  };

  return (
    <div>
      <TagList tags={defaultTags} onDeleteTag={onDelete} />
      <input
        type="text"
        onKeyUp={(event) => onKeyup(event)}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputTag;

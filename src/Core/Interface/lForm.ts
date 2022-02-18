export interface lInputTag {
  defaultTags: string[];
  onAddTag: (tag: string) => void;
  onDeleteTag: (tag: string) => void;
  placeholder: string;
}

export interface lList {
  tags: string[];
  onDeleteTag: (tag: string) => void;
}

export interface lTagN {
  onDeleteTag: (tag: string) => void;
  value: string;
}

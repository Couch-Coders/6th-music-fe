import { combineReducers } from 'redux';
import ClipText from './mClipboard';

const rootReducrer = combineReducers({
  ClipText: ClipText,
});

export default rootReducrer;
export type RootState = ReturnType<typeof rootReducrer>;

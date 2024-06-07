import { type NormalizedKeyword } from './types/NormalizedKeyword';

// `new RegExp('')` will treat the source as `(?:)` which is not an empty string
export const EMPTY_KEYWORD_REGEXP: NormalizedKeyword = {
    keyword: '',
    regExp: new RegExp(' '),
    wholeWords: false,
};

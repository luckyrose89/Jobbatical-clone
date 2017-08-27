export const SELECT_KEYWORD = 'SELECT_KEYWORD'

export function selectKeyword(keyword) {
  return {
    type: SELECT_KEYWORD,
    keyword
  }
}
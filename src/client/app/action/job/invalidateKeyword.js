export const INVALIDATE_KEYWORD = 'INVALIDATE_KEYWORD'

export function invalidateKeyword(keyword) {
  return {
    type: INVALIDATE_KEYWORD,
    keyword
  }
}
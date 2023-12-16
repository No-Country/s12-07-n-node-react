import { detailService } from "../services/discover.service.js";

export async function validateContent(opt) {
  const { id, media } = opt
  const isExistent = await detailService(media, id)
  if (!isExistent) return false
  return true
}

export function isDuplicate(arr, value) {
  return arr.some(el => el.contentId === value)
}

export function existsOrError(value: any, msg: string) {
  if (!value) throw msg
  if (Array.isArray(value) && value.length === 0) throw msg
  if (typeof value === 'string' && !value.trim()) throw msg
}

export function notExistsOrError(value: any, msg: string) {
  try {
    existsOrError(value, msg)
  } catch (msg) {
    return
  }

  throw msg
}
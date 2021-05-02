const isThereLocalStorage = typeof window !== "undefined" && window.localStorage

export function setItem(key, value) {
  if (isThereLocalStorage) {
    window.localStorage.setItem(key, value)
  }
}

export function getItem(key) {
  if (isThereLocalStorage) {
    return window.localStorage.getItem(key)
  }
}

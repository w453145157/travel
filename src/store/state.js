let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  throw new Error(e)
}

export default {
  city: defaultCity
}
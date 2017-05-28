const optionalRequire = id => {
  try {
    return require(id)
  } catch (e) {
    return null
  }
}

module.exports = {
  optionalRequire,
}

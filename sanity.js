const sanityClient = require("@sanity/client")

module.exports = sanityClient({
  projectId: "28w3ygfx",
  dataset: "tiendata",
  useCdn: false
})

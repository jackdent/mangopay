
var httpClient = require('../lib/httpClient')
  , httpMethod = require('../lib/httpMethod')

module.exports = httpClient.extend({
  
  path: 'cards',
  
  includeBasic: [ 'fetch' ]
  
})

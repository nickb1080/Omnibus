class BillsCollection extends Backbone.Collection
  initialize: ( options ) ->
    @url = 'http://omnibus-backend.azurewebsites.net/api/bills/search?q=' +
      options.query

  model: require '../models/result-model.coffee'

  urlRoot: @url

  parse: ( response ) ->
    data = {}
    data.results = ( response ).results
  
module.exports = BillsCollection

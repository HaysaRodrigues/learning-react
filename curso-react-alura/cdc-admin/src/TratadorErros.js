import PubSub from 'pubsub-js'

export default class TratadorErros {
  publicaErros(json) {
    for(var i = 0; i < json.errors.length; i ++) {
      var erro = json.errors[i]
      PubSub.publish('erro-validacao', erro)
    }
  }
}
import React, { Component } from 'react'
import uuid from 'uuid'
import $ from 'jquery'
import Input from './Input'
import Button from './Button'


export default class LivroAdmin extends Component {

  constructor() {
    super()
    this.state = {
      titulo: '',
      preco: '',
      autorID: uuid.v4()
    }
    this.setTitulo = this.setTitulo.bind(this);
    this.setPreco = this.setPreco.bind(this);
  }

  setTitulo(event) {
    this.setState({titulo: event.target.value})
  }
  
  setPreco(event) {
    this.setState({preco: event.target.value})
  }

  sendFormLivro(evento) {
    evento.preventDefault();    
    $.ajax({
      url:'http://cdc-react.herokuapp.com/api/livros',
      contentType:'application/json',
      dataType:'json',
      type:'post',
      data: JSON.stringify({ titulo: this.state.titulo, preco: this.state.preco, autorID: this.state.autorID }),
      success: function(novaListagem){
        this.setState({titulo: '', preco: '', autorID: ''})
       }.bind(this),
      error: function(resposta) {
        if(resposta.status === 400) {
          console.log('deu ruim')
        }
      }
    });
  }

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form className="pure-form pure-form-aligned" onSubmit={this.sendFormLivro.bind(this)}>
          <Input id="titulo" nomeCampo="titulo" type="text" name="titulo" value={this.state.titulo} onChange={this.setTitulo}/>
          <Input id="preco" nomeCampo="preco" type="number" name="preco" value={this.state.preco} onChange={this.setPreco}/>
          <Button label="Salvar"/>
        </form>              
      </div> 
    )
  }
}

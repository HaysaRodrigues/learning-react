import React, { Component } from 'react'
import $ from 'jquery'
import Input from './Input'
import Button from './Button'

class FormularioAutor extends Component {

  constructor(){
    super()
    this.state = {
        nome: '',
        email:'',
        senha:''
    }
    this.sendForm = this.sendForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);

  }

  setNome(event){
    this.setState({nome: event.target.value})
  }
  
  setEmail(event){
    this.setState({email: event.target.value})
  }
  
  setSenha(event){
    this.setState({senha: event.target.value})
  }

  sendForm(evento){
    evento.preventDefault();    
    $.ajax({
      url:'http://cdc-react.herokuapp.com/api/autores',
      contentType:'application/json',
      dataType:'json',
      type:'post',
      data: JSON.stringify({nome:this.state.nome,email:this.state.email,senha:this.state.senha}),
      success: function(resposta){
        this.props.callbackAtualizaLista(resposta)
       }.bind(this),
      error: function(resposta){
        console.log("erro");
      }      
    });
  }

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form className="pure-form pure-form-aligned" onSubmit={this.sendForm.bind(this)} >
          <Input id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome}/>
          <Input id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail}/>
          <Input id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha}/>
          <Button label="Salvar"/>
        </form>             
      </div> 
    )
  }
}


class TabelaAutores extends Component {

  render() {
    return (
    <div>  
      <table className="pure-table">
        <thead>
          <tr>
            <td>Nome</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <table>
              <tbody>
            {
              this.props.lista.map(function(a){
                return (
                  <tr key={a.id}>
                    <td>{a.nome}</td>                
                    <td>{a.email}</td> 
                  </tr>
                )
              })
            } 
            </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table> 
    </div> 
    )
  }
}

export default class AuterBox extends Component {

  constructor(){
    super()
    this.state = {
      lista: []  
    }
    // this.atualizaListagem = this.atualizaListagem.bind(this) poderia ser aqui ou lá embaixo.
  }

  componentDidMount(){
    $.ajax({
      url:'http://cdc-react.herokuapp.com/api/autores',
      dataType:'json',
      success: function(response){
        this.setState({lista:response})
      }.bind(this)  
    })
  }

  atualizaListagem(novaLista){
    this.setState({lista: novaLista})
  }

  render() {
    return (
      <>
        <FormularioAutor callbackAtualizaLista={this.atualizaListagem.bind(this)}/>
        <TabelaAutores lista={this.state.lista}/>
      </>
    )
  }
}


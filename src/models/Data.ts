import { Component } from "react";

export interface repertorio{
  title:string
  data:Date
  quantMusica:number
  auutor:User
  musics:Array<Music>

}

export interface User{
  name:string
  username:Date
  email:number
  password:User
}

export interface Music{
  title:string
  Versao:string
  tom:Tom
  voicePrincipal:Componentes
}

export interface Tom{
  name:string
  Sibol:string
}

export interface Funcao{
 funcao:string
}


export interface Componentes{
  nome:string
  email:string
  contato:string
  funcao:Array<Funcao>
}


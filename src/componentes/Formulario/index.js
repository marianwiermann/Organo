import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = () => {
  const times = ['Pedreiro', 'Gesseiro', 'Pintor']

  const aoSalvar = evento => {
    evento.preventDefault()
    console.log('Form foi submetido => ', nome, cargo, imagem)
  }

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha:</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholde="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Profissionais:"
          itens={times}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  )
}

export default Formulario

import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {
  const times = ['Pedreiro', 'Gesseiro', 'Pintor']

  const aoSalvar = evento => {
    evento.preventDefault()
    console.log('Form foi submetido')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha:</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome:"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Tipo de obra:"
          placeholder="Residêncial, comercial ou intitucional"
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

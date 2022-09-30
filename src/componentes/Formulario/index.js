import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {
  const times = ['Pedreiro', 'Gesseiro', 'Pintor']

  return (
    <section className="formulario">
      <form>
        <h2>Preencha:</h2>
        <CampoTexto label="Nome:" placeholder="Digite seu nome" />
        <CampoTexto
          label="Tipo de obra:"
          placeholder="Residêncial, comercial ou intitucional"
        />
        <ListaSuspensa label="Profissionais:" itens={times} />
        <Botao texto="Criar Card" />
      </form>
    </section>
  )
}

export default Formulario

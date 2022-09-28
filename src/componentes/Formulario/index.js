import './Formulario.css'
import CampoTexto from '../CampoTexto'

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os campos abaixo:</h2>
        <CampoTexto label="Nome:" placeholder="Digite seu nome" />
        <CampoTexto
          label="Tipo de obra:"
          placeholder="Residêncial, comercial ou intitucional"
        />
      </form>
    </section>
  )
}

export default Formulario

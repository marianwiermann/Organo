import Banner from './componentes/Banner/Banner'
import CampoTexto from './componentes/CampoTexto/Index'

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome" />
      <CampoTexto
        label="Tipo de obra"
        placeholder="Residêncial, comercial ou intitucional"
      />
    </div>
  )
}

export default App

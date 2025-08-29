import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

// CORREÇÃO: Importe o nome correto 'GlobalStyle' do arquivo correto.
import { GlobalStyle } from './GlobalStyle'

// (Dados de exemplo para vagas)
const vagasExemplo = [
  { id: 1, titulo: 'Desenvolvedor Frontend' },
  { id: 2, titulo: 'Engenheiro de Dados' },
  { id: 3, titulo: 'Desenvolvedor Backend' }
]

function App() {
  return (
    <>
      {/* O componente GlobalStyle é usado aqui para aplicar os estilos a toda a página */}
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <ListaVagas vagas={vagasExemplo} />
    </>
  )
}

export default App

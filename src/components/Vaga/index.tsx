import { VagaContainer, VagaTitulo, VagaLink } from './style'

export type VagaProps = {
  id: number
  titulo: string
  // Adicione outras props conforme necessário
}

const Vaga = (props: VagaProps) => (
  <VagaContainer>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <VagaLink href="#">Ver detalhes</VagaLink>
  </VagaContainer>
)

export default Vaga

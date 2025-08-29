import Vaga, { VagaProps } from '../../components/Vaga'
import { VagasGrid } from './style'

type Props = {
  vagas: VagaProps[]
}

const ListaVagas = ({ vagas }: Props) => (
  <div className="container">
    <VagasGrid>
      {vagas.map((vaga) => (
        <Vaga key={vaga.id} {...vaga} />
      ))}
    </VagasGrid>
  </div>
)

export default ListaVagas

import { useParams } from 'react-router-dom'

import MOCKS_DATA from '../../mocks/mock.json'
import Styles from './styles'

interface PowerPlant {
  id?: number
  nome?: string
  localizacao?: string
  capacidade?: string
  status?: string
  latitude?: number
  longitude?: number
  anoConstrucao?: number
  fabricantePaineis?: string
  descricao?: string
  anoUltimaManutencao?: number
  eficienciaPaineis?: string
  proprietario?: string
  tipoConexao?: string
  subestacao?: string
  tempoVidaEstimado?: string
  certificacoes?: string[]
  imagem?: string
  engenheiroResponsavel?: string
  areaTotal?: string
  garantiaEquipamentos?: string
  contratoEnergia?: string
  monitoramentoRemoto?: boolean
}

export function BoxDetailsPowerPlant() {
  const { id } = useParams()

  const powerPlants = MOCKS_DATA[0].usinasSolares

  const [filteredPowerPlant] = powerPlants.filter(
    (powerPlant: PowerPlant) => powerPlant.id === Number(id),
  )

  console.log(filteredPowerPlant)

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Header>
          <div className="title-and-description">
            <h2>
              {filteredPowerPlant.nome} - {filteredPowerPlant.localizacao}
            </h2>

            <p>{filteredPowerPlant.descricao}</p>
          </div>

          <img src={filteredPowerPlant.imagem} alt="" />
        </Styles.Header>

        <h3>Especificações</h3>

        <Styles.Specifications>
          <div className="column-1">
            <p>
              Capacidade: <strong> {filteredPowerPlant.capacidade} </strong>
            </p>

            <p>
              Status: <strong> {filteredPowerPlant.status} </strong>
            </p>

            <p>
              Latitude: <strong> {filteredPowerPlant.latitude} </strong>
            </p>

            <p>
              Longitude: <strong> {filteredPowerPlant.longitude} </strong>
            </p>

            <p>
              Ano Construção:
              <strong> {filteredPowerPlant.anoConstrucao} </strong>
            </p>

            <p>
              Fabricante:
              <strong> {filteredPowerPlant.fabricantePaineis} </strong>
            </p>

            <p>
              Ano ultima manutenção:
              <strong> {filteredPowerPlant.anoUltimaManutencao} </strong>
            </p>
          </div>

          <div className="column-2">
            <p>
              Eficiência painéis:
              <strong> {filteredPowerPlant.eficienciaPaineis} </strong>
            </p>

            <p>
              Proprietário: <strong> {filteredPowerPlant.proprietario} </strong>
            </p>

            <p>
              Tipo conexão: <strong> {filteredPowerPlant.tipoConexao} </strong>
            </p>

            <p>
              Subestação: <strong> {filteredPowerPlant.subestacao} </strong>
            </p>

            <p>
              Tempo vida estimado:
              <strong> {filteredPowerPlant.tempoVidaEstimado} </strong>
            </p>

            <p>
              Area total:
              <strong> {filteredPowerPlant.areaTotal} </strong>
            </p>

            <p>
              Engenheiro Responsável:
              <strong> {filteredPowerPlant.engenheiroResponsavel} </strong>
            </p>
          </div>

          <div className="column-3">
            <p>
              Certificações:
              <strong> {filteredPowerPlant.certificacoes} </strong>
            </p>

            <p>
              Garantia equipamentos:
              <strong> {filteredPowerPlant.garantiaEquipamentos} </strong>
            </p>

            <p>
              Contrato energia:
              <strong> {filteredPowerPlant.contratoEnergia} </strong>
            </p>

            <p>
              Tem monitoramento remoto:
              <strong>
                {filteredPowerPlant.monitoramentoRemoto === true
                  ? ' Sim'
                  : ' Não'}
              </strong>
            </p>
          </div>
        </Styles.Specifications>
      </Styles.Content>
    </Styles.Container>
  )
}

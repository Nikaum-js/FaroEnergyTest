import { CardPowerPlant } from '../../components/CardPowerPlant'
import Styles from './styles'

import MOCKS_DATA from '../../mocks/mock.json'

export function Home() {
  const powerPlants = MOCKS_DATA[0].usinasSolares

  return (
    <Styles.Container>
      <Styles.Content>
        <div className="header-home">
          <h1>Suas Usinas Elétricas</h1>

          <p>Essas são as usinas cadastradas no sistema</p>
        </div>

        <Styles.CardsList>
          {powerPlants.map((powerPlant, index) => (
            <CardPowerPlant key={index} powerPlant={powerPlant} />
          ))}
        </Styles.CardsList>
      </Styles.Content>
    </Styles.Container>
  )
}

import {
  Buildings,
  Calendar,
  CaretRight,
  CornersOut,
  Lightbulb,
  User,
} from 'phosphor-react'

import Styles from './styles'
import { Link } from 'react-router-dom'

interface CardPowerPlantProps {
  powerPlant: {
    id: number
    localizacao: string
    nome: string
    status: string
    longitude: number
    latitude: number
    areaTotal: string
    fabricantePaineis: string
    capacidade: string
    anoConstrucao: number
    engenheiroResponsavel: string
  }
}

export function CardPowerPlant({ powerPlant }: CardPowerPlantProps) {
  return (
    <Styles.Container>
      <Styles.BackgroundHeader />

      <Styles.Header>
        <div className="name-and-location">
          <p>{powerPlant.localizacao}</p>

          <h2>{powerPlant.nome}</h2>

          <div className="state">{powerPlant.status}</div>
        </div>

        <div className="longitude-and-latitude">
          <p>
            Latitude:<strong> {powerPlant.latitude} </strong>
          </p>

          <p>
            Longitude:<strong> {powerPlant.longitude} </strong>
          </p>
        </div>
      </Styles.Header>

      <Styles.InfoCards>
        <div className="column-one">
          <p>
            <CornersOut size={18} />
            {powerPlant.areaTotal}
          </p>

          <p>
            <Lightbulb size={18} />
            {powerPlant.capacidade}
          </p>

          <p>
            <Buildings size={18} />
            {powerPlant.fabricantePaineis}
          </p>
        </div>

        <div className="column-two">
          <p>
            <Calendar size={18} />
            {powerPlant.anoConstrucao}
          </p>

          <p>
            <User size={18} />
            {powerPlant.engenheiroResponsavel}
          </p>
        </div>
      </Styles.InfoCards>
      <Styles.Footer>
        <Link to={`/${powerPlant.id}`}>
          Ver mais <CaretRight size={16} />
        </Link>
      </Styles.Footer>
    </Styles.Container>
  )
}

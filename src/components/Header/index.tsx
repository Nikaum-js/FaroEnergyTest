import { ChartBar } from 'phosphor-react'

import LogoFaroEnergy from '../../assets/logo.png'
import Avatar from '../../assets/avatar.svg'

import Styles from './styles'

export function Header() {
  return (
    <Styles.Header>
      <img src={LogoFaroEnergy} alt="" />

      <nav>
        <ul>
          <li className="active">
            <ChartBar size={24} />
            <a href="">Dashboard</a>
          </li>
        </ul>
      </nav>

      <div className="icons">
        <img src={Avatar} alt="" />
      </div>
    </Styles.Header>
  )
}

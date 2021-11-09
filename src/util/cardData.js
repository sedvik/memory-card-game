import uniqid from 'uniqid'
import Ed from '../images/Ed.png'
import Edd from '../images/Edd.png'
import Eddy from '../images/Eddy.png'
import Jimmy from '../images/Jimmy.png'
import Jonny from '../images/Jonny.png'
import Kevin from '../images/Kevin.png'
import Lee from '../images/Lee.png'
import Marie from '../images/Marie.png'
import May from '../images/May.png'
import Nazz from '../images/Nazz.png'
import Plank from '../images/Plank.png'
import Rolf from '../images/Rolf.png'
import Sarah from '../images/Sarah.png'

const cardSources = [
  Ed,
  Edd,
  Eddy,
  Jimmy,
  Jonny,
  Kevin,
  Lee,
  Marie,
  May,
  Nazz,
  Plank,
  Rolf,
  Sarah
]

const cardTitles = [
  'Ed',
  'Edd',
  'Eddy',
  'Jimmy',
  'Jonny',
  'Kevin',
  'Lee',
  'Marie',
  'May',
  'Nazz',
  'Plank',
  'Rolf',
  'Sarah'
]

const initialCards = cardSources.map((source, i) => {
  return {
    id: uniqid(),
    src: source,
    alt: cardTitles[i],
    title: cardTitles[i],
    picked: false
  }
})

export default initialCards

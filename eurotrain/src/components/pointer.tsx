import {HiArrowNarrowRight} from 'react-icons/hi'

export default function Pointer({time}) {
  return (
  <div className="align-middle" style={{margin: '0 .8em'}}>
    <HiArrowNarrowRight size='50' />
    <p style={{margin: 0, textAlign: 'center'}}>time</p>
  </div>
  )
}
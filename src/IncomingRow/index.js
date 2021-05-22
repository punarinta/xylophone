import './index.css'
import Key from '../Key'

export default function IncomingRow (props) {
  return (
    <div className="incoming-row">
      {
        ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2'].map((name, i) =>
          <Key
            key={i}
            name={name}
            empty={name !== props.pair[0]}
            duration={props.pair[1]}
          />
        )
      }
    </div>
  )
}

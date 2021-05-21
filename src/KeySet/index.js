import Key from '../Key'
import './index.css'

export default function KeySet (props) {
  return (
    <div className="key-set">
      {
        ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2'].map((name, i) => <Key key={i} name={name}/>)
      }
    </div>
  )
}


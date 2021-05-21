import './index.css'

const colors = {
  C: '#3a51d1',
  D: '#55e174',
  E: '#ffdb23',
  F: '#ff5a2a',
  G: '#ed2d2a',
  A: '#9f3bb5',
  B: '#fffdff',
  C2: '#3d51cc',
}

export default function Key (props) {
  const n = props.name

  return (
    <div
      className="key"
      style={{
        backgroundColor: colors[n],
        borderColor: n === 'B' ? '#bbb' : 'transparent'
      }}
    >
      <div className="key__name">
        { n }
      </div>
    </div>
  )
}

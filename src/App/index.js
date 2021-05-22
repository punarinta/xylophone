import { useCallback, useState } from 'react'
import IncomingRow from '../IncomingRow'
import { useRender } from '../utils'
import KeySet from '../KeySet'
import './index.css'

let incomingRows = []
let marginTop = 0
let totalLength = 0
let ticker = 0

export default function App () {
  const [notes, setNotes] = useState([])
  const update = useRender()

  const onNotesChange = useCallback((v) => {
    const text = v.target.value.trim()
    const notes = text.split(' ').map(pair => pair.split('/'))

    setNotes(notes)
  }, [])

  const generateMap = useCallback(() => {
    incomingRows = []
    totalLength = 0

    for (let i = 0; i < notes.length; i++) {
      const notePair = notes[i]

      if (!notePair || notePair.length !== 2) {
        return
      }

      const
        key = notePair[0].toUpperCase(),
        duration = Math.round(12 / notePair[1]),
        row = [key, duration]

      totalLength += duration

      incomingRows.unshift(row)
    }

    marginTop = -totalLength * 1
  }, [notes])

  const startPlay = useCallback(() => {
    clearInterval(ticker)
    generateMap()
    update()

    ticker = setInterval(() => {
      marginTop += 1
      update()

      if (marginTop >= 40) {
        clearInterval(ticker)
      }
    }, 120)
  }, [generateMap, update])

  return (
    <div className="app">
      <div className="app__notes">
        <textarea
          autoFocus={true}
          className="app__notes-input"
          cols="30"
          rows="6"
          onChange={onNotesChange}
        />
        <button
          className="app__notes-play"
          onClick={startPlay}
        >
          Play
        </button>
      </div>
      <div className="incoming-rows__container">
        <div className="incoming-rows" style={{marginTop: `${marginTop}rem`}}>
          {
            incomingRows.map((row, i) => {
              return (
                <IncomingRow key={i} pair={row} />
              )
            })
          }
        </div>
      </div>
      <KeySet />
    </div>
  )
}

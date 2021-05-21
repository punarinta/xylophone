import { useCallback, useState } from 'react'
import IncomingRow from '../IncomingRow'
import { useRender } from '../utils'
import KeySet from '../KeySet'
import './index.css'

let incomingRows = []

export default function App () {
  const [notes, setNotes] = useState([])
  const update = useRender()

  const onNotesChange = useCallback((v) => {
    const text = v.target.value.trim()
    const notes = text.split(' ').map(pair => pair.split('/'))

    setNotes(notes)
  }, [])

  const playNext = useCallback((pointer) => {
    const notePair = notes[pointer]

    if (!notePair || notePair.length !== 2) {
      return
    }

    const
      key = notePair[0].toUpperCase(),
      duration = 1000 / notePair[1]

    setTimeout(() => {
      const row = [key, 12 / notePair[1]]

      if (pointer) {
        incomingRows.unshift(row)
      } else {
        incomingRows = [row]
      }
      update()

      playNext(pointer + 1)
    }, duration)
  }, [notes, update])

  const startPlay = useCallback(() => {
    playNext(0)
  }, [playNext])

  return (
    <div className="app">
      <div className="app__notes">
        <textarea
          autoFocus={true}
          className="app__notes-input"
          cols="30"
          rows="4"
          onChange={onNotesChange}
        />
        <button
          className="app__notes-play"
          onClick={startPlay}
        >
          Play
        </button>
      </div>
      <div className="incoming-rows">
        {
          incomingRows.map((row, i) => {
            return (
              <IncomingRow key={i} pair={row} />
            )
          })
        }
      </div>
      <KeySet />
    </div>
  )
}

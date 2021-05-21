import { useCallback, useState } from 'react'
import KeySet from '../KeySet'
import './index.css'

export default function App () {
  const [notes, setNotes] = useState([])

  const onNotesChange = useCallback((v) => {
    const text = v.target.value.trim()
    const notes = text.split(' ').map(pair => pair.split('/'))

    setNotes(notes)
  }, [])

  const startPlay = useCallback(() => {
    console.log(notes)
  }, [notes])

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
      <KeySet />
    </div>
  )
}

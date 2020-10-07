import React, {useState} from 'react'

import axios from 'axios'

type PropTypes = {
  roomId: String,
  onSuccess: () => void
}

const Form = ({ roomId, onSuccess }: PropTypes) => {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const submit = () => {
    setSuccess(false)
    setLoading(true)
    setError(false)

    axios.post(`/api/messages/${roomId}`, {
      text
    })
    .then(() => {
      setSuccess(true)
      setLoading(false)
      setText('')
      onSuccess()
    })
    .catch(() => {
      setError(true)
      setLoading(false)
    })
  }
  return (
    <>
      <div className="message-form">
        <textarea value={text} onChange={(ev) => { setText(ev.target.value)}} />
        <button onClick={() => submit()}>Send message</button>
        {loading && <div className="loading">Loading</div>}
        {error && <div className="error">error</div>}
        {success && <div className="success">success</div>}
      </div>
      
      <style jsx>{`
        textarea {
          display: block;
          width: 100%;
          height: 100px;
          padding: 15px;
        }

        button {
          padding: 10px;
          color: white;
          background: purple;
          border-radius: 10px;
          width: 100%;
          border: none;
        }
      `}</style>
    </>
  )
}

export default Form

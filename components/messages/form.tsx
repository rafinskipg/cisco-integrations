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
          border-radius: 8px 8px 0 0;
          display: block;
          width: 100%;
          height: 100px;
          padding: 18px;
          border: none;
        }

        button {
          font-weight: 600;
          padding: 16px 8px;
          color: var(--purple-dark);
          background: var(--green);
          border-radius: 0 0 8px 8px;
          width: 100%;
          border: none;
        }
      `}</style>
    </>
  )
}

export default Form

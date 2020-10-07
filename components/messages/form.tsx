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
        <textarea placeholder="Write here…" value={text} onChange={(ev) => { setText(ev.target.value)}} />
        <button onClick={() => submit()}>Send message</button>
        {loading && <div className="loading">Loading</div>}
        {error && <div className="error">error</div>}
        {success && <div className="success">success</div>}
      </div>
      
      <style jsx>{`

        textarea {
          display: block;
          font-size: 16px;
          line-height: 1.5;
          width: 100%;
          height: 100px;
          padding: 18px;
          border: none;
        }

        textarea:focus, button:focus{
          outline: none;
        }

        button {
          font-size: 16px;
          font-weight: 600;
          padding: 16px 8px;
          color: var(--purple-dark);
          cursor: pointer;
          background: var(--green);
          border-radius: 0 0 8px 8px;
          transition: 0.35s ease;
          width: 100%;
          border: none;
        }

        button:hover{
          background:#52dc75;
        }
      `}</style>
    </>
  )
}

export default Form

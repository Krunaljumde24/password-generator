import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState('password')
  const [length, setLength] = useState(8)
  const [allowNumbers, setAllowNumbers] = useState(false)
  const [allowCharacters, setAllowCharacters] = useState(false)

  const passwordRef = useRef(null)

  let generatePassword = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    let chars = '~!@#$%^&*()<>?:"{}|';
    if (allowNumbers) {
      str += num;
    }
    if (allowCharacters) {
      str += chars;
    }


    let pass = '';
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(index);
    }
    setPassword(pass);
  }, [length, allowNumbers, allowCharacters])

  useEffect(generatePassword, [length, allowNumbers, allowCharacters])

  let copyToClipboard = () => {
    passwordRef.current.select();
    let value = passwordRef.current.value;
    window.navigator.clipboard.writeText(value)
  }

  return (
    <>
      <div className='main-container'>
        <h4>Password Generator</h4>
        <div className='row'>
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              name='password'
              value={password}
              ref={passwordRef}
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
          </div>
          <div className='col'>
            <button
              type='button'
              className='btn btn-primary'
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
        </div>
        <br />
        <div className='second'>
          <input
            type="range"
            id='range'
            min="5"
            max="50"
            value={length}
            onChange={(event) => {
              setLength(event.target.value)
            }}
          />
          <label
            htmlFor="range"
          >Length ({length})
          </label>
          <input
            type="checkbox"
            id='num'
            value={allowNumbers}
            onChange={() => {
              setAllowNumbers((prev) => !prev)
              console.log(allowNumbers);
            }}
          />
          <label
            htmlFor="num"
          >
            Numbers
          </label>
          <input
            type="checkbox"
            id='char'
            value={allowCharacters}
            onChange={() => {
              setAllowCharacters((prev) => !prev)
            }}
          />
          <label
            htmlFor="char"
          >
            Characters
          </label>
        </div>
      </div>
    </>
  )
}

export default App

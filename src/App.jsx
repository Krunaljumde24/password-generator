import './App.css'
import { useCallback, useEffect, useState } from 'react'

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false)


  let generatePassword = useCallback(
    () => {
      let aplphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      let pass = '';

      for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * aplphabets.length + 1);
        pass += aplphabets.charAt(index)
      }
      setPassword(pass)
    },
    [length],
  )

  useEffect(generatePassword, [length])


  return (
    <>
      <div className='main-container'>
        <h4>Password Generator</h4>
        <div className='row'>
          <div className="col-10">
            <input type="text" className="form-control" name='password' value={password} />
          </div>
          <div className='col'>
            <button type='button' className='btn btn-primary' onClick={generatePassword}>Copy</button>
          </div>
        </div>
        <br />
        <div className='second'>
          <input type="range" id='range' min="5" max="50" value={length} /> <label htmlFor="range">Length {length}</label>
          <input type="checkbox" id='num' /> <label htmlFor="num">Numbers</label>
          <input type="checkbox" id='char' /> <label htmlFor="char">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App

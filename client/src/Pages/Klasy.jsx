import React, { useEffect, useState } from 'react'

export default function Klasy() {
  const [klasy, setKlasy] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:7777/Klasy').then(res => res.json()).then(data => {
      setKlasy(data)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      {
        !isLoading && (
          <>
            <h1>Klasy</h1>
            {
              klasy.map(klasa => 
                <p key={klasa.id}>{klasa.name}</p>
              )
            }
            {
              (!klasy.length) && (
                <>Nie ma klas</>
              )
            }
          </>
        )
      }
      {
        !!isLoading && (
          <>
            Ładowanie
          </>
        )
      }
    </>
  )
}


import React, { useEffect, useRef, useState } from 'react'

type TimerArgs = {
  milisegundos: number,
  // segundos?: number
}

export const Timer = ({milisegundos}: TimerArgs) => {

  const [segundos, setSegundos] = useState(0);

  // Usamos el useRef para hacer limpieza en el intervalo cada vez que cambiamos la propiedad de milisegundos
  const ref = useRef<NodeJS.Timeout>();





  useEffect(() => {

    // evaluo si hay ref.current y si lo hay limpio el Timeout para que no se vayan sumando con los anteriores
    ref.current && clearTimeout( ref.current);
    
    ref.current = setTimeout( () => setSegundos( segundos + 1) , milisegundos);
    
  }, [segundos])
  
  return (
    <>
        <h4 className='mt-2'>Timer: <small>{segundos}</small></h4>
    </>
  )
}

import { useReducer } from "react"


// Defino el estado inicial del useReducer
const initialState = {
    contador: 0,
}



// Defino las acciones que las reducer pueda manejar
type  ActionType = 
  | { type: 'incrementar'}
  | { type: 'decrementar'}
  | { type: 'custom', payload: number}





// Funcion Reducer
const contadorReducer = (state: typeof initialState, action: ActionType) => {

    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }

        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }


        case 'custom':
            return {
                ...state,
                contador: state.contador + action.payload
            }  
    
        default:
            return state;
    }
}




export const ContadorRed = () => {


    // const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

    // Desestructurando
    const [{contador}, dispatch] = useReducer(contadorReducer, initialState);


  return (
    <>
        {/* <h2>Contador: { contadorState.contador }</h2> */}
        <h2>Contador: { contador }</h2>

        <button
            className="btn btn-outline-primary"
            onClick={ () => dispatch({ type: 'incrementar'})}
        >
            +1
        </button>


        <button
            className="btn btn-outline-primary ms-2"
            onClick={ () => dispatch({ type: 'decrementar'})}
        >
            -1
        </button>


        <button
            className="btn btn-outline-danger ms-2"
            onClick={ () => dispatch({ type: 'custom', payload: 100})}
        >
            +100
        </button>
    </>
  )
}

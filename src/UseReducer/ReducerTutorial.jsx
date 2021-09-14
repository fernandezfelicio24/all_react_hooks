import React, { useReducer } from 'react'

const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {count: state.count +1, showText: state.showText};
                
            case "TOGGLESHOWTEXT":
                return {count: state.count, showText: !state.showText}
        
            default:
                return state;
        }
}


const ReducerTutorial = () => {

    const [state, dispatch] = useReducer(reducer, {count:0, showText:true});

    return (
            <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "TOGGLESHOWTEXT" });
                }}
            >
                Click Here
            </button>
        
            {state.showText && <p>Hello I'm Felicio.</p>}
            </div>
        );
}


export default ReducerTutorial;




// The use Reducer Hook is actually a replacement or an alternative
// to the use State Hook. This means that they both have the same purpose
// in the sense that, they allow the user or the developer to create variable
// when their values are changed the page will re-render to show thos new values
// however there is specific benefit to use the reducer hook is whenever you might
// deal with very complex state (many states)
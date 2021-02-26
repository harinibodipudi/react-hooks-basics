
import React, { useState } from 'react';
export default function Home() {
    const [count, setCount] = useState(0);
    const [siblings, setsiblings] = useState(0)
    const [age1, setAge] = useState(19)
    const [state, setState] = useState({ age: 19, siblingsNum: 4 })
    const handleClick = val =>
        setState({
            ...state,
            [val]: state[val] + 1
        })
    const { age, siblingsNum } = state;
    () => {
        const [age, setAge] = useState(0)
        const handleClick = () => setAge(age + 1)

        useEffect(() => {
            document.title = 'You are ' + age + ' years old!'
        })

        return <div>
            <p> Look at the title of the current tab in your browser </p>
            <button onClick={handleClick}>Update Title!! </button>
        </div>
    }

    const ThemeContext = React.createContext('light')

    const Display = () => {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <div
                        style={{
                            background: theme === 'dark' ? 'black' : 'papayawhip',
                            color: theme === 'dark' ? 'white' : 'palevioletred',
                            width: '100%',
                            minHeight: '200px'
                        }}
                    >
                        {'The theme here is ' + theme}
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
    render(Display)
    return (
        <div>
            your age is {age}
            <h1><button onClick={handleClick.bind(null, 'age')}>click me</button></h1>
            you have {siblingsNum} siblings
            <h1><button onClick={handleClick.bind(null, 'siblingsNum')}>click to add siblings</button></h1>
            count value is {count}
            <button onClick={() => setCount(0)}>Reset</button>
            <button
                onClick={() => setCount(prevCount => prevCount + 1)}>
                Plus (+)
      </button>
            <button
                onClick={() => setCount(prevCount => prevCount - 1)}>
                Minus (-)
      </button>
      {this.Display}
        </div>
    )
}


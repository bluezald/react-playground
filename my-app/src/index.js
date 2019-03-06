// // Code here are related to the concepts here:
// // https://reactjs.org/docs/hello-world.html

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'

// function Square(props) {
//     return (
//       <button className="square" onClick={props.onClick}>
//         {props.value}
//       </button>
//     );
//   }

// class Board extends React.Component {
//   renderSquare(i) {
//     return (
//     <Square
//       value={this.props.squares[i]}
//       onClick={() => this.props.onClick(i)}
//       />
//       );
//   }

//   render() {
//       return (
//           <div>
//             <div className="board-row">
//               {this.renderSquare(0)}
//               {this.renderSquare(1)}
//               {this.renderSquare(2)}
//             </div>
//             <div className="board-row">
//               {this.renderSquare(3)}
//               {this.renderSquare(4)}
//               {this.renderSquare(5)}
//             </div>
//             <div className="board-row">
//               {this.renderSquare(6)}
//               {this.renderSquare(7)}
//               {this.renderSquare(8)}
//             </div>
//           </div>
//         );
//   }
// }

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null),
//       }],
//       stepNumber: 0,
//       xIsNext: true,
//     };
//   }

//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares = current.squares.slice();

//     if(calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext? 'X' : 'O';
//     this.setState({
//       history: history.concat([{
//         squares: squares,
//       }]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   jumpTo(step) {
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) === 0,
//     });
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       const desc = move ?
//         'Go to move #' + move :
//         'Go to game start';
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       );
//     });

//     let status;
//     if(winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares = {current.squares}
//             onClick = {(i) => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

//   // ========================================

//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );

//   function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }

import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
    <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}/>
    );
}

function UserInfo(props) {
    return (
    <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
        {props.user.name}
        </div>
    </div>
    );
}

function Comment(props) {
    return (
    <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
        {formatDate(props.date)}
        </div>
    </div>
    );
}

// =================================

class Clock extends React.Component {
    constructor(props) {
    super(props);
    this.state = {date: new Date()};
    }

    tick() {
    this.setState({
        date: new Date()
    });
    }

    componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(), 1000
    );
    }

    componentWillUnmount() {
    clearInterval(this.timerID);
    }

    render() {
    return (
        <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    );
    }
}

// =================================

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
            <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />

            <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />

            <BoilingVerdict
            celsius={parseFloat(celsius)} />

            </div>
        );
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature}
                onChange={this.handleChange} />
        </fieldset>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

// =================================

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning ReactJS!',
    author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
    },
};
ReactDOM.render(
    // <Clock />,
    // <Comment
    //     date={comment.date}
    //     text={comment.text}
    //     author={comment.author}
    // />,
    <Calculator temperature={100} />,
    document.getElementById('root')
);

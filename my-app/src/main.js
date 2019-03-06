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

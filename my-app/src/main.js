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


const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning ReactJS!',
    author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
    },
};
ReactDOM.render(
    <Clock />,
    // <Comment
    //   date={comment.date}
    //   text={comment.text}
    //   author={comment.author}
    // />,
    document.getElementById('root')
);

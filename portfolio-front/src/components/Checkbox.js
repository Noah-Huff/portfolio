import React from 'react'

const Checkbox = ({check}) => {
    return (
        <label>
            <input
            type='checkbox'
            checked={check}
            onChange={(e) => console.log('Target', e.target)}
            />
            
        </label>
    )
}

export default Checkbox





/*
export default class Checkbox extends React.Component {
constructor(props) {
    super(props);
    this.state={check: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log('THIS', this, "PROPS", props);
}

handleChange(event) {
    console.log('Here', this);
    const target = event.target;
    const value = target.checked;
    const name = target.name;
    this.setState({[name]: value});
}

handleSubmit() {
    console.log("HANDLE SUBMIT");
}

render() {
    return (
        <div>
            <label>
                <input 
                name="check"
                type='checkbox'
                checked={this.state.check}
                onChange={this.handleChange}
            />
            </label>
        </div>
    );
}

}
*/
import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurf extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
    }

    handleChanges = e => {
        const value = e.target.type === "number" ? Number(e.target.value) : e.target.value
        this.setState({
            [e.target.name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        }
        this.props.addSmurf(smurf);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.name} onChange={this.handleChanges} name="name" />
                <input type="number" value={this.state.age} onChange={this.handleChanges} name="age" />
                <input type="text" value={this.state.height} onChange={this.handleChanges} name="height" />
                <button>Add</button>
            </form>
        );
    }
}

export default connect(null, { addSmurf })(AddSmurf);
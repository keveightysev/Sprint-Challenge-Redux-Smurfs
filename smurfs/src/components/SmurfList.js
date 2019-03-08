import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const SmurfList = props => {
    
    const deleteSmurf = (e, id) => {
        e.preventDefault();
        props.deleteSmurf(id);
    }

    return (
        <div>
        {props.smurfs.map(smurf => (
        <div key={smurf.id}>
        <h2>{smurf.name}</h2>
        <button onClick={e => deleteSmurf(e, smurf.id)}>Delete Smurf</button>
        </div>
        ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { deleteSmurf })(SmurfList);
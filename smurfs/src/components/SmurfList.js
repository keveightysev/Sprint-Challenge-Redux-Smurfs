import React from 'react';
import { connect } from 'react-redux';

const SmurfList = props => {
    return (
        <div>
        {props.smurfs.map(smurf => <h2 key={smurf.id}>{smurf.name}</h2>)}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfList);
// Connected component
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleClick} from 'actions/buttonActions';

function mapStateToProps(reducers) {
    const {uiState} = reducers;
    return {uiState};
}

function mapDispatchToProps(dispatch) {
    return {
        buttonActions: bindActionCreators({handleClick}, dispatch)
    };
}

class App extends Component {
    displayName = 'Connected component'
    _handleClick() {
        this.props.buttonActions.handleClick();
    }
    render() {
        return (
            <div>
                <h1>{this.props.uiState.title}</h1>
                <button onClick={::this._handleClick}>Click</button>
                <br />
                <span>{`I was clicked ${this.props.uiState.clicks} times`}</span>
                {this.props.children}
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col} from 'react-bootstrap';

class Playground extends Component {
  displayName = 'Playground component'
  renderOtherDdl() {
    const state = this.props.playgroundState;
    if (state.newOpts.length) {
      return (
        <select>
          {state.newOpts.map(
            (opt)=><option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          )}
        </select>
      );
    }
  }
  render() {
    const state = this.props.playgroundState;
    const formOptions = this.props.formOptions;
    return (
      <Row>
        <Col xs={12}>
          <h1>{state.title}</h1>
          <select value={state.ddl1} onChange={formOptions.HANDLE_OPTIONS1_CHANGE}>
            {state.options1.map(
              (opt)=><option key={opt.id} value={opt.id}>
                {opt.name}
              </option>
            )}
          </select>
          {this.renderOtherDdl()}
        </Col>
      </Row>
    );
  }
}

const initialState = {
  title: 'This is kitten sparta!',
  ddl1: null,
  ddl2: null,
  options1: [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'},
    {id: 3, name: 'Option 3'},
    {id: 4, name: 'Option 4'}
  ],
  options2: {
    1: {options: [{id: 1, name: '1  - Option 1'}]},
    2: {options: [{id: 2, name: '2  - Option 2'}]},
    3: {options: [{id: 3, name: '3  - Option 3'}]},
    4: {options: [{id: 4, name: '4  - Option 4'}]}
  },
  newOpts: []
};

let OPTIONS1_CHANGE = 'OPTIONS1_CHANGE';

function mapStateToProps(reducers) {
  return {playgroundState: reducers.playgroundState};
}

function mapDispatchToProps(dispatch) {
  return {
    formOptions: bindActionCreators({HANDLE_OPTIONS1_CHANGE}, dispatch)
  };
}

function HANDLE_OPTIONS1_CHANGE(e) {
  let {value} = e.target;
  return {type: OPTIONS1_CHANGE, payload: value};
}

export function playgroundState(state = initialState, action) {
  const {type} = action;

  switch (type) {
    case OPTIONS1_CHANGE:
      state.ddl1 = action.payload;
      let newOpts = state.options2[action.payload].options;
      return Object.assign({}, state, {newOpts});
    default:
      return state;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playground);

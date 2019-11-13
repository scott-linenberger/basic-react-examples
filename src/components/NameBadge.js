import React from 'react';
import SimpleNameDisplay from './SimpleNameDisplay';
import ComplexNameDisplay from './ComplexNameDisplay';

class NameBadge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      owner,
      building,
      dispatchBuildingUpdate,
    } = this.props;

    dispatchBuildingUpdate('some action');

    return (
      <div>
        <div>Name Badge:</div>
        <ComplexNameDisplay>
          <b>I'm so bold!!!</b>
          <div>
            Yo,
          </div>

          <hr />
          <SimpleNameDisplay
            nameValue={owner.name}
          />
        </ComplexNameDisplay>
      </div>
    );
  }
};

/* GLOBAL STATE USED IN REDUX */
const mapStateToProps = (state) => ({
  building: state.building,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchBuildingUpdate: dispatch(someAction),
});

export default connnect(
  mapStateToProps,
  mapDispatchToProps,
)(NameBadge);
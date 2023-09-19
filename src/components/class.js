import React from 'react';
class ClassComponent extends React.Component {
    render() {
        return(
            <h1>This is a class component{this.props.name}</h1>
        );
    }
}

export default ClassComponent;
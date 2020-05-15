import React from 'react';
import PropTypes from 'prop-types';

const App = props => {
    return (
        <h1>Hello, I am your app</h1>
    )
};

App.propTypes = {

}

export default React.memo(App);
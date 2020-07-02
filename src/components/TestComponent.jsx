import React, { Component } from 'react';

function TestComponent(props) {
    return (
        <div className="test">
            <h1>{props.name}</h1>
        </div>
    );
}

export default TestComponent;

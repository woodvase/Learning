import React from 'react';

export default function Square(props) {
    return (
        React.createElement(
            "button",
            {
                class: "square",
                onClick: props.onClick
            },
            props.value
        )
    );
}
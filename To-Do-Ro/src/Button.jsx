import React from 'react';

function Button({ onClick, workMinutes, restMinutes }) {
    return (
        <button onClick={() => onClick(workMinutes, restMinutes)}>
            {workMinutes}|{restMinutes}
        </button>
    );
}

export default Button;
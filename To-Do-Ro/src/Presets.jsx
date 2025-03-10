import React from 'react';

function Preset({ onClick, primary, secondary }) {
    return (
        <button style={{margin: 10}}onClick={() => onClick(primary, secondary)}>
            <div style={{ backgroundColor: primary, display: 'inline-block', width: '15px', height: '30px', borderRadius:'15px 0 0 15px' }}></div>
            <div style={{ backgroundColor: secondary, display: 'inline-block', width: '15px', height: '30px', borderRadius:'0 15px 15px 0' }}></div>
        </button>
    );
}

export default Preset;
"use client"
import React, { useState } from 'react';

const page = () => {
    const [num, setNum] = useState(0);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '100px', margin: '50px auto' }}>
            <button onClick={() => setNum(num + 1)} style={{ padding: '10px', fontSize: '16px' }}>+</button>
            <span style={{ fontSize: '20px' }}>{num}</span>
            <button onClick={() => setNum(num - 1)} style={{ padding: '10px', fontSize: '16px' }}>-</button>
        </div>
    );
};

export default page;
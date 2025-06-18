import React from 'react';

export default function Title({ title = "Blanchemaille", address = "87 rue du Fondenoy, 59100 Roubaix" }) {
    const cardStyle = {
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '1em',
        width: '100%',
        border: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    };
    const titleStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        color: '#111827',
        margin: '0 0 8px 0'
    };
    const addressStyle = {
        fontSize: '1.2em',
        color: '#2563eb',
        margin: '0'
    };

    return (
        <div style={cardStyle}>
            <h2 style={titleStyle}>
                {title}
            </h2>
            <p style={addressStyle}>
                <i>{address}</i>
            </p>
        </div>
    );
}



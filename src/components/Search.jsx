import React, { useState, useEffect } from 'react';

const Search = ({ qrCodes, setQrCodes, originalQrCodes, setOriginalQrCodes, setIsSearching }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (!originalQrCodes && qrCodes.length > 0) {
            setOriginalQrCodes([...qrCodes]);
        }
    }, [qrCodes, originalQrCodes, setOriginalQrCodes]);

    const handleSearch = (term) => {
        setSearchTerm(term);
        
        if (!originalQrCodes) return;

        if (term.trim() === '') {
            setQrCodes([...originalQrCodes]);
            setIsSearching(false);
        } else {
            const filtered = originalQrCodes.filter(qr => 
                qr.nom.toLowerCase().includes(term.toLowerCase()) ||
                qr.type.toLowerCase().includes(term.toLowerCase()) ||
                qr.code.toLowerCase().includes(term.toLowerCase())
            );
            setQrCodes(filtered);
            setIsSearching(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="var(--blue)" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
                    </svg>
                </button>
                <input 
                    type="text" 
                    placeholder="Rechercher par nom, type ou code..." 
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                {searchTerm && (
                    <button 
                        type="button" 
                        className="clear-btn"
                        onClick={() => handleSearch('')}
                        aria-label="Effacer la recherche"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="var(--text)" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/>
                        </svg>
                    </button>
                )}
            </form>
            <style jsx>
                {`
                    form {
                        display: flex;
                        align-items: center;
                        background-color: white;
                        border-radius: 10px;
                        padding: 1em;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                        border: 1px solid var(--border);
                        width: 100%;
                        margin-bottom: 1em;
                        position: relative;
                    }
                    button {
                        background-color: transparent;
                        border: none;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                    }
                    button:hover {
                        opacity: 0.7;
                    }
                    .clear-btn {
                        position: absolute;
                        right: 1em;
                        padding: 0.25em;
                        border-radius: 50%;
                    }
                    .clear-btn:hover {
                        background-color: rgba(0, 0, 0, 0.05);
                    }
                    svg {
                        width: 24px;
                        height: 24px;
                        margin-right: 0.5em;
                    }
                    .clear-btn svg {
                        width: 20px;
                        height: 20px;
                        margin: 0;
                    }
                    input {
                        flex-grow: 1;
                        border: none;
                        outline: none;
                        font-size: 16px;
                        color: var(--text);
                        background-color: transparent;
                        padding-right: 2.5em;
                    }
                `}
            </style>
        </>
    );
};

export default Search;
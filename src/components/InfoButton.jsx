import React, { useState } from 'react';

export default function InfoButton({ popupContent = "Informations sur l'application QareData" }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const buttonStyle = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        backgroundColor: 'var(--blue)',
        color: 'white',
        border: 'none',
        fontSize: '24px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1001
    };

    const popupStyle = {
        backgroundColor: 'var(--background)',
        borderRadius: '10px',
        padding: '1.2em',
        maxWidth: '90dvw',
        width: '90%',
        height: '80vh',
        overflowY: 'auto',
        boxShadow: '0 20px 25px rgba(0, 0, 0, 0.25)',
        position: 'relative'
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: 'none',
        border: 'none',
        fontSize: '32px',
        cursor: 'pointer',
        color: '#666',
        padding: '4px'
    };

    const titleStyle = {
        fontSize: '1.8em',
        marginBottom: '16px',
        color: 'var(--blue)'
    };

    const contentStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        fontSize: '1em',
        justifyContent: "flex-start",
        alignItems: "flex-start",
    };

    const contentP = {
        fontSize: '1em',
        color: '#333',
        textAlign: 'left'
    };

    const handleButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsPopupOpen(false);
        }
    };

    return (
        <>
            <button
                style={buttonStyle}
                onClick={handleButtonClick}
                title="Informations"
            >
                i
            </button>

            {isPopupOpen && (
                <div style={overlayStyle} onClick={handleOverlayClick}>
                    <div style={popupStyle}>
                        <button
                            style={closeButtonStyle}
                            onClick={handleClosePopup}
                            title="Fermer"
                        >
                            ×
                        </button>
                        <h3 style={titleStyle}>Guide d'utilisation</h3>
                        <div style={contentStyle}>
                            <Subtitle>Qu'est-ce que c'est ?</Subtitle>
                            <p style={contentP}>Ce système QareData centralise tous les QR codes du bâtiment. Chaque utilisateur peut accéder aux informations selon ses besoins spécifiques.</p>
                            <div style={{display: "flex", flexDirection: "column", gap: "0.5em", backgroundColor: "var(--grey)", padding: "1em", borderRadius: "10px", borderLeft: "5px solid var(--blue)"}}>
                                <div style={{display: "flex", alignItems: "center", gap: "0.5em"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="var(--blue)" d="M16 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0 0 18.06 7h-.12a2 2 0 0 0-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5M5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7zm6.5 0v-4h1v-4c0-.82-.68-1.5-1.5-1.5h-2c-.82 0-1.5.68-1.5 1.5v4h1v4z"/></svg>
                                    <h5 style={{fontSize: 20, color: "var(--blue)"}}>Locataires / Propriétaires</h5>
                                </div>
                                <p style={{textAlign: "left", fontSize: 16}}><i>→ Suivez les interventions effectuées sur votre immeuble...</i></p>
                            </div>
                            <div style={{display: "flex", flexDirection: "column", gap: "0.5em", backgroundColor: "var(--grey)", padding: "1em", borderRadius: "10px", borderLeft: "5px solid var(--blue)"}}>
                                <div style={{display: "flex", alignItems: "center", gap: "0.5em"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="var(--blue)" fill-rule="evenodd" d="M170.667 42.667c70.692 0 128 57.308 128 128c0 12.931-1.918 25.414-5.484 37.181l133.484 133.486c23.564 23.564 23.564 61.769 0 85.333s-61.77 23.564-85.333 0L207.848 293.183c-11.767 3.566-24.25 5.484-37.181 5.484c-70.692 0-128-57.308-128-128c0-13.642 2.134-26.786 6.087-39.115L109.302 192l60.014-19.987l2.68-2.68L192 109.375L131.382 48.81c12.378-3.988 25.58-6.142 39.285-6.142"/></svg>
                                    <h5 style={{fontSize: 20, color: "var(--blue)"}} >Prestataires</h5>
                                </div>
                                <p style={{textAlign: "left", fontSize: 16}} ><i>→ Enregistrez vos interventions auprès de l'appareil suivi.</i></p>
                            </div>
                            <Subtitle>Besoin d'aide ?</Subtitle>
                            <a style={{color: "#000"}} href="mailto:contact@qaredata.io">Contactez-nous !</a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

function Subtitle({ children }) {
    return (
        <>
            <div class="subtitleDiv">
                <div class="subtitleLeft"></div>
                <h4 class="subtitleText">
                    {children}
                </h4>
            </div>

            <style jsx>
                {`
                    .subtitleDiv {
                        display: flex;
                        align-items: center;
                        margin: 0.1em 0;
                    }
                    .subtitleLeft {
                        width: 5px;
                        height: 1.2em;
                        border-radius: 5px;
                        background-color: var(--blue);
                    }
                    .subtitleText {
                        margin: 0 0.5em;
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                `}
            </style>
        </>
    );
}

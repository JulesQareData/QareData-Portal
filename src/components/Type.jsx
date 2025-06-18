import React from 'react';

export default function Type ({ 
    title = "Type", 
    imageUrl = "https://via.placeholder.com/120x80/dc2626/ffffff?text=Alarme",
}) {

    return (
        <>
            <style jsx>{`
                .card {
                    background-color: white;
                    border-radius: 10px;
                    padding: 0.5em;
                    width: 110px;
                    height: auto;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                    border: 1px solid var(--border);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-family: system-ui, -apple-system, sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    text-decoration: none;
                }

                .card:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
                }

                .image {
                    width: 100%;
                    aspect-ratio: 3 / 2;
                    object-fit: cover;
                    border-radius: 6px;
                    margin-bottom: 8px;
                }

                .title {
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--blue);
                    margin: 0 0 2px 0;
                    line-height: 1.2;
                }

                .code {
                    font-size: 11px;
                    color:rgb(121, 121, 121);
                    margin: 0;
                    font-weight: 400;
                }
            `}</style>
            
            <a
                className="card"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img 
                    src={imageUrl} 
                    alt={title}
                    className="image"
                />
                <h3 className="title">{title}</h3>

            </a>
        </>
    );
};

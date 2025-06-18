import React from 'react';

const Codes = ({ codes, onBack }) => {
  if (!codes || codes.length === 0) return null;

  return (
    <div>
      <button
        onClick={onBack}
        style={{
          marginBottom: '1em',
          color: 'var(--blue)',
          border: 'none',
          backgroundColor: 'transparent',
        }}
      ><i>
          ← Retour
        </i></button>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1em',
        marginBottom: '2em'
      }}>
        {codes.map((qr, index) => (
          <a href={"https://qareco.de/" + qr.code} key={qr.code} style={{
            backgroundColor: 'white',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '0.5em',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            color: "#333",
            textDecoration: 'none',
          }}>

            {qr.nom ? (
              <div style={{ fontSize: '1em', color: '#666', marginBottom: '0.5em' }}>
                {qr.nom}
              </div>
            ) : (
              <div style={{ fontSize: '1em', color: '#666', marginBottom: '0.5em' }}>
                <i>Sans nom</i>
              </div>
            )
            }
            <img
              src={qr.imageUrl || "https://via.placeholder.com/120x80/dc2626/ffffff?text=Alarme"}
              alt={qr.nom || "Code QR"}
              style={{ width: '100%', aspectRatio: '3 / 2', objectFit: 'cover', borderRadius: '6px', marginBottom: '0.5em', objectPosition: 'center' }}
            />

            <div style={{ fontSize: '0.9em',  }}>
              {qr.code}
            </div>

          </a>
        ))}
      </div>
    </div>
  );
};

export default Codes;

/*
export default function Code({
    title = "Placeholder",
    code = "1111111",
    imageUrl = "https://via.placeholder.com/120x80/dc2626/ffffff?text=Alarme",
    redirectTo = "https://qareco.de/" + code,
}) {

    return (
        <>
            <style jsx>{`
                .card {
                    background-color: white;
                    border-radius: 10px;
                    padding: 0.5em;
                    width: 110px;
                    height: 130px;
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
                href={redirectTo}
                rel="noopener noreferrer"
            >
                <h3 className="title">{title}</h3>
                <img
                    src={imageUrl}
                    alt={title}
                    className="image"
                />
                <div>
                    <p className="code">{code}</p>
                </div>
            </a>
        </>
    );
};
*/
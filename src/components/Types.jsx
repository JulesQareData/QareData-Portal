import React from 'react';

const Types = ({ groupedQRCodes, onTypeClick }) => {
  const getTypeIcon = (type) => {
    const iconMap = {
      'Ascenseur': 'https://www.bonjoursenior.fr/wp-content/uploads/2019/07/Ascenseur.jpg',
      'Espaces verts': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSop-YNhldgbpBMjgEFucEdECrEKl_s5MJCWg&s',
      'Extincteur': 'https://www.datocms-assets.com/95019/1715940318-types-extincteurs-blog-spi-1.jpg?auto=compress%2Cformat',
      'Toiture': 'https://ars-toiture.fr/wp-content/uploads/2024/07/toiture-en-tuile.jpg',
      'VMC': 'https://particulier.hellio.com/hubfs/Blog%20Particuliers%20-%20Images/remplacement-bouche-ventilation-salle-bain.jpeg',
      'Porte Automatique': 'https://www.leasydoor.com/wp-content/uploads/2024/02/porte-automatique-1.jpg',
      'unknown': 'https://img.freepik.com/photos-premium/gros-point-interrogation-theme-sombre-themes-interrogatifs_183270-416.jpg'
    };
    return iconMap[type] || '📱';
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1em',
      marginBottom: '2em'
    }}>
      {Object.entries(groupedQRCodes).map(([type, codes]) => (
        <button
          key={type}
          onClick={() => onTypeClick(type, codes)}
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '0.5em',
            border: "1px solid var(--border)",
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            lineBreak: 'anywhere',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <img src={getTypeIcon(type)} alt={"Image représentant le type : " + type} style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', borderRadius: '8px', objectPosition: 'center'}} />
          <div style={{ fontSize: '0.9em', fontWeight: '600', color: '#333' }}>
            {type === 'unknown' ? 'Non classé' : type} <br/>
            <span style={{ fontSize: '0.7em', color: '#666' }}>({codes.length})</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Types;

/*
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
*/
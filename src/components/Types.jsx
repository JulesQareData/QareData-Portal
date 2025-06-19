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

  const groupedQRCodesSorted = Object.entries(groupedQRCodes).sort(([a], [b]) =>
    a.localeCompare(b, 'fr', { sensitivity: 'base' })
  );

  return (
    <>
      <style>{`
        .scrolling-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          text-overflow: ellipsis;
        }
      `}</style>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '1em',
        marginBottom: '2em'
      }}>
        {groupedQRCodesSorted.map(([type, codes]) => (
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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '120px',
              cursor: 'pointer',
              width: '100%',
              minWidth: 0
            }}
          >
            <img 
              src={getTypeIcon(type)} 
              alt={"Image représentant le type : " + type} 
              style={{ 
                width: '100%', 
                aspectRatio: '16 / 9', 
                objectFit: 'cover', 
                borderRadius: '8px', 
                objectPosition: 'center'
              }} 
            />
            <div style={{ 
              width: '100%',
              marginTop: '0.5em',
              minWidth: 0
            }}>
              <div className="scrolling-container" style={{
                fontSize: '0.9em', 
                fontWeight: '600', 
                color: '#333'
              }}>
                <span>
                  {type === 'unknown' ? 'Non classé' : type}
                </span>
              </div>
              <div style={{ 
                fontSize: '0.7em', 
                color: '#666',
                marginTop: '2px'
              }}>
                ({codes.length})
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default Types;
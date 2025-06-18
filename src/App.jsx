// Fonctionnalités
import { useState } from 'react'

// Fichiers
import './App.css'
import Title from './components/Title';
import InfoButton from './components/InfoButton';
import Codes from './components/Codes';
import Types from './components/Types';
import Search from './components/Search';

// Images
import logo from '../public/img/Logo.png';

function App() {
  // Données originales (non filtrées)
  const [originalQrCodes, setOriginalQrCodes] = useState(null);
  
  // Données affichées (peuvent être filtrées)
  const [qrCodes, setQrCodes] = useState([
    { code: "X0M9J90", type: 'unknown', nom: "", imageUrl: "https://img.freepik.com/photos-premium/gros-point-interrogation-theme-sombre-themes-interrogatifs_183270-416.jpg" },
    { code: "65SD6H9", type: 'Toiture', nom: "Bat B", imageUrl: "https://ars-toiture.fr/wp-content/uploads/2024/07/toiture-en-tuile.jpg"},
    { code: "42ZF85Q", type: 'Ascenseur', nom: "", imageUrl: "https://www.bonjoursenior.fr/wp-content/uploads/2019/07/Ascenseur.jpg" },
    { code: "OTCZJ4E", type: 'Porte Automatique', nom: "", imageUrl: "https://www.leasydoor.com/wp-content/uploads/2024/02/porte-automatique-1.jpg" },
    { code: "600J5GB", type: 'VMC', nom: "Vmc toiture bat B", imageUrl: "https://particulier.hellio.com/hubfs/Blog%20Particuliers%20-%20Images/remplacement-bouche-ventilation-salle-bain.jpeg" },
    { code: "A0EDGV5", type: "Ascenseur", nom: "Bat B", imageUrl: "https://www.bonjoursenior.fr/wp-content/uploads/2019/07/Ascenseur.jpg"},
    { code: "TA8DGG0", type: "Extincteur", nom: "", imageUrl: "https://www.datocms-assets.com/95019/1715940318-types-extincteurs-blog-spi-1.jpg?auto=compress%2Cformat"},
    { code: "OWSBRV3", type: "Espaces verts", nom: "Espaces verts", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSop-YNhldgbpBMjgEFucEdECrEKl_s5MJCWg&s"},
  ]);

  const [selectedType, setSelectedType] = useState(null);
  const [selectedCodes, setSelectedCodes] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const groupedQRCodes = qrCodes.reduce((acc, qr) => {
    const type = qr.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(qr);
    return acc;
  }, {});

  const handleTypeClick = (type, codes) => {
    setSelectedType(type);
    setSelectedCodes(codes);
  };

  const handleBackClick = () => {
    setSelectedType(null);
    setSelectedCodes([]);
  };

  return (
    <section id="body">
      <img src={logo} alt="Logo de QareData" className="logo" />
      <Search 
        qrCodes={qrCodes} 
        setQrCodes={setQrCodes}
        originalQrCodes={originalQrCodes}
        setOriginalQrCodes={setOriginalQrCodes}
        setIsSearching={setIsSearching}
      />
      <Title title="TERRASSES DU CHATEAU" address="10 RUE DU CHATEAU, 59000, Lille" />
      
      {!selectedType ? (
        <>
          {isSearching ? (
            <>
              <h2 className="h2">Résultats de recherche ({qrCodes.length}) :</h2>
              <Codes codes={qrCodes} onBack={null} />
            </>
          ) : (
            <>
              <h2 className="h2">QR codes triés par type :</h2>
              <Types groupedQRCodes={groupedQRCodes} onTypeClick={handleTypeClick} />
            </>
          )}
        </>
      ) : (
        <>
          <h2 className="h2">Type : {selectedType === 'unknown' ? 'Non classé' : selectedType}</h2>
          <Codes codes={selectedCodes} onBack={handleBackClick} />
        </>
      )}

      <style jsx>{`
        .logo {
          width: 80dvw;
          height: auto;
          display: block;
          margin: 0 auto;
        }
        p {
          text-align: center;
          font-size: 1.5rem;
          color: #333;
        }
        h2 {
          align-self: flex-start;
          font-size: 1.5em;
          color: var(--blue);
          font-weight: 700;
          margin: 0.7em 0;
        }
      `}
      </style>
      <InfoButton />
    </section>
  )
}

export default App
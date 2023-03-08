import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* Les images importées depuis la balise <img> sont accessibles dans "public" DONC
            il faut créer des chemins sources SRC en partant du dossier "public". */}
            <img src="./logo192.png" alt="logo react" />
            <h2>React world</h2>
        </div>
    );
};

export default Logo;
import React from 'react';
import { useParams } from 'react-router-dom';
import Poem from '../poems/Poem';
import appTheme from '../theme/theme';


const PagePoem: React.FC = () => {

    const {poemID} = useParams();
    
    return (
        <div>
            <h1>PagePoem</h1>
            <h2>Poem ID: {poemID}</h2>
        </div>
    );
};

export default PagePoem;
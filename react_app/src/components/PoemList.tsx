import React, { Dispatch, SetStateAction } from 'react';
import appTheme from '../theme/theme';
import { poems, poem } from '../poems/poems';

type Props = {
    handleSet: (poem: poem) => void;
};

const MyComponent: React.FC<Props> = ({ handleSet }) => {
    return (
        <div style={{display: "flex", backgroundColor: appTheme.palette.background.secondary, height: "100%", padding: "10px"}}>
            <div style={{flex: "1"}}>
                <h2><u>Poems</u></h2>
                <div style={{flex: "1"}}>
                    {poems.map(poem => {
                        return(
                            <div key={poem.title} style={{marginBottom: "10px"}}>
                            <button style ={{backgroundColor: appTheme.palette.color3}}onClick={() => handleSet(poem)}>
                                <h5>{poem.title}</h5>
                            </button>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default MyComponent;
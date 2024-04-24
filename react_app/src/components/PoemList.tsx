import React, { Dispatch, SetStateAction } from 'react';
import appTheme from '../theme/theme';
import { poems } from '../poems/poems';
import { Link } from 'react-router-dom';

const MyComponent: React.FC = () => {

    const goToPoem = (id: string) => {

    }

    const poems: {title: string, author: string, content: string, id: string}[] = [
        {title: "NA", author: "NA", content: "NA", id: "2305928039580egjw"}
    ]

    return (
        <div style={{display: "flex", backgroundColor: appTheme.palette.background.secondary, height: "100%", padding: "10px"}}>
            <div style={{flex: "1"}}>
                <h2><u>Poems</u></h2>
                <div style={{flex: "1"}}>
                    {poems.map(poem => {
                        return(
                            <div key={poem.title} style={{marginBottom: "10px"}}>
                                <Link to={`/poem/${poem.id}`}>
                            <button style ={{backgroundColor: appTheme.palette.color3}} onClick={() => goToPoem(poem.id)}>
                                <h5>{poem.title}</h5>
                            </button>
                            </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default MyComponent;
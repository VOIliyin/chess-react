import React from 'react';
import {Figure} from '../modules/figure/Figure';

interface Prop {
    title: string,
    figures: Figure[]
}

function LostFigures({title, figures}: Prop) {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map((figure) => 
                <div key={figure.id}>
                    {figure.name} 
                    {figure.logo && 
                        <img 
                            src={figure.logo} 
                            alt="logo" 
                            width={20}
                            height={20}
                        />
                    }
                </div>
            )}
        </div>
    );
}

export default LostFigures;
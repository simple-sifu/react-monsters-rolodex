import React from 'react';
import { Card } from './Card';
import './cardList.css';

export const CardList = props => (
    <div className='cardList'>
        {
            props.monsters.map(
                monster => (
                    <Card key={monster.id} monster={monster} />
                )
            )
        }
    </div>
)


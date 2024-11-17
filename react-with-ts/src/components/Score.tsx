import React from 'react'

interface ScroreProps {
    currentScore: number,
    totalScore: number,

}

const Score:React.FC<ScroreProps> = ({currentScore, totalScore}) => {
    return (
        <div>
            <h1>{currentScore}/{totalScore} scores</h1>
        </div>
    )
}

export default Score
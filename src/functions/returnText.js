import React from 'react';

export const returnText = (play) => {
    const { playType, gainLoss, playDist, player1, player2, result, min, sec, quarter} = play
    if (playType === 'run') {
        return (
          <p>{`${playType} by ${player1} with a ${gainLoss} of ${playDist} yards, resulting in a ${result}.(${min}:${
            sec.length === 1 ? `0${sec}` : `${sec}`
          })`}</p>
        )
    }else if (playType === 'pass') {
       return <p>{`${playType} by ${player1} to ${player2} with a ${gainLoss} of ${playDist} yards, resulting in a ${result}.(${min}:${sec.length === 1 ? `0${sec}` : `${sec}`})`}</p>

    }
}
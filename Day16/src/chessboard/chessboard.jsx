import React from 'react'
import './chessboard.css'

const Chessboard = () => {
    var boxes=[];
    for(let i=0;i<8;i++){
        boxes.push(<div className="square"/>)
    }
    console.log(boxes);
    return (
        <div className="App">
            <div className="chessboard">
              <div className="row">{boxes}</div>
              <div className="row">{boxes}</div>
              <div className="row">{boxes}</div>
              <div className="row">{boxes}</div>
              <div className="row">{boxes}</div>
              <div className="row">{boxes}</div>
              <div className="row">{boxes}</div>
              <div className="row">{boxes}</div>
              </div>
            
        </div>
    )
}

export default Chessboard 


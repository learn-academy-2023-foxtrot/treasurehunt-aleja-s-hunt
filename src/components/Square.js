import React from "react"

const Square = ({board}) => {
  // console.log("props", props.board) //output: 
  //when using props as the parameter requires dot notation to obtain a specific key
  //destruture a specific property
  // {board} - referencing the name assigned to the prop passed from App.js
  console.log("board", board);
  // output: ['?', '?', '?', '?', '?', '?', '?', '?', '?']
  return (
    <>
      <div className="grid">
        {board.map((value, index) => {
          return (
            <div className="square" key={index}>
              {value}
             </div>
        )
      })}
      </div>
    </>
  )
}
export default Square

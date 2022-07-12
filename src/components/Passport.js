import React from 'react'

const Passport = ({ passport }) => {

    console.log(passport)

    const passportDisplay= passport.map((entry)=>{
        return <li key={entry.id}>{entry.city} | {entry.country}</li>
    })

  return (
    <div class="passport">
        <h2>My Passport</h2>
        <ul>
            {passportDisplay}
        </ul>
        <img id="passportimage"
        src={"https://img.freepik.com/free-vector/opened-passport-with-visa-stamp-cartoon-sticker_1308-63043.jpg?t=st=1657570733~exp=1657571333~hmac=dd00c1fdc53124f9bdb99bbe38458491351d2e504ed5fd949fde11955aae8d96&w=1800"} />
        
    </div>
  )
}

export default Passport
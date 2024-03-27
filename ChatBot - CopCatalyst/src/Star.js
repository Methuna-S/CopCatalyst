import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function MyComponent({triggerNextStep}) {
  const [rating, setRating] = useState(0)
  const handleRating = (rate) => {
    setRating(rate)
    console.log(rating);
    triggerNextStep({value: 'summa', trigger:'18'})
  }

  return (
    <div>
      <Rating
        onClick={handleRating}
      />
    </div>
  )
}
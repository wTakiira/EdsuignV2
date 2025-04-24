import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

export default function StarRatingBox({ question }) {
  const [value, setValue] = useState(0);

  return (
    <Box className="flex flex-col items-center py-4">
      <span className="mb-2 text-xl font-bold text-black font-['Poppins']">
        {question}
      </span>
      <Rating
        name="custom-rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        precision={0.5} // pour demi-étoiles
        size="large"
        sx={{
          '& .MuiRating-iconFilled': {
            color: 'var(--primary)', // couleur des étoiles remplies
          },
          '& .MuiRating-iconEmpty': {
            color: 'var(--secondary)', // couleur des étoiles vides
          },
        }}
      />
      <span className={`mt-2 text-lg font-semibold ${value > 0 ? 'text-[var(--primary)]' : 'text-gray-500'}`}>
        {value > 0 ? `Votre note : ${value} / 5` : 'Aucune note'}
      </span>
    </Box>
  );
}
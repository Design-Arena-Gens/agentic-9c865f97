type CatIllustrationProps = {
  className?: string;
};

const CatIllustration = ({ className }: CatIllustrationProps) => {
  const classes = ['cat-illustration', className].filter(Boolean).join(' ');

  return (
    <svg
      className={classes}
      viewBox="0 0 640 640"
      role="img"
      aria-labelledby="catTitle catDesc"
    >
    <title id="catTitle">Gato alegre y elegante</title>
    <desc id="catDesc">
      Ilustración minimalista de un gato elegante con manchas blancas, negras, grises, beige y crema sobre un fondo blanco.
    </desc>

    <g fill="none" stroke="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="320" cy="500" rx="170" ry="54" fill="#e8ded0" opacity="0.6" />

      <path
        d="M420 320c44-22 116 52 92 114-14 34-62 42-101 8-27-24-26-93 9-122z"
        fill="#f3e8d5"
        stroke="#141414"
        strokeWidth="5"
      />
      <path
        d="M470 356c24 30 4 62-30 70"
        stroke="#1f1d1d"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M200 170c-98 22-158 178-96 276 40 64 116 103 196 103 124 0 214-87 214-200 0-106-84-184-184-184-42 0-88 8-130 5z"
        fill="#f3e8d5"
        stroke="#141414"
        strokeWidth="6"
      />

      <ellipse
        cx="250"
        cy="320"
        rx="100"
        ry="120"
        fill="#d8c3a5"
        transform="rotate(-12 250 320)"
        opacity="0.9"
      />
      <ellipse
        cx="342"
        cy="300"
        rx="70"
        ry="90"
        fill="#bcb8b1"
        transform="rotate(8 342 300)"
        opacity="0.85"
      />
      <ellipse
        cx="285"
        cy="380"
        rx="68"
        ry="54"
        fill="#ffffff"
        opacity="0.9"
      />
      <ellipse
        cx="370"
        cy="390"
        rx="38"
        ry="32"
        fill="#0f0f0f"
        opacity="0.7"
      />

      <path
        d="M254 468c36 38 120 40 171-4"
        stroke="#1f1d1d"
        strokeWidth="6"
        fill="transparent"
      />

      <path
        d="M226 128c-24 40-26 108 4 144 52 62 190 64 238 0 32-42 30-109 12-150-24-54-96-70-146-36-32-28-104-24-132 42z"
        fill="#f7edd8"
        stroke="#141414"
        strokeWidth="6"
      />

      <ellipse cx="228" cy="186" rx="36" ry="44" fill="#ffffff" opacity="0.9" />
      <ellipse cx="410" cy="190" rx="38" ry="46" fill="#d8c3a5" opacity="0.95" />
      <ellipse cx="360" cy="165" rx="24" ry="32" fill="#0f0f0f" opacity="0.8" />

      <path d="M212 108l-44-60" stroke="#141414" strokeWidth="6" />
      <path d="M428 106l36-60" stroke="#141414" strokeWidth="6" />

      <path
        d="M220 96c-14-36-60-56-70-22-10 36 30 80 66 86"
        fill="#ffffff"
        stroke="#141414"
        strokeWidth="5"
      />
      <path
        d="M420 94c16-38 62-58 72-22 10 40-32 86-70 90"
        fill="#d8c3a5"
        stroke="#141414"
        strokeWidth="5"
      />

      <path
        d="M260 230c14 20 40 30 60 30s48-10 62-30"
        stroke="#141414"
        strokeWidth="6"
        fill="transparent"
      />

      <circle cx="280" cy="198" r="20" fill="#0f0f0f" />
      <circle cx="356" cy="198" r="20" fill="#0f0f0f" />
      <circle cx="284" cy="194" r="6" fill="#ffffff" />
      <circle cx="360" cy="194" r="6" fill="#ffffff" />

      <path d="M318 222l-10 24 22 0-12-24z" fill="#0f0f0f" />
      <path d="M308 254c12 10 28 10 40 0" stroke="#0f0f0f" strokeWidth="5" fill="transparent" />

      <path d="M250 258c-32 10-62 10-88 0" stroke="#141414" strokeWidth="4" opacity="0.8" />
      <path d="M250 270c-32 10-62 10-88 0" stroke="#141414" strokeWidth="4" opacity="0.6" />
      <path d="M390 258c32 10 62 10 88 0" stroke="#141414" strokeWidth="4" opacity="0.8" />
      <path d="M390 270c32 10 62 10 88 0" stroke="#141414" strokeWidth="4" opacity="0.6" />

      <circle cx="188" cy="374" r="26" fill="#0f0f0f" opacity="0.8" />
      <circle cx="188" cy="374" r="16" fill="#ffffff" opacity="0.8" />

      <path
        d="M144 320c-24 44-22 104 12 136"
        stroke="#141414"
        strokeWidth="5"
        fill="transparent"
        opacity="0.7"
      />

      <circle cx="126" cy="214" r="8" fill="#d8a15c" opacity="0.5" />
      <circle cx="486" cy="242" r="10" fill="#d8a15c" opacity="0.45" />
      <circle cx="460" cy="132" r="6" fill="#d8a15c" opacity="0.6" />
      <circle cx="190" cy="128" r="6" fill="#d8a15c" opacity="0.6" />
    </g>
  </svg>
  );
};

export default CatIllustration;

import React from 'react';

const typeColors = {
    fire: "custom-fire",
    grass: "bg-success",
    water: "custom-water",
    electric: "custom-electric",
    poison: "custom-poison",
    flying: "custom-flying",
    ice: "custom-ice",
    bug: "custom-bug",
    fighting: "custom-fighting",
    ground: "custom-ground",
    psychic: "custom-psychic",
    rock: "custom-rock",
    ghost: "custom-ghost",
    dragon: "custom-dragon",
    dark: "custom-dark",
    steel: "bg-light text-dark",
    fairy: "custom-fairy",
};

const Type = ({ typeName }) => {
    const bgColor = typeColors[typeName] || "bg-secondary";
    return React.createElement("div", { className: `badge badge-pill text-uppercase ${bgColor}` }, typeName);
};

export default Type;



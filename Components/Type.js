import React from 'react';

const typeColors = {
    fire: "bg-danger",
    grass: "bg-success",
    water: "bg-primary",
    electric: "bg-warning",
    poison: "color:purple",
    flying: "bg-purple-400",
    ice: "bg-teal-200",
    bug: "bg-lime-900",
    fighting: "bg-red-600",
    ground: "bg-orange-200",
    psychic: "bg-pink-500",
    rock: "bg-yellow-700",
    ghost: "bg-violet-900",
    dragon: "bg-indigo-600",
    dark: "bg-black text-white",
    steel: "bg-light text-dark",
    fairy: "bg-pink-300",
};

const Type = ({ typeName }) => {
    const bgColor = typeColors[typeName] || "bg-secondary";
    return React.createElement("div", { className: `badge badge-pill text-uppercase ${bgColor}` }, typeName);
};

export default Type;



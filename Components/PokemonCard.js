import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import Type from "./Type";

/**
 * @typedef {Object} Pokemon,
 * @property {string} url,
 * @property {string} name
 */

/**
 * @typedef {Object} Ability,
 * @property {@property string} name,
 */

const PokemonData = {
    height: 0,
    base_experience: 0,
    id: 0,
    abilities: [],
    types: {
      map: (arg0) => {
        return arg0(null, null);
      },
      type: {
        name: ''
      }
    }
  };

/**
 * @typedef {Object} PokemonData
 * @property {string} url
 * @property {string} name
 */

/**
 * @typedef {Object} Props
 * @property {Pokemon} pokemon
 */

const PokemonCard = ({pokemon}) => {
    const [data, setData] = useState(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(pokemon.url)
                if (!response.ok) {
                    throw new Error("failed to fetch")
                }
                const fetchedData = await response.json()
                setData(fetchedData)
            }   catch (error) {
                console.log(error);
                return null;
            }
        };
        
        fetchPokemonData();
    }, [pokemon.url]);

    const getPokemonNumberUrl = (
        url
    ) => {
        const matches = url.match(/\/(\d+)\/$/);
        return matches ? matches [1]: null;
    };

    const pokemonNumber = getPokemonNumberUrl (
        pokemon.url
    );

    const flipCard = async () => {
        setIsFlipped(!isFlipped)
        await controls.start({rotateY: isFlipped ? 0:180 })
    }

    const formatPokemonNumber = (number) => {
        return `#${String(number).padStart(3,"0")}`
    }

    const formatMeasurement = (
        value,
        unit
    ) => {
        return `${value} ${unit}`;
    };
    
    function regionFinder(id) {
        if (id < 152) {
            return "Kanto"
        } if (id < 252 && id > 151) {
            return "Johto"
        } if (id < 387 && id > 251) {
            return "Hoenn"
        } if (id < 494 && id > 386) {
            return "Sinnoh"
        } if (id < 650 && id > 493) {
            return "Unova"
        } if (id < 722 && id > 649) {
            return "Kalos"
        } if (id < 809 && id > 721) {
            return "Alola"
        } if (id < 898 && id > 808) {
            return "Galar"
        }{
            return "???"
        }
    }

    return <div className="d-flex justify-content-center align-items-center flex-column col-md-3">
        <motion.div className="cursor-pointer" animate={controls} onClick={flipCard} whileHover={{scale:0.8}} whileTap={{scale:0.85}}>
            <motion.div className="bg-secondary bg-gradient d-flex p-1 rounded position-relative m-2" 
                initial ={{rotateY:0}} variants={{front: {rotateY: 0}, back: {rotateY: 180}, }} 
                animate={isFlipped ? "back" : "front"}>
                <div className="position-absolute fixed-top float-left text-white m-2 p-1 fs-1 fw-bold">
                    {!isFlipped && formatPokemonNumber (pokemonNumber || "")}
                </div>
                {!isFlipped ? (
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemonNumber}.png`}
                    width={220}
                    height={220}
                    alt="Image"
                    className="z-[9999]"
                    />
                ) : (
                    <div style={{width: 220, height: 220}} className="container overflow-hidden bg-danger rounded d-flex align-items-center justify-content-center border border-white border-5">
                        <div className="row gy-0 text-dark d-flex flex-column">
                            <p className="bg-light rounded">
                                Height: {""}
                                {data?.height && formatMeasurement(data.height / 10, "meters")}
                            </p>
                            <p className=" bg-light rounded">
                                Region: {""}
                                {regionFinder(data?.id)}

                            </p>
                            <div className="d-flex flex-column text-center">
                                <h3 className="text-decoration-underline text-white fs-5">
                                    Abilities
                                </h3>
                                {data?.abilities && data.abilities.map ((ability, index) => (
                                    <span className="text-white">
                                        {ability.ability.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                
            </motion.div>
        </motion.div> <span className="text-white p-1">
            {pokemon.name}
            </span> <div className="">
                {data?.types && data.types.map((type, index) => (<Type key={index}
                typeName={
                    type.type.name
                }
                
                />))}
                </div> 
            </div>
};

export default PokemonCard;


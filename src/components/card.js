import React from "react";

const Card = (props) => {
    const {name, email, id} = props.robot
    
    return (
        <div className="bg-emerald-300 rounded-lg border border-emerald-500 py-2 px-1
                          shadow-xl shadow-emerald-700 transition-all duration-300 ease-out
                          hover:-translate-y-2 text-center gap-2 flex flex-col items-center">
            <img className="w-48" src={`https://robohash.org/${id}`} alt={id}/>
            <div>
                <h2 className="font-semibold text-lg">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card
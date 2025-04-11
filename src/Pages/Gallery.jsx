import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

const colorImages = {
    black: "/src/assets/black.png",
    cyan: "/src/assets/cyan.png",
    green: "/src/assets/green.png",
    orange: "/src/assets/orange.png",
    pink: "/src/assets/pink.png",
    purple: "/src/assets/purple.png",
    red: "/src/assets/red.png",
    tan: "/src/assets/tan.png",
    yellow: "/src/assets/yellow.png",
};

const Gallery = () => {
    const [crewmates, setCrewmates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data, error } = await supabase.from("crewmates").select("*");
            if (error) {
                console.error("Error fetching crewmates:", error.message);
            } else {
                setCrewmates(data);
            }
        };

        fetchCrewmates();
    }, []);

    return (
        <div className="gallery">
            <h1>Crewmates Gallery</h1>
            <div className="gallery-grid">
                {crewmates.map((crewmate) => (
                    <div
                        key={crewmate.id}
                        className="gallery-card"
                        onClick={() => navigate(`/create/${crewmate.id}`)} // Navigate to edit
                    >
                        <img
                            src={colorImages[crewmate.color]}
                            alt={crewmate.color}
                            className="gallery-card-image"
                        />
                        <h2>{crewmate.name}</h2>
                        <p>{crewmate.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
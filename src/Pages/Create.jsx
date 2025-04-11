import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Create.css";
import { supabase } from "../client";

const Create = () => {
    const { id } = useParams(); // Get the crewmate ID from the URL
    const navigate = useNavigate();
    const [crewmate, setCrewmate] = useState({ name: "", color: "", description: "" });

    // Fetch crewmate data if editing
    useEffect(() => {
        if (id) {
            const fetchCrewmate = async () => {
                const { data, error } = await supabase
                    .from("crewmates")
                    .select("*")
                    .eq("id", id)
                    .single();

                if (error) {
                    console.error("Error fetching crewmate:", error.message);
                } else {
                    setCrewmate(data);
                }
            };

            fetchCrewmate();
        }
    }, [id]);

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmate((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (id) {
            // Update existing crewmate
            const { error } = await supabase
                .from("crewmates")
                .update({
                    name: crewmate.name,
                    color: crewmate.color,
                    description: crewmate.description,
                })
                .eq("id", id);

            if (error) {
                console.error("Error updating crewmate:", error.message);
                alert("Failed to update crewmate.");
            } else {
                // alert("Crewmate updated successfully!");
                navigate("/gallery");
            }
        } else {
            // Create new crewmate
            const { error } = await supabase
                .from("crewmates")
                .insert({
                    name: crewmate.name,
                    color: crewmate.color,
                    description: crewmate.description,
                });

            if (error) {
                console.error("Error creating crewmate:", error.message);
                alert("Failed to create crewmate.");
            } else {
                // alert("Crewmate created successfully!");
                navigate("/gallery");
            }
        }
    };

    // Handle delete crewmate
    const handleDelete = async () => {
        const { error } = await supabase.from("crewmates").delete().eq("id", id);

        if (error) {
            console.error("Error deleting crewmate:", error.message);
            alert("Failed to delete crewmate.");
        } else {
            // alert("Crewmate deleted successfully!");
            navigate("/gallery");
        }
    };

    return (
        <div className="create">
            <h1>{id ? "Edit Crewmate" : "Create a New Crewmate"}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={crewmate.name}
                    onChange={handleChange}
                    required
                />
                <br />

                <label htmlFor="color">Color:</label>
                <select
                    id="color"
                    name="color"
                    value={crewmate.color}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a color</option>
                    <option value="black">Black</option>
                    <option value="cyan">Cyan</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="pink">Pink</option>
                    <option value="purple">Purple</option>
                    <option value="red">Red</option>
                    <option value="tan">Tan</option>
                    <option value="yellow">Yellow</option>
                </select>
                <br />

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={crewmate.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <br />

                <button type="submit">{id ? "Save" : "Create"}</button>
                {id && (
                    <button type="button" onClick={handleDelete} className="delete-button">
                        Delete
                    </button>
                )}
            </form>
        </div>
    );
};

export default Create;
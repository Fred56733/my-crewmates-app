import React from "react";
import "./Create.css";

const Create = () => {
    return (
        <div className="create">
            <h1>Create a new Crewmate</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="color">Color:</label>
                <select id="color" name="color" required>
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

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" required></textarea>

                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default Create;
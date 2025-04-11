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
                <input type="text" id="color" name="color" required />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" required></textarea>

                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default Create;
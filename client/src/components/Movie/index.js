import React from 'react';

const MovieContainer = () => {
    
    const handleFormSubmit = async (event) => {
      
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label for='locationInput' class="indent">Title:</label>
                <input type='text' name='locationInput' class="indent"></input>
                <select>
                    <option value='action'>Action</option>
                    <option value='comedy'>Comedy</option>
                    <option value='documentatary'>Documentatary</option>
                    <option value='sci-fi'>Sci-Fi</option>
                    <option value='drama'>Drama</option>
                    <option value='family'>Family</option>
                    <option value=''>Random</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
            <div>
                {/* <p>Hi</p>
                <p>Hello</p> */}
            </div>
        </div>
    )
}

export default MovieContainer;
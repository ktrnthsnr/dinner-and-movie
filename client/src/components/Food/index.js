import React from 'react';

const FoodContainer = () => {
    
    const handleFormSubmit = async (event) => {
        // event.preventDefault();

        // try {
        //     const response = await yelpCall();
        //     if (!response.ok) {
        //         throw new Error('Something went wrong');
        //     }
        //     const { businesses } = await response.json();

        //     console.log(businesses);

        // } catch (err) {
        //     console.error(err);
        // }
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <select>
                    <option value='sushi'>Burgers</option>
                    <option value='pizza'>Pizza</option>
                    <option value='chinese'>Chinese</option>
                    <option value='indian'>Indian</option>
                    <option value=''>Random</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
            <div>
                <p>Hi</p>
                <p>Hello</p>
            </div>
        </div>
    )
}

export default FoodContainer;
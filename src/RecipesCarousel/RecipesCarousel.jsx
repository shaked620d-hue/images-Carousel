import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from '../Carousel/Carousel';
export default function RecipesCarousel() {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetchRecipes = async () => {
            try{
                const response = await axios.get('https://dummyjson.com/recipes?limit=6&select=name,image')

                const imgeUrls = response.data.recipes.map(recipe => recipe.image);
           
                setImages(imgeUrls);
                setLoading(false)
           
            }
            catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) return <div className="carousel-message">טוען מתכונים...</div>
    if (error) return <div className="carousel-message error">שגיאה: {error}</div>
    return (
    <div>
      <Carousel images ={images} intervalSeconds={4}/>
    </div>
  )
}

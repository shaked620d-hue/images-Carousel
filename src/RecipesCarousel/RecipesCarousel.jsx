import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from '../Carousel/Carousel';


export default function RecipesCarousel() {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const controller = new AbortController(); // שלב 1

        const loadImages = async () => {
            try{
                const response = await axios.get('https://dummyjson.com/recipes?limit=6&select=name,image', {
                    signal: controller.signal
                }); // שלב 2

               
                
                const imgeUrls = response.data.recipes.map(recipe => recipe.image);
           
                setImages(imgeUrls);
                setLoading(false) // כיבוי loading בהצלחה
           
            }
            catch (err) {
            if (axios.isCancel(err) || err.name === "CanceledError" || err.name === "AbortError") return; // שלב 4             
                setError(err.message);
                setLoading(false); // כיבוי loading בשגיאה
            }
        };

        loadImages();

        return () => {
            console.log("cleanup"); 
            controller.abort(); // שלב 3
        }
        
    }, []);

    if (loading) return <div className="carousel-message">טוען מתכונים...</div>
    if (error) return <div className="carousel-message error">שגיאה: {error}</div>
    return (
    <div>
      <Carousel images ={images} intervalSeconds={4}/>
    </div>
  )
}

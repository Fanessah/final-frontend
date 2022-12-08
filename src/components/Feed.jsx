import { useState, useEffect } from "react"
import CardReviews from "./CardReviews"


export default function Feed() {
    const [reviewList, setReviewList] = useState([])


    useEffect(() => {
        fetch('https://deploy-final-proj.web.app/allreviews')
            .then(results => results.json())
            .then(data => setReviewList(data))
            .catch(err => console.error(err))
    }, [])

    console.log('----------->',reviewList)

    return (
        ( 
        
        <section className= 'review-list'>
            
            {reviewList.map((review, index) => {
                return <CardReviews review={review} key={index} />
            })}
        </section>
    )
    )
}




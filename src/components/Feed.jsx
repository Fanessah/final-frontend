import { useState, useEffect } from "react"
import CardReviews from "./CardReviews"


export default function Feed() {
    const [reviewList, setReviewList] = useState()
    const [showReview, setShowReview] = useState(false)
    
    useEffect(() => {
        fetch('http://localhost:3030/')
            .then(results => results.json())
            .then(data => setReviewList(data)) 
            .catch(err => console.error(err))
    }, [])

    // console.log('----------->',reviewList)



    return (
        <>
            <section>
                {reviewList.map(review => {
                   return <CardReviews review={review} key={review._id}/>
})}
            </section>
        </>
    )
}
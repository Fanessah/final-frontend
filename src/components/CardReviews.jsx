import { Card } from 'antd';

export default function CardReviews({ review }) {

    return (
        <>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={`https://source.unsplash.com/random?sig=${review._id}`} />}>
                   
                    <p><b>Name:</b>{review.author}</p>
                    <p><b>Date:</b>{review.date}</p>
                    <p><b>Program:</b>{review.program}</p>
                    <p><b>Curriculum:</b>{review.curriculum}</p>
                    <p><b>Instruction:</b>{review.instruction}</p>
                    <p><b>Career Services:</b>{review.jobAssist} </p>
                    <p><b>Over All Experience:</b>{review.overallExp}</p>

                    
               
            </Card>
        </>
    )
}
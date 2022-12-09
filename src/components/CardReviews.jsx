import { Card} from 'antd';

export default function CardReviews({ review }) {

    return (
        <header> My Reviews </header>
        <section className= 'card-container'>
          
            <Card
            className='cardReviews'
                cover={<h1> </h1>}>
                    <p className='author'><b>{review.author}</b></p>
                    <p><b>Date:</b>{review.date}</p>
                    <p><b>Program:</b>{review.program}</p>
                    <p><b>Curriculum:</b>{review.curriculum}</p>
                    <p><b>Instruction:</b>{review.instruction}</p>
                    <p><b>Career Services:</b>{review.jobAssist} </p>
                    <p><b>Over All Experience:</b>{review.overallExp}</p> 
            </Card>
                  
            </section>
      
    )
}
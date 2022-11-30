import { Card } from 'antd';

export default function CardReviews({ review }) {

    return (
        <>
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                <div>
                    <p>{review.author}</p>
                    <p>{review.date}</p>
                    <p>{review.curriculum}</p>
                    <p>{review.instruction}</p>
                    <p>{review.jobAssist}</p>
                    <p>{review.overallExp}</p>

                    
                </div>
            </Card>
        </>
    )
}
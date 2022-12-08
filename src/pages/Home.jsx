import React from 'react';
import { Button, Space } from 'antd';

export default function Home() {
   
    
    return (
        
 

  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Button type="primary" block>
      Write a Review
    </Button>

    <Button block> Read Reviews </Button>

    <Button type="dashed" block>
      Read Reviews
    </Button>

  </Space>
)

    
}


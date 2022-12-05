
import React from 'react';
import { Button, Form, Input, } from 'antd';

export default function addReview() {

    const onFinish = (index) => {
        console.log('success', index)
        fetch('https://deploy-final-proj.web.app/addreview', {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json'
             },
          body: JSON.stringify(index)
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
         .catch(console.error)
      }
      const onFinishFailed = (errorInfo) => {
        console.log('failed', errorInfo)
      }
  

        return (
          
          <Form
          
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          >
            
            <Form.Item
              name='author' label='Author'>
              <Input/>
            </Form.Item>

            <Form.Item name='date' label="Date">
              <Input />
            </Form.Item>

            <Form.Item name='program' label="Program">
              <Input.TextArea />
            </Form.Item>

            <Form.Item name='curriculum' label="Curriculum">
              <Input.TextArea />
            </Form.Item>

            <Form.Item name= 'Instruction' label="Instruction">
              <Input.TextArea />
            </Form.Item>

            <Form.Item name='jobAssist' label="Job Assistance">
              <Input.TextArea />
            </Form.Item>

            <Form.Item name= 'overallExp'label="Over All Experience">
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>

            </Form.Item>
          </Form>
        );
      };
     
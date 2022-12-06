
import React from 'react';
import { Button, Form, Input, } from 'antd';
import {useNavigate} from 'react-router-dom'

export default function AddReview() {

    const navigate = useNavigate();

    const handleSubmit = (index) => {
        console.log('success', index)
        fetch('https://deploy-final-proj.web.app/addreview', {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json'
             },
          body: JSON.stringify(index)
        })
        .then( () => navigate('/'))
        
        .catch(console.error)
         
        }
         
      
      const onFinishFailed = (errorInfo) => {
        console.log('failed', errorInfo)
      }
  

        return (
          
          <Form
          
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
          >
           
            <Form.Item
              name='author' label='Name'>
              <Input/>
            </Form.Item>

            <Form.Item name='date' label="Date">
              <Input />
            </Form.Item>

            <Form.Item name='program' label="Program">
              <Input/>
            </Form.Item>

            <Form.Item name='curriculum' label="Curriculum (1-5)">
              <Input/>
            </Form.Item>

            <Form.Item name= 'Instruction' label="Instruction(1-5)">
              <Input/>
            </Form.Item>

            <Form.Item name='jobAssist' label="Job Assistance(1-5)">
              <Input/>
            </Form.Item>

            <Form.Item name= 'overallExp'label="Over All Experience">
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit" >
                Submit
              </Button>

            </Form.Item>
          </Form>
        );
      };
     
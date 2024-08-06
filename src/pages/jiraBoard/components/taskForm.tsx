import React from 'react';
import {
    Button,
    Form,
    Input,
    Select
} from 'antd';
import { TaskProps } from './taskListByColumn';



const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};


export type Categories = 'New' | 'InProgress' | 'Completed'


export interface FormDataProps {
    id?: string
    title: string
    description: string
    category: Categories
}


type TaskFormProps = {
    task?: TaskProps
    category?: Categories
    onSubmitHandler: (data: FormDataProps) => void
}


const TaskForm: React.FC<TaskFormProps> = ({task, category = "New", onSubmitHandler}) => {

    // const [form] = Form.useForm();
    const onFinish = (values: any) => {
        onSubmitHandler(values)
    };

    return (
        <Form
            //   form={form}
            {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}
            onFinish={onFinish}
            initialValues={{
                'title': task?.title ?? '',
                'description': task?.description ?? '',
                'category': category ?? 'New'
            }}>
            <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter the title of ticket' }]}>
                <Input />
            </Form.Item>



            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please enter the Description!' }]}
            >
                <Input.TextArea />
            </Form.Item>



            <Form.Item label="Status" name="category">
                <Select>
                <Select.Option value="New">New</Select.Option>
                <Select.Option value="InProgress">InProgress</Select.Option>
                <Select.Option value="Completed">Completed</Select.Option>
                </Select>
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};

export default TaskForm;
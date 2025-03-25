import { Card, Form, Input, Button } from 'antd';

interface LoginParams {
	username: string;
	password: string;
}

function LoginBox() {
	const [formData] = useState<LoginParams>({
		username: 'admin',
		password: '123456',
	});

	function handleFinish(value: LoginParams) {
		console.log(value);
	}

	return (
		<div className='flex justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
			<Card style={{ width: 300 }}>
				<Form
					labelCol={{ span: 6 }}
					initialValues={formData}
					onFinish={handleFinish}
				>
					<Form.Item label='用户名' name='username'>
						<Input />
					</Form.Item>
					<Form.Item label='密码' name='password'>
						<Input.Password />
					</Form.Item>
					<Form.Item>
						<Button block type='primary' htmlType='submit'>
							登录
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
}

export default LoginBox;

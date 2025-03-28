import { Card, Form, Input, Button } from 'antd';
import type { AccountUserTokenParams } from '@/api/user/types';
import { fetchAccountUserToken } from '@/api/user';
import { useRouter, useLoading } from '@/hook';

function LoginBox() {
	const [formData] = useState<AccountUserTokenParams>({
		username: 'admin',
		password: '123456',
	});
	const router = useRouter();
	const [loading, setLoading] = useLoading();

	async function handleFinish(value: AccountUserTokenParams) {
		try {
			setLoading(true);
			await fetchAccountUserToken(value);
			router.replace('/');
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className='flex justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
			<Card style={{ width: 300 }}>
				<div className='mb-6 text-center text-2xl font-bold'>登录</div>
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
						<Button block type='primary' htmlType='submit' loading={loading}>
							登录
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
}

export default LoginBox;

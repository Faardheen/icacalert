import bcrypt from 'bcrypt';
import User from '../models/User';

export default {
	Mutation: {
		register: async (parent, { email, phone, password }, context) => {
			const hashedPassword = await bcrypt.hash(password, 10);
			try {
				const user = new User({
					email,
					phone,
					password: hashedPassword,
				});
				await user.save();

				return {
					ok: true,
					user: user,
				};
			} catch (err) {
				return {
					ok: false,
					errors: {
						path: 'user',
						message: 'Register Error',
					},
				};
			}
		},
	},
};

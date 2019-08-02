import bcrypt from 'bcrypt';
import User from '../models/User';
import validateRegisterInput from '../validateRegisterInput';

export default {
	Mutation: {
		register: async (_, args, context) => {
			const { email, phone, password } = args;
			const hashedPassword = await bcrypt.hash(password, 12);
			const currentUser = await User.findOne({ email });
			const { errors, isValid } = await validateRegisterInput(args);
			if (!isValid) {
				return {
					ok: false,
					errors: [
						{
							path: 'register',
							message: errors.email || errors.password,
						},
					],
				};
			} else if (currentUser) {
				return {
					ok: false,
					errors: [
						{ path: 'register', message: 'user already exists' },
					],
				};
			}
			try {
				const user = await new User({
					email,
					phone,
					password: hashedPassword,
				}).save();

				return { ok: true, user: user };
			} catch (err) {
				return {
					ok: false,
					errors: [{ path: 'register', message: 'Register errror' }],
				};
			}
		},
	},
};

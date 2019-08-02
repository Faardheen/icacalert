import jwt from 'jsonwebtoken';
import _ from 'lodash';
import bcrypt from 'bcrypt';

export const createTokens = async (user, secret) => {
	const createToken = jwt.sign(
		{
			user: _.pick(user, ['id', 'email']),
		},
		secret,
		{
			expiresIn: '1h',
		},
	);

	return createToken;
};

export const tryLogin = async (email, password, model, SECRET) => {
	const user = await model.findOne({ email });
	if (!user) {
		return {
			ok: false,
			errors: [{ path: 'email', message: 'Wrong email' }],
		};
	}

    const valid = await bcrypt.compare(password, user.password);
    
	if (!valid) {
		return {
			ok: false,
			errors: { path: 'password', message: 'Wrong password' },
		};
	}

	const token = await createTokens(user, SECRET);

	return { ok: true, token };
};

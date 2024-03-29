import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { db, port } from './bin/config';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import { refreshTokens } from './auth';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const SECRET = process.env.SECRET;
const SECRET2 = process.env.SECRET2;

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(
	fileLoader(path.join(__dirname, './resolvers')),
);

const startServer = () => {
	const app = express();

	app.use(cors('*'));

	const addUser = async (req, res, next) => {
		const token = req.headers['x-token'];
		if (token) {
			try {
				const { user } = jwt.verify(token, SECRET);
				req.user = user;
			} catch (err) {
				const refreshToken = req.headers['x-refresh-token'];
				const newTokens = await refreshTokens(
					token,
					refreshToken,
					SECRET,
					SECRET2,
				);
				if (newTokens.token && newTokens.refreshToken) {
					res.set(
						'Access-Control-Expose-Headers',
						'x-token, x-refresh-token',
					);
					res.set('x-token', newTokens.token);
					res.set('x-refresh-token', newTokens.refreshToken);
				}
				req.user = newTokens.user;
			}
		}
		next();
	};

	app.use(addUser);

	mongoose.connect(
		db,
		{ useNewUrlParser: true, useCreateIndex: true },
		(err, res) => {
			if (err) {
				console.log('mongodb failed to connect');
				console.log(err);
			} else {
				console.log('connection success');
			}
		},
	);

	new ApolloServer({
		typeDefs,
		resolvers,
		context: ({ req }) => ({
			SECRET,
			SECRET2,
			user: req.user,
		}),
	}).applyMiddleware({ app });

	app.listen({ port }, () => {
		console.log(`Server runnning on port ${port}`);
	});
};

startServer();

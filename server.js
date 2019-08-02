import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { db, port } from './bin/config';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';

const SECRET = 'DlkwndalkwndaLXndwlkx'

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(
	fileLoader(path.join(__dirname, './resolvers')),
);

const startServer = () => {
	const app = express();

	app.use(cors('*'));

	mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true });

	new ApolloServer({
		typeDefs,
		resolvers,
		context: {
			SECRET
		}
	}).applyMiddleware({ app });

	app.listen({ port }, () => {
		console.log(`Server runnning on port ${port}`);
	});
};

startServer();

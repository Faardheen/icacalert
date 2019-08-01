import { gql } from 'apollo-server-express';

export default gql`
	type Query {
		dummy: String
	}
	type User {
		id: Int!
		email: String!
		password: String!
		phone: Int!
		alerts: [Alert!]!
	}

	type RegisterResponse {
		ok: Boolean!
		user: User
		errors: [Error!]
	}

	type Mutation {
		register(
			email: String!
			password: String!
			phone: Int!
		): RegisterResponse!
	}
`;

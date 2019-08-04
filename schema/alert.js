import { gql } from 'apollo-server-express';

export default gql`
	type Alert {
		id: String!
		type: String!
		description: String!
		user: User
	}

	type Query {
		allAlerts: [Alert]!
	}

	type AlertResponse {
		ok: Boolean!
		alert: Alert
		errors: Error
	}

	type Mutation {
		createAlert(type: String!, description: String): AlertResponse!
	}
`;

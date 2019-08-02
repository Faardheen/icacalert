import { gql } from 'apollo-server-express';

export default gql`
	type Alert {
        id: Int!
        type: String!
        description: String!
	}
`;

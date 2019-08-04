import React from 'react';
import {
	Form,
	Message,
	Container,
	Header,
	Button,
	Input,
} from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CreateAlert extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: '',
			description: '',
			err: '',
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	async onSubmit() {
		const { type, description } = this.state;
		const response = await this.props.mutate({
			variables: { type, description },
		});

		const { ok, errors } = response.data.createAlert;

		console.log(errors);
		if (ok) {
			this.props.history.push('/');
		} else {
			this.setState({
				err: errors.message,
			});
		}
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { type, description, err } = this.state;

		const errList = [];

		if (err) {
			errList.push(err);
		}

		return (
			<Container text>
				<Form>
					<Header as='h2'>Create Alert</Header>
					<Form.Field>
						<Input
							name='type'
							onChange={this.onChange}
							placeholder='Type of Corruption'
							fluid
							value={type}
						/>
					</Form.Field>
					<Form.Field>
						<Input
							name='description'
							onChange={this.onChange}
							placeholder='Description'
							fluid
							value={description}
						/>
					</Form.Field>
					<Button type='button' primary onClick={this.onSubmit}>
						Submit
					</Button>
				</Form>
				{errList.length ? (
					<Message
						error
						header='There was some errors with your submission'
						list={errList}
					/>
				) : null}
			</Container>
		);
	}
}

const createAlertMutation = gql`
	mutation($type: String!, $description: String) {
		createAlert(type: $type, description: $description) {
			ok
			alert {
				type
				description
			}
			errors {
				path
				message
			}
		}
	}
`;

export default graphql(createAlertMutation)(CreateAlert);

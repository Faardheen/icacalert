import Alert from '../models/Alert';
import User from '../models/User';
import showErr from '../showErr';
import { ALERT_ERR } from '../constants';

export default {
	Query: {
		allAlerts: async (parent, args, context) => {

			try {
				const alerts = await Alert.find({}).populate('user');
				return alerts;
			} catch (err) {
				console.log(err);
			}
		},
	},
	Mutation: {
		createAlert: async (parent, { type, description }, { user }) => {
			console.log('Logged in User:', user);
			try {
				const alert = await new Alert({ type, description });
				const currentUser = await User.findById(user.id);
				alert.user = currentUser;
				await alert.save(alert);
				currentUser.alerts.push(alert)
				await currentUser.save()
				return { ok: true, alert };
			} catch (err) {
				return showErr(false, 'alert', ALERT_ERR);
			}
		},
	},
};

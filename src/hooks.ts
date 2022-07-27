import type { Handle } from '@sveltejs/kit';
import * as cookie from 'cookie';
import { getSession, SESSION_NAME } from './routes/api/_utils';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	const user = await getSession(cookies[SESSION_NAME]);

	// cookies['userid'] || crypto.randomUUID();

	event.locals.user = user;
	event.locals.userid = user?.publicAdress;

	console.log(event.request.headers.get('cookie'));


	const response = await resolve(event);

	// if (!cookies['userid']) {
	// 	// if this is the first time the user has visited this app,
	// 	// set a cookie so that we recognise them when they return
	// 	response.headers.set(
	// 		'set-cookie',
	// 		cookie.serialize('userid', event.locals.userid, {
	// 			path: '/',
	// 			httpOnly: true
	// 		})
	// 	);
	// }

	return response;
};

import md5 from 'md5';

function getGravatarUrl(email) {
	const normalizeEmail = email.trim().toLowerCase();
	const hash = md5(normalizeEmail, { encoding: 'binary' });
	const imageUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`;

	return imageUrl;
}

export default getGravatarUrl;

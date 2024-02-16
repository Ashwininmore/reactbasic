export default function Jsxfunction()
{
	const user = { firstName: 'Ashwini', lastName: 'More' };
	function formatName(user)
	{ 
		return user.firstName + ' ' + user.lastName;
	}
	return <h1> Hello, {formatName(user)}! </h1>;
}
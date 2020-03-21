const model = [
	{
		id: 0,
		title: `Title text 1`,
		text: `Some text 1`,
		user: {
			id: 0,
			name: `user 1`,
		},
	}, {
		id: 1,
		title: `Title text 2`,
		text: `Some text 2`,
		user: {
			id: 1,
			name: `user 2`,
		},
	}, {
		id: 2,
		title: `Title text 3`,
		text: `Some text 3`,
		user: {
			id: 0,
			name: `user 1`,
		},
	}, {
		id: 3,
		title: `Title text 4`,
		text: `Some text 4`,
		user: {
			id: 2,
			name: `user 3`,
		},
	}, {
		id: 4,
		title: `Title text 5`,
		text: `Some text 5`,
		user: {
			id: 0,
			name: `user 1`,
		},
	}
];

const sortByUser = (arr) => {
	const map = new Map();
	const result = [];

	arr.forEach((obj) => {
		const { id: postId, title, text, user: { id: userId, name } } = obj;
		const post = { id: postId, title, text };

		if (!map.has(obj.user.id)) {
			map.set(obj.user.id, { id: userId, name, posts: [post] });
		} else {
			map.get(obj.user.id).posts.push(post);
		}
	});

	for (let value of map.values()) {
		result.push(value);
	}

	return result;
};

sortByUser(model);

module.exports = {
   friend: {
	insert: 'INSERT INTO friend (userId, nickName) VALUES (?, ?)',
	select: 'SELECT *FROM friend',
	delete: 'DELETE FROM friend WHERE userId=?'
   },
}


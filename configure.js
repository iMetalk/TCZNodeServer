module.exports = {
	mysql: {
	  host: '127.0.0.1',
	  port: '3306',
      user: 'root',
      password: 'qwe123',
      database: 'metalk',
      connectionLimit: 100
	},

	code9000: {
		code: 9000,
		msg: 'Params is invalid'
	},

	code9100: {
		code: 9100,
		msg: 'Database error'
	},

	code9200: {
		code: 9200,
		msg: 'Url error, please check you url'
	},
};
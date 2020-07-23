var mysql = require('mysql');

var con = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "password",
	database: 'mydb'
});

con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
	con.query(`CREATE TABLE student (id int AUTO_INCREMENT,
		name VARCHAR(255), address VARCHAR(255), PRIMARY KEY (id))`,
		function (err, result) {
			if (err) throw err;
			console.log("Table created");
			const sql = `INSERT INTO student (name, address)
			VALUES
			('Shyam','Rajkot'),('Raj','Gandhinagar')`
			con.query(sql, function (err, result) {
				if (err) throw err;
				console.log("Data Inserted");
			})
			con.end();
		});
});
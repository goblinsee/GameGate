// sql语句
var sqlMap = {
  user: {
    add: 'insert into account(username, password) values (?, ?)'
  }
}

module.exports = sqlMap;

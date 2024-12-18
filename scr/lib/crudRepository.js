const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}) //entre llaves es un objeto tipo jason;

class CrudRepository {  
    constructor(model) {
        this.model = model;
        this.tableName = model.tableName;
        this.pool=pool;
    }
    async findAll() {
        const [rows] = await pool.query(`SELECT * FROM ${this.tableName}`);
        return rows;
    }

    async findById(id) {
        const [rows] = await pool.query(`Select * from ${this.tableName} WHERE id= ?`, [id]);
        return rows[0];
    }

    async create(data) {
        const [result] = await pool.query(`insert into ${this.tableName} set ?`, data);
        return { id: result.insertId, ...data };//investigar
    }

    async update(id, data) {
        await pool.query(`update ${this.tableName} set ? where id = ?`, [data, id]);
        return this.findById(id);
    }

    async delete(id) {
        const [result] = await pool.query(`delete from ${this.tableName} where id=?`, [id]);
        console.log(result.affectedRows>0);
        return result.affectedRows>0;
    }
}
module.exports = CrudRepository;

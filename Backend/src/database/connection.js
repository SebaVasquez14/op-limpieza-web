import sql from "mssql";

const dbSettings = {
    user: 'seba',
    password: 'manchita',
    server: 'localhost\\DESKTOP-9TBCUCV',
    database: 'Bd_OP_Limpieza',
    dialect: 'mssql',
    port: 1433,
    debug: true,
    dialectOptions: {
        instanceName: 'SQLEXPRESS'
    },

    options: {
        encrypt: true,
        trustServerCertificate: false
    },
};
async function getConnection(params) {
    const pool = await sql.connect(dbSettings);
    const result = await pool.request().query('Select 1');
    console.log(result);
}

getConnection();
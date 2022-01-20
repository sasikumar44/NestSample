import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'SasiKumar#44',
  database: 'new',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
};

export default config;

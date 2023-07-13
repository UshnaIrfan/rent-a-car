import { MigrationInterface, QueryRunner } from "typeorm";
import * as bcrypt from 'bcrypt';

export class createUsersSeeders16851795608103 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void>
  {
      const salt = await bcrypt.genSalt();
      const users = [
        {
          name: 'admin',
          username: 'admin',
          email: 'admin123@gmail.com',
          password: 'admin123aaA@',
          roles: 'l2a_admin',
          status: 'active',
          blockStatus: 'unblock',
          profileIcon: 'http://localhost:5000/client/profile.png'
        },
        {
          name: 'Umair',
          username: 'Umair Qadeer',
          email: 'umairqadeer123@gmail.com',
          password: 'umair123aaA@',
          roles: 'l2a_user',
          status: 'active',
          blockStatus: 'unblock',
          profileIcon: 'http://localhost:5000/client/profile.png'
        }
    ];

    for (const user of users)
    {

      const hashedPassword = await bcrypt.hash(user.password, salt);
      const userQuery = `INSERT INTO users (name, username, email, password, roles, status, blockStatus, profileIcon)VALUES (?, ?, ?, ?, ?, ?, ?,?)`;
      await queryRunner.query(userQuery, [
        user.name,
        user.username,
        user.email,
        hashedPassword,
        user.roles,
        user.status,
        user.blockStatus,
        user.profileIcon
      ]);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {

  }
}

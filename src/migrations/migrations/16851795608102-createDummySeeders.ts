import { MigrationInterface, QueryRunner } from "typeorm"
import * as bcrypt from 'bcrypt';

export class createDummySeeders16851795608102 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void>
  {
      // Create dummy category
      await queryRunner.query("INSERT INTO categories (categoryName,approvedByAdmin) VALUES('Stylo test','approved')");
      await queryRunner.query("INSERT INTO categories (categoryName,approvedByAdmin) VALUES('Antivirus Software test','approved')");

      // create dummy sellers
      const sellers =
        [


            { sellerName: 'Test 1', sellerUrl: 'https://test1.com',approvedByAdmin:'approved',type:'National & Regional Online, U.S. (Default)',country:'U.S',city:'null',state:'null',   isListing: true, categoryName: 'Stylo test' },
            { sellerName: 'Test 2', sellerUrl: 'https://test2.com',approvedByAdmin:'approved',type:'National & Regional Online, U.S. (Default)',country:'U.S',city:'null',state:'null',   isListing: true,categoryName: 'Stylo test' },
            { sellerName: 'Test 3', sellerUrl: 'https://test3.com',approvedByAdmin:'approved',type:'National & Regional Online, U.S. (Default)',country:'U.S',city:'null',state:'null',   isListing: true, categoryName: 'Stylo test' },
            { sellerName: 'Test 4', sellerUrl: 'https://test4.com',approvedByAdmin:'approved',type:'National & Regional Online, U.S. (Default)',country:'U.S',city:'null',state:'null',   isListing: true, categoryName: 'Stylo test' },
            { sellerName: 'Test 5', sellerUrl: 'https://test5.com',approvedByAdmin:'approved',type:'National & Regional Online, U.S. (Default)',country:'U.S',city:'null',state:'null',   isListing: true, categoryName: 'Stylo test' },
            { sellerName: 'Test 6', sellerUrl: 'https://test6.com',approvedByAdmin:'approved',type:'National & Regional Online, U.S. (Default)',country:'U.S',city:'null',state:'null',   isListing: true, categoryName: 'Stylo test' },
            { sellerName: 'Test 7', sellerUrl: 'https://test7.com',approvedByAdmin:'approved', type:'National & Regional Online, U.S. (Default)',country:'U.S',city:'null',state:'null',  isListing: true, categoryName: 'Stylo test' },
            { sellerName: 'Test 8', sellerUrl: 'https://test8.com',approvedByAdmin:'approved',type:'National & Regional Online, U.S. (Default)',country:'U.S',city:'null',state:'null',   isListing: true,categoryName: 'Stylo test' },
            { sellerName: 'Test 9', sellerUrl: 'https://test9.com',approvedByAdmin:'approved',type:'For U.S. Locals Only!',country:'U.S',city:'null',state:'California',   isListing: true, categoryName: 'Stylo test' },
            { sellerName: 'Test 10', sellerUrl: 'https://test10.com',approvedByAdmin:'approved',type:'For U.S. Locals Only!',country:'U.S',city:'null',state:'California',   isListing: true, categoryName: 'Stylo test' },

            { sellerName: 'Bitdefender test', sellerUrl: 'https://bitdefendertest.com',approvedByAdmin:'approved',type:'Outside the U.S.',country:'Pakistan',city:'null',state:'null',   isListing: true,categoryName: 'Antivirus Software test'},
            { sellerName: 'Intego test', sellerUrl: 'https://integotest.com',approvedByAdmin:'approved', type:'Outside the U.S.',country:'U.S',city:'India',state:'null',  isListing: true,categoryName: 'Antivirus Software test'},
            { sellerName: 'McAfee test', sellerUrl: 'https://mcafeetest.com',approvedByAdmin:'approved', type:'Outside the U.S.',country:'U.S',city:'Pakistan',state:'null',  isListing: true,categoryName: 'Antivirus Software test'},
            { sellerName: 'Norton test', sellerUrl: 'https://nortontest.com',approvedByAdmin:'approved', type:'Outside the U.S.',country:'U.S',city:'India',state:'null',  isListing: true,categoryName: 'Antivirus Software test'},
      ];
      for (const seller of sellers)
      {
          const existingSeller = await queryRunner.query("SELECT * FROM sellers WHERE sellerName = ?", [seller.sellerName]);
          if (!existingSeller.length)
          {
              await queryRunner.query("INSERT INTO sellers (sellerName, sellerUrl, approvedByAdmin,type,country,city,state,isListing) VALUES (?, ?,?, ?,?,?,?,?)", [seller.sellerName, seller.sellerUrl,seller.approvedByAdmin,seller.type,seller.country,seller.city,seller.state,seller.isListing]);
          }
      }

      // Retrieve all sellers
      const allSellers = await queryRunner.query("SELECT * FROM sellers");
      for (const seller of sellers)
      {
          const existingSeller = allSellers.find((s) => s.sellerName === seller.sellerName);
          if (existingSeller)
          {
            const category = await queryRunner.query("SELECT * FROM categories WHERE categoryName = ?", [seller.categoryName]);
            if (category.length)
            {
              const categoryId = category[0].id;
              const sellerId = existingSeller.id;
              // Create relationship between seller and category
              await queryRunner.query("INSERT INTO categories_sellers_sellers (categoriesId, sellersId) VALUES (?, ?)", [categoryId, sellerId]);
            }
          }
      }

      // Create dummy users
      const salt = await bcrypt.genSalt();
      const numberOfUsers = 5;
      for (let i = 0; i < numberOfUsers; i++)
      {
          const name = `test${i + 1}`;
          const username = `testUser${i + 1}`;
          const email = `test${i + 1}@gmail.com`;
          const plainPassword = '123456aaA@';
          const hashedPassword = await bcrypt.hash(plainPassword, salt);
          const roles = 'l2a_user';
          const status = 'active';
          const blockStatus = 'unblock';
          const  profileIcon = 'http://localhost:5000/client/profile.png'
          const query = `INSERT INTO users (name, username, email, password, roles, status, blockStatus,profileIcon) VALUES('${name}', '${username}', '${email}', '${hashedPassword}', '${roles}', '${status}', '${blockStatus}' , '${profileIcon}')`;
          await queryRunner.query(query);
      }

      // create dummy review
      const allUsers = await queryRunner.query("SELECT * FROM users");
      const titleQuery: string = "SELECT id,type ,slug FROM clicksTitle";
      const titles = await queryRunner.query(titleQuery);
      for (const seller of sellers)
      {
          const existingSeller = await queryRunner.query("SELECT * FROM sellers WHERE sellerName = ?", [seller.sellerName]);
          if (existingSeller.length)
          {
            const userIndex = Math.floor(Math.random() * allUsers.length);
            const user = allUsers[userIndex];
            const titleIndex = Math.floor(Math.random() * titles.length);
            const title = titles[titleIndex];
            const reviewData = {
              sellerId: existingSeller[0].id,
              titleId: title.id,
              titleSlug: title.slug,
              type:title.type,
              message: 'The quality of this product is outstanding. I was impressed by its durability and functionality. It definitely exceeded my expectations. The seller provided excellent customer service throughout the entire purchasing process. I highly recommend this product to anyone in need.',
              userId: user.id,
              approvedByAdmin: true,
              bestWriter: false
            };
            const reviewQuery = `INSERT INTO review (sellerId, titleId, titleSlug,type, message, userId, approvedByAdmin, bestWriter)
            VALUES (?, ?, ?, ?, ?, ?, ?,?)`;
            await queryRunner.query(reviewQuery, [
              reviewData.sellerId,
              reviewData.titleId,
              reviewData.titleSlug,
              reviewData.type,
              reviewData.message,
              reviewData.userId,
              reviewData.approvedByAdmin,
              reviewData.bestWriter
            ]);
          }
      }
  }

    public async down(queryRunner: QueryRunner): Promise<void>
    {

    }

}

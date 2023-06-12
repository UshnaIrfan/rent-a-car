import { MigrationInterface, QueryRunner } from "typeorm"

export class createIntialCategoriesSeeders1685179560898 implements MigrationInterface {


  public async up(queryRunner: QueryRunner): Promise<void>
  {

    // Create categories
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Airlines')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Accounting and Taxes')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Antivirus Software')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Apartments and Property Management')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Apartment and Housing Rentals')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Auto Insurance')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Auto Loans and Financing')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Auto Repair')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Auto Warranties and Protection')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Babies and Toddlers')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Baby and Toddler Clothing')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Banks and Banking')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Beauty,Cosmetics and Skincare')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Bedding and Bath')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Supercenter Stores')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Books')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Brokers')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Cable,Video and TV Streaming')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Mobile, Wireless, Cell Phone Service')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Chocolate')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Coffee')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Credit Cards')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Cryptocurrency Exchanges and Wallets')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Creativity')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Computers,Cell Phones and Electronics')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Commuter Rail Systems')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Dating')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Daycare')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Department Stores')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Dental Insurance')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Discount Department Stores')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Discount Stores')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Fashion Women')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Fashion Men')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Fast Food')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Financial Investment, Money Management')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Flowers')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Food and Grocery Delivery')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Freelance Marketplaces')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Gas Stations')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Gifts')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Gyms,Pilates,Yoga,Barre,HIIT and Cycling')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Health Food and Vitamins')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Health Insurance')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Home and Mortgage Loans')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Home Style and Furniture')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Home,Garden and Plants')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Home Improvement')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Home Repair and Handyman')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Home Owner’s Insurance')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Home Shopping Networks')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Hotels, Motels, Lodging')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Internet Service Providers (ISPs)')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Jewelry')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Kitchen and Cooking')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Kids')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Kid’s Clothing')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Laundry')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Legal')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Life Insurance')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Medical and Urgent Care')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Box Subscriptions')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Marketplaces')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Learning')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Meal Kit Delivery')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Movers and Moving')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Movie Theaters')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Pet Supplies')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Pharmacies')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Real Estate')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Real Estate Agents')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Renters Insurance')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Ride Hail and Car Sharing')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Restaurants')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Shipping')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Outdoor Recreation,Sporting and Camping')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Shoes')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Storage')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Therapy')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Ticket Marketplaces')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Travel and Booking')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Music Streaming')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Vacation Packages')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Vacation Rentals')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Veterinarians,Pet Insurance and Pet Care')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Video Games')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Wine')");
      await queryRunner.query("INSERT INTO categories (categoryName) VALUES('Weddings and Parties')");
  }

  public async down(queryRunner: QueryRunner): Promise<void>
  {

  }

}

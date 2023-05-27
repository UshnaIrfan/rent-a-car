import { MigrationInterface, QueryRunner } from "typeorm";

export class createInitialSellersSeeder1685179560899 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void>
  {

    // Create sellers
    const sellers = [

      //Airlines
      { sellerName: 'Air Canada', sellerUrl: 'http://aircanada.com/', isListing: true },
      { sellerName: 'Air New Zealand', sellerUrl: 'http://airnewzealand.com/', isListing: true },
      { sellerName: 'British Airways', sellerUrl: 'http://britishairways.com/', isListing: true },
      { sellerName: 'Delta Air Lines', sellerUrl: 'http://delta.com/', isListing: true },
      { sellerName: 'Hawaiian Airlines', sellerUrl: 'http://hawaiinairlines.com/', isListing: true },
      { sellerName: 'Japan Air Lines', sellerUrl: 'http://jai.com/', isListing: true },
      { sellerName: 'JetBlue', sellerUrl: 'http://jetblue.com/', isListing: true },
      { sellerName: 'Lufthansa', sellerUrl: 'http://lufthansa.com/', isListing: true },
      { sellerName: 'Pakistan International Airline ', sellerUrl: 'http://piac.com.pk/', isListing: true },
      { sellerName: 'Singapore Airlines', sellerUrl: 'http://singaporeair.com/', isListing: true },
      { sellerName: 'Southwest Airlines', sellerUrl: 'http://southwest.com/', isListing: true },
      { sellerName: 'Spirit Airlines', sellerUrl: 'http://spirit.com/', isListing: true },
      { sellerName: 'United Airlines', sellerUrl: 'http://united.com/', isListing: true },
      { sellerName: 'Virgin Atlantic', sellerUrl: 'http://virginatlantic.com/', isListing: true },
      { sellerName: 'WestJet', sellerUrl: 'http://westjet.com/', isListing: true },

      //  Accounting and Taxes
      { sellerName: 'QuickBooks', sellerUrl: 'http://quickbooks.intuit.com/', isListing: true },
      { sellerName: 'TurboTax', sellerUrl: 'http://turbotax.intuit.com/', isListing: true },
      { sellerName: 'Zoho Books', sellerUrl: 'http://zoho.com/us/books', isListing: true },
      { sellerName: 'Fresh Books', sellerUrl: 'http://freshbooks.com/', isListing: true },
      { sellerName: 'Sage Accounting', sellerUrl: 'http://sage.com/', isListing: true },
      { sellerName: 'Xero', sellerUrl: 'http://Xero.com', isListing: true },
      { sellerName: 'NetSuite', sellerUrl: 'http://netsuite.com/', isListing: true },
      { sellerName: 'Wave Accounting', sellerUrl: 'http://waveapps.com/', isListing: true },
      { sellerName: 'H&R Block', sellerUrl: 'http://hrblock.com/', isListing: true },
      { sellerName: 'TaxSlayer', sellerUrl: 'http://taxslayer.com/', isListing: true },
      { sellerName: 'Cash App Taxes', sellerUrl: 'http://cash.app/taxes', isListing: true },
      { sellerName: 'Jackson Hewitt', sellerUrl: 'http://jacksonhewitt.com/', isListing: true },

     //Antivirus Software
      { sellerName: 'Bitdefender', sellerUrl: 'http://bitdefender.com/', isListing: true },
      { sellerName: 'Intego', sellerUrl: 'http://intego.com/', isListing: true },
      { sellerName: 'McAfee', sellerUrl: 'http://mcafee.com/', isListing: true },
      { sellerName: 'Norton', sellerUrl: 'http://norton.com/', isListing: true },

      //Apartments and Property Management
      { sellerName: 'Asset Living', sellerUrl: 'http://assetliving.com/', isListing: true },
      { sellerName: 'AvalonBay Communities', sellerUrl: 'http://avaloncommunities.com/', isListing: true },
      { sellerName: 'BH Companies', sellerUrl: 'http://livebh.com/', isListing: true },
      { sellerName: 'Cortland ', sellerUrl: 'http://cortland.com/', isListing: true },
      { sellerName: 'Cushman and Wakefield', sellerUrl: 'http://cushwakeliving.com/', isListing: true },
      { sellerName: 'Edward Rose', sellerUrl: 'http://edwardrose.com/', isListing: true },
      { sellerName: 'Equity', sellerUrl: 'http://equityapartments.com/', isListing: true },
      { sellerName: 'FPI Management ', sellerUrl: 'http://fpimgt.com/', isListing: true },
      { sellerName: 'Greystar', sellerUrl: 'http://greystar.com/', isListing: true },
      { sellerName: 'Irvine Company ', sellerUrl: 'http://irvinecompany.com/', isListing: true },
      { sellerName: 'Lincoln Property Company', sellerUrl: 'http://lincolnapts.com/', isListing: true },
      { sellerName: 'MAA Communities', sellerUrl: 'http://maac.com/', isListing: true },
      { sellerName: 'Monarch Investment', sellerUrl: 'http://monarchinvestment.com/', isListing: true },
      { sellerName: 'Morgan Properties', sellerUrl: 'http://morgan-properties.com/', isListing: true },
      { sellerName: 'Related Rentals', sellerUrl: 'http://relatedrentals.com/', isListing: true },
      { sellerName: 'Winn Companies', sellerUrl: 'http://winncompanies.com/', isListing: true },

       //Apartment and Housing Rentals
      { sellerName: 'Apartments', sellerUrl: 'http://apartments.com/', isListing: true },
      { sellerName: 'Zillow', sellerUrl: 'http://zillow.com/', isListing: true },
      { sellerName: 'Trulia', sellerUrl: 'http://trulia.com/', isListing: true },
      { sellerName: 'Westside Rentals', sellerUrl: 'http://westsiderentals.com/', isListing: true },
      { sellerName: 'Realtor', sellerUrl: 'http://realtor.com/', isListing: true },
      { sellerName: 'Redfin', sellerUrl: 'http://redfin.com/', isListing: true },
      { sellerName: 'Zumper', sellerUrl: 'http://zumper.com/', isListing: true },
      { sellerName: 'Rent', sellerUrl: 'http://rent.com/', isListing: true },

      //Auto Insurance
      { sellerName: 'Progressive', sellerUrl: 'http://progressive.com/', isListing: true },
      { sellerName: 'Mercury Insurance', sellerUrl: 'http://mercuryinsurance.com/', isListing: true },
      { sellerName: 'Allstate', sellerUrl: 'http://allstate.com/', isListing: true },
      { sellerName: 'Erie Insurance', sellerUrl: 'http://erieinsurance.com/', isListing: true },
      { sellerName: 'USAA', sellerUrl: 'http://usaa.com/', isListing: true },
      { sellerName: 'State Farm', sellerUrl: 'http://statefarm.com/', isListing: true },
      { sellerName: 'Travelers ', sellerUrl: 'http://travelers.com/', isListing: true },
      { sellerName: 'Geico', sellerUrl: 'http://geico.com/', isListing: true },
      { sellerName: 'Nationwide', sellerUrl: 'http://nationwide.com/', isListing: true },
      { sellerName: 'American Family', sellerUrl: 'http://amfam.com/', isListing: true },
      { sellerName: 'Farmers', sellerUrl: 'http://farmers.com/', isListing: true },
      { sellerName: 'Liberty Mutua', sellerUrl: 'http://libertymutual.com/', isListing: true },
      { sellerName: 'Auto-Owners Insurance', sellerUrl: 'http://auto-owners.com/', isListing: true },

      //Auto Loans and Financing
      { sellerName: 'LightStream', sellerUrl: 'http://lightstream.com/', isListing: true },
      { sellerName: 'Consumers Credit Union', sellerUrl: 'http://myconsumers.org/', isListing: true },
      { sellerName: 'myAutoloan', sellerUrl: 'http://myautoloan.com/', isListing: true },
      { sellerName: 'Bank of America', sellerUrl: 'http://bankofamerica.com/', isListing: true },
      { sellerName: 'PenFed Credit Union', sellerUrl: 'http://penfed.org/', isListing: true },
      { sellerName: 'Carvana', sellerUrl: 'http://carvana.com/', isListing: true },
      { sellerName: 'Lending Tree', sellerUrl: 'http://lendingtree.com/', isListing: true },
      { sellerName: 'Ally', sellerUrl: 'http://ally.com/', isListing: true },
      { sellerName: 'Capital One', sellerUrl: 'http://capitalone.com/', isListing: true },
      { sellerName: 'Alliant', sellerUrl: 'http://alliantcreditunion.org/', isListing: true },
      { sellerName: 'U.S. Bank', sellerUrl: 'http://usbank.com/', isListing: true },
      { sellerName: 'Wells Fargo', sellerUrl: 'http://wellsfargo.com/', isListing: true },
      { sellerName: 'Chase', sellerUrl: 'http://chase.com/', isListing: true },
      { sellerName: 'Toyota', sellerUrl: 'http://toyota.com/', isListing: true },
      { sellerName: 'Ford', sellerUrl: 'http://ford.com/', isListing: true },
      { sellerName: 'Honda', sellerUrl: 'http://americanhondafinance.com/', isListing: true },
      { sellerName: 'TD Auto', sellerUrl: 'http://tdautofinance.com/', isListing: true },
      { sellerName: 'Carmax', sellerUrl: 'http://carmax.com/', isListing: true },
      { sellerName: 'PNC Bank', sellerUrl: 'http://pnc.com/', isListing: true },

      //Auto Repair
      { sellerName: 'AutoZone', sellerUrl: 'http://autozone.com/', isListing: true },
      { sellerName: 'Firestone Auto Care', sellerUrl: 'http://firestone.com/', isListing: true },
      { sellerName: 'Goodyear Auto Service', sellerUrl: 'http://goodyear.com/', isListing: true },
      { sellerName: 'Mr. Transmission', sellerUrl: 'http://mrtransmission.com/', isListing: true },
      { sellerName: 'O\'Reilly Auto Parts', sellerUrl: 'http://oreillyauto.com/', isListing: true },
      { sellerName: 'Walmart Oil and Lube', sellerUrl: 'http://walmart.com/', isListing: true },
      { sellerName: 'Miedecke', sellerUrl: 'http://miedecke.com.au/', isListing: true },
      { sellerName: 'National Tire and Battery', sellerUrl: 'http://ntb.com/', isListing: true },
      { sellerName: 'Onstar', sellerUrl: 'http://onstar.com/', isListing: true },
      { sellerName: 'AAA', sellerUrl: 'http://aaa.com/', isListing: true },
      { sellerName: 'Midas', sellerUrl: 'http://midas.com/', isListing: true },
      { sellerName: 'Big O Tires', sellerUrl: 'http://bigotires.com/', isListing: true },
      { sellerName: 'Safelight', sellerUrl: 'http://safelight.com/', isListing: true },
      { sellerName: 'AutoGlassNow!', sellerUrl: 'http://autoglassnow.com/', isListing: true },

      //Auto Warranties and Protection
      { sellerName: 'CarShield', sellerUrl: 'http://carshield.com/', isListing: true },
      { sellerName: 'Cars Protection Plus', sellerUrl: 'http://carsprotectionplus.com/', isListing: true },
      { sellerName: 'Protect My Car', sellerUrl: 'http://protectmycar.com/', isListing: true },
      { sellerName: 'Olive Auto Center', sellerUrl: 'http://olive.com/', isListing: true },
      { sellerName: 'Select Auto Protect', sellerUrl: 'http://selectautoprotect.com/', isListing: true },
      { sellerName: 'Autopom', sellerUrl: 'http://extended-vehicle-warranty.com/', isListing: true },
      { sellerName: 'Toco', sellerUrl: 'http://tocowarranty.com/', isListing: true },
      { sellerName: 'American First Auto Protect', sellerUrl: 'http://americanfirstautoprotect.com/', isListing: true },
      { sellerName: 'Endurance Auto Warranty', sellerUrl: 'http://endurancewarranty.com/', isListing: true },

      //Babies and Toddlers
      { sellerName: 'Patpat', sellerUrl: 'http://patpat.com/', isListing: true },
      { sellerName: 'Fat Brain Toys', sellerUrl: 'http://fatbraintoys.com/', isListing: true },
      { sellerName: 'Kids Stuff', sellerUrl: 'http://kidsstuff.com/', isListing: true },
      { sellerName: 'Learning Resources', sellerUrl: 'http://learningresources.com/', isListing: true },
      { sellerName: 'Honest', sellerUrl: 'http://honest.com/', isListing: true },
      { sellerName: 'Mori', sellerUrl: 'http://babymori.com/', isListing: true },
      { sellerName: 'Babylist', sellerUrl: 'http://babylist.com/', isListing: true },

      //Baby and Toddler Clothing
      { sellerName: 'Young Days', sellerUrl: 'http://youngdays.com/', isListing: true },
      { sellerName: 'MiniOlie', sellerUrl: 'http://miniolie.com/', isListing: true },
      { sellerName: 'Carter’s', sellerUrl: 'http://carters.com/', isListing: true },
      { sellerName: 'OshKosh', sellerUrl: 'http://oshkosh.com/', isListing: true },
      { sellerName: 'Gerber Childrenswear', sellerUrl: 'http://gerberchildrenswear.com/', isListing: true },
      { sellerName: 'Babylist', sellerUrl: 'http://babylist.com/', isListing: true },
      { sellerName: 'Little Me', sellerUrl: 'http://littleme.com/', isListing: true },
      { sellerName: 'Zulily', sellerUrl: 'http://zulily.com/', isListing: true },

      //Banks
      { sellerName: 'JP Morgan Chase', sellerUrl: 'https://www.chase.com/', isListing: true },
      { sellerName: 'U.S. Bank', sellerUrl: 'http://usbank.com/', isListing: true },
      { sellerName: 'Bank of America', sellerUrl: 'http://bankofamerica.com/', isListing: true },
      { sellerName: 'Wells Fargo', sellerUrl: 'http://wellsfargo.com/', isListing: true },
      { sellerName: 'Citibank/Citigroup', sellerUrl: 'http://citigroup.com/', isListing: true },
      { sellerName: 'Truist Bank', sellerUrl: 'http://truist.com/', isListing: true },
      { sellerName: 'PNC Bank', sellerUrl: 'http://pnc.com/', isListing: true },
      { sellerName: 'TD Bank ', sellerUrl: 'http://td.com/', isListing: true },
      { sellerName: 'Bank of New York Mellon ', sellerUrl: 'http://bnymellon.com/', isListing: true },
      { sellerName: 'Capital One', sellerUrl: 'http://capitalone.com/', isListing: true },
      { sellerName: 'Goldman Sachs Group', sellerUrl: 'http://goldmansachs.com/', isListing: true },
      { sellerName: 'Citizens Bank ', sellerUrl: 'http://citizensbank.com/', isListing: true },
      { sellerName: 'Ally', sellerUrl: 'http://ally.com/', isListing: true },


      //Beauty, Cosmetics and Skincare
      { sellerName: 'Sephora', sellerUrl: 'http://sephora.com/', isListing: true },

    ];



    for (const seller of sellers)
    {
       const existingSeller = await queryRunner.query("SELECT * FROM sellers WHERE sellerName = ?", [seller.sellerName]);
       if (!existingSeller.length)
       {
           await queryRunner.query("INSERT INTO sellers (sellerName, sellerUrl, isListing) VALUES (?, ?, ?)", [seller.sellerName, seller.sellerUrl, seller.isListing]);
       }
    }
 }




  public async down(queryRunner: QueryRunner): Promise<void>
  {
    // Rollback logic (if required) goes here
  }
}

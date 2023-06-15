import { MigrationInterface, QueryRunner } from "typeorm";

export class createInitialSellersSeeder1685179560899 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    // Create sellers
    const sellers = [

      //Airlines
      { sellerName: 'Air Canada', sellerUrl: 'https://aircanada.com',isListing: true, categoryName: 'Airlines'},
      { sellerName: 'Air New Zealand', sellerUrl: 'https://airnewzealand.com',isListing: true, categoryName: 'Airlines'},
      { sellerName: 'British Airways', sellerUrl: 'https://britishairways.com', isListing: true,categoryName: 'Airlines'},
      { sellerName: 'Delta Air Lines', sellerUrl: 'https://delta.com', isListing: true,categoryName: 'Airlines'},
      { sellerName: 'Hawaiian Airlines', sellerUrl: 'https://hawaiinairlines.com', isListing: true,categoryName: 'Airlines'},
      { sellerName: 'Japan Air Lines', sellerUrl: 'https://jai.com', isListing: true,categoryName: 'Airlines'},
      { sellerName: 'JetBlue', sellerUrl: 'https://jetblue.com', isListing: true,categoryName: 'Airlines'},
      { sellerName: 'Lufthansa', sellerUrl: 'https://lufthansa.com', isListing: true,categoryName: 'Airlines'},
      { sellerName: 'Pakistan International Airline ', sellerUrl: 'https://piac.com.pk', isListing: true,categoryName: 'Airlines'},
      { sellerName: 'Singapore Airlines', sellerUrl: 'https://singaporeair.com', isListing: true,categoryName: 'Airlines'},
      { sellerName: 'Southwest Airlines', sellerUrl: 'https://southwest.com', isListing: true,categoryName: 'Airlines'},
      { sellerName: 'Spirit Airlines', sellerUrl: 'https://spirit.com', isListing: true,categoryName: 'Airlines'},
      { sellerName: 'United Airlines', sellerUrl: 'https://united.com', isListing: true,categoryName: 'Airlines'},
      { sellerName: 'Virgin Atlantic', sellerUrl: 'https://virginatlantic.com', isListing: true,categoryName: 'Airlines'},
      { sellerName: 'WestJet', sellerUrl: 'https://westjet.com', isListing: true,categoryName: 'Airlines'},

      //  Accounting and Taxes
      { sellerName: 'QuickBooks', sellerUrl: 'https://quickbooks.intuit.com', isListing: true,categoryName: 'Accounting and Taxes'},
      { sellerName: 'TurboTax', sellerUrl: 'https://turbotax.intuit.com', isListing: true,categoryName: 'Accounting and Taxes'},
      { sellerName: 'Zoho Books', sellerUrl: 'https://zoho.com/us/books', isListing: true,categoryName: 'Accounting and Taxes'},
      { sellerName: 'Fresh Books', sellerUrl: 'https://freshbooks.com', isListing: true,categoryName: 'Accounting and Taxes'},
      { sellerName: 'Sage Accounting', sellerUrl: 'https://sage.com', isListing: true,categoryName: 'Accounting and Taxes'},
      { sellerName: 'Xero', sellerUrl: 'https://Xero.com', isListing: true,categoryName: 'Accounting and Taxes'},
      { sellerName: 'NetSuite', sellerUrl: 'https://netsuite.com', isListing: true,categoryName: 'Accounting and Taxes'},
      { sellerName: 'Wave Accounting', sellerUrl: 'https://waveapps.com', isListing: true,categoryName: 'Accounting and Taxes'},
      { sellerName: 'H&R Block', sellerUrl: 'https://hrblock.com', isListing: true,categoryName: 'Accounting and Taxes'},
      { sellerName: 'TaxSlayer', sellerUrl: 'https://taxslayer.com', isListing: true,categoryName: 'Accounting and Taxes'},
      { sellerName: 'Cash App Taxes', sellerUrl: 'https://cash.app/taxes', isListing: true,categoryName: 'Accounting and Taxes'},
      { sellerName: 'Jackson Hewitt', sellerUrl: 'https://jacksonhewitt.com', isListing: true,categoryName: 'Accounting and Taxes'},

     //Antivirus Software
      { sellerName: 'Bitdefender', sellerUrl: 'https://bitdefender.com', isListing: true,categoryName: 'Antivirus Software'},
      { sellerName: 'Intego', sellerUrl: 'https://intego.com', isListing: true,categoryName: 'Antivirus Software'},
      { sellerName: 'McAfee', sellerUrl: 'https://mcafee.com', isListing: true,categoryName: 'Antivirus Software'},
      { sellerName: 'Norton', sellerUrl: 'https://norton.com', isListing: true,categoryName: 'Antivirus Software'},

      //Apartments and Property Management
      { sellerName: 'Asset Living', sellerUrl: 'https://assetliving.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'AvalonBay Communities', sellerUrl: 'https://avaloncommunities.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'BH Companies', sellerUrl: 'https://livebh.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'Cortland', sellerUrl: 'https://cortland.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'Cushman and Wakefield', sellerUrl: 'https://cushwakeliving.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'Edward Rose', sellerUrl: 'https://edwardrose.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'Equity', sellerUrl: 'https://equityapartments.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'FPI Management', sellerUrl: 'https://fpimgt.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'Greystar', sellerUrl: 'https://greystar.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'Irvine Company ', sellerUrl: 'https://irvinecompany.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'Lincoln Property Company', sellerUrl: 'https://lincolnapts.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'MAA Communities', sellerUrl: 'https://maac.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'Monarch Investment', sellerUrl: 'https://monarchinvestment.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'Morgan Properties', sellerUrl: 'https://morgan-properties.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'Related Rentals', sellerUrl: 'https://relatedrentals.com', isListing: true,categoryName: 'Apartments and Property Management'},
      { sellerName: 'Winn Companies', sellerUrl: 'https://winncompanies.com', isListing: true,categoryName: 'Apartments and Property Management'},

       //Apartment and Housing Rentals
      { sellerName: 'Apartments.com', sellerUrl: 'https://apartments.com', isListing: true,categoryName: 'Apartment and Housing Rentals'},
      { sellerName: 'Zillow', sellerUrl: 'https://zillow.com', isListing: true,categoryName: 'Apartment and Housing Rentals'},
      { sellerName: 'Trulia', sellerUrl: 'https://trulia.com', isListing: true,categoryName: 'Apartment and Housing Rentals'},
      { sellerName: 'Realtor.com', sellerUrl: 'https://realtor.com', isListing: true,categoryName: 'Apartment and Housing Rentals'},
      { sellerName: 'Redfin', sellerUrl: 'https://redfin.com', isListing: true,categoryName: 'Apartment and Housing Rentals'},
      { sellerName: 'Zumper', sellerUrl: 'https://zumper.com', isListing: true,categoryName: 'Apartment and Housing Rentals'},
      { sellerName: 'Rent.com', sellerUrl: 'https://rent.com', isListing: true,categoryName: 'Apartment and Housing Rentals'},

      //Auto Insurance
      { sellerName: 'Progressive', sellerUrl: 'https://progressive.com', isListing: true,categoryName: 'Auto Insurance'},
      { sellerName: 'Mercury Insurance', sellerUrl: 'https://mercuryinsurance.com', isListing: true,categoryName: 'Auto Insurance'},
      { sellerName: 'Allstate', sellerUrl: 'https://allstate.com', isListing: true,categoryName: 'Auto Insurance'},
      { sellerName: 'Erie Insurance', sellerUrl: 'https://erieinsurance.com', isListing: true,categoryName: 'Auto Insurance'},
      { sellerName: 'USAA', sellerUrl: 'https://usaa.com', isListing: true,categoryName: 'Auto Insurance'},
      { sellerName: 'State Farm', sellerUrl: 'https://statefarm.com', isListing: true,categoryName: 'Auto Insurance'},
      { sellerName: 'Travelers', sellerUrl: 'https://travelers.com', isListing: true,categoryName: 'Auto Insurance'},
      { sellerName: 'Geico', sellerUrl: 'https://geico.com', isListing: true,categoryName: 'Auto Insurance'},
      { sellerName: 'Nationwide', sellerUrl: 'https://nationwide.com', isListing: true,categoryName: 'Auto Insurance'},
      { sellerName: 'American Family', sellerUrl: 'https://amfam.com', isListing: true,categoryName: 'Auto Insurance'},
      { sellerName: 'Farmers', sellerUrl: 'https://farmers.com', isListing: true,categoryName: 'Auto Insurance'},
      { sellerName: 'Liberty Mutual', sellerUrl: 'https://libertymutual.com', isListing: true,categoryName: 'Auto Insurance'},
      { sellerName: 'Auto-Owners Insurance', sellerUrl: 'https://auto-owners.com', isListing: true,categoryName: 'Auto Insurance'},

      //Auto Loans and Financing
      { sellerName: 'LightStream', sellerUrl: 'https://lightstream.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Consumers Credit Union', sellerUrl: 'https://myconsumers.org', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'myAutoloan', sellerUrl: 'https://myautoloan.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Bank of America', sellerUrl: 'https://bankofamerica.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'PenFed Credit Union', sellerUrl: 'https://penfed.org', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Carvana', sellerUrl: 'https://carvana.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Lending Tree', sellerUrl: 'https://lendingtree.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Ally', sellerUrl: 'https://ally.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Capital One', sellerUrl: 'https://capitalone.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Alliant', sellerUrl: 'https://alliantcreditunion.org', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'U.S. Bank', sellerUrl: 'https://usbank.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Wells Fargo', sellerUrl: 'https://wellsfargo.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Chase', sellerUrl: 'https://chase.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Toyota', sellerUrl: 'https://toyota.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Ford', sellerUrl: 'https://ford.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Honda', sellerUrl: 'https://americanhondafinance.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'TD Auto', sellerUrl: 'https://tdautofinance.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'Carmax', sellerUrl: 'https://carmax.com', isListing: true,categoryName: 'Auto Loans and Financing'},
      { sellerName: 'PNC', sellerUrl: 'https://pnc.com', isListing: true,categoryName: 'Auto Loans and Financing'},

      //Auto Repair
      { sellerName: 'AutoZone', sellerUrl: 'https://autozone.com', isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'Firestone Auto Care', sellerUrl: 'https://firestone.com', isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'Goodyear Auto Service', sellerUrl: 'https://goodyear.com', isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'Mr. Transmission', sellerUrl: 'https://mrtransmission.com', isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'O\'Reilly Auto Parts', sellerUrl: 'https://oreillyauto.com', isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com' ,isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'Miedecke', sellerUrl: 'https://miedecke.com.au', isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'National Tire and Battery', sellerUrl: 'https://ntb.com', isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'Onstar', sellerUrl: 'https://onstar.com', isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'AAA', sellerUrl: 'https://aaa.com', isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'Midas', sellerUrl: 'https://midas.com', isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'Big O Tires', sellerUrl: 'https://bigotires.com', isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'Safelight', sellerUrl: 'https://safelight.com', isListing: true,categoryName: 'Auto Repair'},
      { sellerName: 'AutoGlassNow!', sellerUrl: 'https://autoglassnow.com', isListing: true,categoryName: 'Auto Repair'},

      //Auto Warranties and Protection
      { sellerName: 'CarShield', sellerUrl: 'https://carshield.com', isListing: true,categoryName: 'Auto Warranties and Protection'},
      { sellerName: 'Cars Protection Plus', sellerUrl: 'https://carsprotectionplus.com', isListing: true,categoryName: 'Auto Warranties and Protection'},
      { sellerName: 'Protect My Car', sellerUrl: 'https://protectmycar.com', isListing: true,categoryName: 'Auto Warranties and Protection'},
      { sellerName: 'Olive Auto Center', sellerUrl: 'https://olive.com', isListing: true,categoryName: 'Auto Warranties and Protection'},
      { sellerName: 'Select Auto Protect', sellerUrl: 'https://selectautoprotect.com', isListing: true,categoryName: 'Auto Warranties and Protection'},
      { sellerName: 'Autopom', sellerUrl: 'https://extended-vehicle-warranty.com', isListing: true,categoryName: 'Auto Warranties and Protection'},
      { sellerName: 'Toco', sellerUrl: 'https://tocowarranty.com', isListing: true,categoryName: 'Auto Warranties and Protection'},
      { sellerName: 'American First Auto Protect', sellerUrl: 'https://americanfirstautoprotect.com', isListing: true,categoryName: 'Auto Warranties and Protection'},
      { sellerName: 'Endurance Auto Warranty', sellerUrl: 'https://endurancewarranty.com', isListing: true,categoryName: 'Auto Warranties and Protection'},

      //Babies and Toddlers
      { sellerName: 'Patpat', sellerUrl: 'https://patpat.com', isListing: true,categoryName: 'Babies and Toddlers'},
      { sellerName: 'Fat Brain Toys', sellerUrl: 'https://fatbraintoys.com', isListing: true,categoryName: 'Babies and Toddlers'},
      { sellerName: 'Kids Stuff', sellerUrl: 'https://kidsstuff.com', isListing: true,categoryName: 'Babies and Toddlers'},
      { sellerName: 'Learning Resources', sellerUrl: 'https://learningresources.com', isListing: true,categoryName: 'Babies and Toddlers'},
      { sellerName: 'Honest', sellerUrl: 'https://honest.com', isListing: true,categoryName: 'Babies and Toddlers'},
      { sellerName: 'Mori', sellerUrl: 'https://babymori.com', isListing: true,categoryName: 'Babies and Toddlers'},
      { sellerName: 'Babylist', sellerUrl: 'https://babylist.com', isListing: true,categoryName: 'Babies and Toddlers'},

      //Baby and Toddler Clothing
      { sellerName: 'Young Days', sellerUrl: 'https://youngdays.com', isListing: true,categoryName: 'Baby and Toddler Clothing'},
      { sellerName: 'MiniOlie', sellerUrl: 'https://miniolie.com', isListing: true,categoryName: 'Baby and Toddler Clothing'},
      { sellerName: 'Carter\'s', sellerUrl: 'https://carters.com', isListing: true,categoryName: 'Baby and Toddler Clothing'},
      { sellerName: 'OshKosh', sellerUrl: 'https://oshkosh.com', isListing: true,categoryName: 'Baby and Toddler Clothing'},
      { sellerName: 'Gerber Childrenswear', sellerUrl: 'https://gerberchildrenswear.com', isListing: true,categoryName: 'Baby and Toddler Clothing'},
      { sellerName: 'Babylist', sellerUrl: 'https://babylist.com', isListing: true,categoryName: 'Baby and Toddler Clothing'},
      { sellerName: 'Little Me', sellerUrl: 'https://littleme.com', isListing: true,categoryName: 'Baby and Toddler Clothing'},
      { sellerName: 'Zulily', sellerUrl: 'https://zulily.com', isListing: true,categoryName: 'Baby and Toddler Clothing'},

      //Banks and Banking
      { sellerName: 'America Express', sellerUrl: 'americanexpress.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'Chase', sellerUrl: 'https://chase.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'U.S. Bank', sellerUrl: 'https://usbank.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'Bank of America', sellerUrl: 'https://bankofamerica.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'Wells Fargo', sellerUrl: 'https://wellsfargo.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'Citibank', sellerUrl: 'https://citi.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'Truist Bank', sellerUrl: 'https://truist.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'PNC', sellerUrl: 'https://pnc.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'TD Bank', sellerUrl: 'https://td.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'Bank of New York Mellon ', sellerUrl: 'https://bnymellon.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'Capital One', sellerUrl: 'https://capitalone.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'Goldman Sachs', sellerUrl: 'https://goldmansachs.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'Citizens Bank', sellerUrl: 'https://citizensbank.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'Ally', sellerUrl: 'https://ally.com', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'First Republic', sellerUrl: 'https://firstrepublic.com ', isListing: true,categoryName: 'Banks and Banking'},
      { sellerName: 'Morgan Stanley', sellerUrl: 'https://morganstanley.com', isListing: true,categoryName: 'Banks and Banking'},


      //Beauty, Cosmetics and Skincare
      { sellerName: 'Sephora', sellerUrl: 'https://sephora.com', isListing: true,categoryName: 'Beauty,Cosmetics and Skincare'},
      { sellerName: 'Ulta', sellerUrl: 'https://ulta.com', isListing: true,categoryName: 'Beauty,Cosmetics and Skincare'},
      { sellerName: 'Urban Decay', sellerUrl: 'https://urbandecay.com', isListing: true,categoryName: 'Beauty,Cosmetics and Skincare'},
      { sellerName: 'Dermstore', sellerUrl: 'https://dermstore.com', isListing: true,categoryName: 'Beauty,Cosmetics and Skincare'},
      { sellerName: 'Mac Cosmetics', sellerUrl: 'https://maccosmetics.com', isListing: true,categoryName: 'Beauty,Cosmetics and Skincare'},
      { sellerName: 'Byrdie', sellerUrl: 'https://byrdie.com', isListing: true,categoryName: 'Beauty,Cosmetics and Skincare'},
      { sellerName: 'Paula’s Choice', sellerUrl: 'https://paulaschoice.com', isListing: true,categoryName: 'Beauty,Cosmetics and Skincare'},
      { sellerName: 'Current Body', sellerUrl: 'https://currentbody.com', isListing: true,categoryName: 'Beauty,Cosmetics and Skincare'},
      { sellerName: 'Look Fantastic', sellerUrl: 'https://lookfantastic.com', isListing: true,categoryName: 'Beauty,Cosmetics and Skincare'},
      { sellerName: 'My NuFACE', sellerUrl: 'https://mynuface.com', isListing: true,categoryName: 'Beauty,Cosmetics and Skincare'},
      { sellerName: 'Beauty Bay', sellerUrl: 'https://beautybay.com', isListing: true,categoryName: 'Beauty,Cosmetics and Skincare'},

      //Bedding and Bath
      { sellerName: 'BrookLinen', sellerUrl: 'https://brooklinen.com', isListing: true,categoryName: 'Bedding and Bath'},
      { sellerName: 'The Bath Outlet', sellerUrl: 'https://thebathoutlet.com', isListing: true,categoryName: 'Bedding and Bath'},
      { sellerName: 'Parachute', sellerUrl: 'https://parachutehome.com', isListing: true,categoryName: 'Bedding and Bath'},
      { sellerName: 'The Company Store', sellerUrl: 'https://thecompanystore.com', isListing: true,categoryName: 'Bedding and Bath'},
      { sellerName: 'Macy’s', sellerUrl: 'https://macys.com', isListing: true,categoryName: 'Bedding and Bath'},
      { sellerName: 'Target', sellerUrl: 'https://target.com', isListing: true,categoryName: 'Bedding and Bath'},
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com', isListing: true,categoryName: 'Bedding and Bath'},
      { sellerName: 'Kohl\'s', sellerUrl: 'https://kohls.com', isListing: true,categoryName: 'Bedding and Bath'},
      { sellerName: 'Crate&Barrel', sellerUrl: 'https://crateandbarrel.com', isListing: true,categoryName: 'Bedding and Bath'},
      { sellerName: 'FL&B', sellerUrl: 'https://flandb.com', isListing: true,categoryName: 'Bedding and Bath'},
      { sellerName: 'Rough Linen', sellerUrl: 'https://roughlinen.com', isListing: true,categoryName: 'Bedding and Bath'},
      { sellerName: 'Fine Linens', sellerUrl: 'https://finelinens.com', isListing: true,categoryName: 'Bedding and Bath'},


      // Supercenter Stores
      { sellerName: 'Costco', sellerUrl: 'https://costco.com', isListing: true,categoryName: 'Supercenter Stores'},
      { sellerName: 'Sam\'s Club', sellerUrl: 'https://samsclub.com', isListing: true,categoryName: 'Supercenter Stores'},
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com', isListing: true,categoryName: 'Supercenter Stores'},
      { sellerName: 'Target', sellerUrl: 'https://target.com', isListing: true,categoryName: 'Supercenter Stores'},
      { sellerName: 'BJs', sellerUrl: 'https://bjs.com', isListing: true,categoryName: 'Supercenter Stores'},
      { sellerName: 'Kmart', sellerUrl: 'https://kmart.com', isListing: true,categoryName: 'Supercenter Stores'},
      { sellerName: 'Amazon', sellerUrl: 'https://amazon.com', isListing: true,categoryName: 'Supercenter Stores'},
      { sellerName: 'Big Lots', sellerUrl: 'https://biglots.com', isListing: true,categoryName: 'Supercenter Stores'},


      // Books
      { sellerName: 'Barnes & Noble', sellerUrl: 'https://barnesandnoble.com', isListing: true,categoryName: 'Books'},
      { sellerName: 'Book Outlet', sellerUrl: 'https://bookoutlet.com', isListing: true,categoryName: 'Books'},
      { sellerName: 'Books-A-Million', sellerUrl: 'https://booksamillion.com', isListing: true,categoryName: 'Books'},
      { sellerName: 'Amazon', sellerUrl: 'https://amazon.com', isListing: true,categoryName: 'Books'},
      { sellerName: 'AbeBooks', sellerUrl: 'https://abebooks.com', isListing: true,categoryName: 'Books'},
      { sellerName: 'KidsBooks', sellerUrl: 'https://kidsbooks.com', isListing: true,categoryName: 'Books'},


      // Brokers
      { sellerName: 'Fidelity Investments', sellerUrl: 'https://fidelity.com', isListing: true,categoryName: 'Brokers'},
      { sellerName: 'TD Ameritrade', sellerUrl: 'https://tdameritrade.com', isListing: true,categoryName: 'Brokers'},
      { sellerName: 'Charles Schwab', sellerUrl: 'https://schwab.com', isListing: true,categoryName: 'Brokers'},
      { sellerName: 'Robinhood', sellerUrl: 'https://robinhood.com', isListing: true,categoryName: 'Brokers'},
      { sellerName: 'E-Trade', sellerUrl: 'https://etrade.com', isListing: true,categoryName: 'Brokers'},
      { sellerName: 'Interactive Brokers', sellerUrl: 'https://interactivebrokers.com', isListing: true,categoryName: 'Brokers'},
      { sellerName: 'Merrill Edge', sellerUrl: 'https://merrilledge.com', isListing: true,categoryName: 'Brokers'},
      { sellerName: 'Ally', sellerUrl: 'https://ally.com', isListing: true,categoryName: 'Brokers'},



      // Cable,Video and TV Streaming
      { sellerName: 'Cox', sellerUrl: 'https://cox.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'DIRECTV', sellerUrl: 'https://directv.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'Dish', sellerUrl: 'https://dish.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'Frontier', sellerUrl: 'https://frontier.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'Sling', sellerUrl: 'https://sling.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'Spectrum', sellerUrl: 'https://spectrum.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'Xfinity', sellerUrl: 'https://xfinity.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'YouTube', sellerUrl: 'https://tv.youtube.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'Amazon', sellerUrl: 'https://amazon.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'Apple TV Plus', sellerUrl: 'https://tv.apple.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'Crunchyroll', sellerUrl: 'https://crunchyroll.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'Disney', sellerUrl: 'https://disneyplus.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'HBO Max', sellerUrl: 'https://hbomax.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'Hulu', sellerUrl: 'https://hulu.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'Netflix', sellerUrl: 'https://netflix.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},
      { sellerName: 'Peacock', sellerUrl: 'https://peacocktv.com', isListing: true,categoryName: 'Cable,Video and TV Streaming'},




      //  Mobile, Wireless, Cell Phone Service
      { sellerName: 'T-Mobile', sellerUrl: 'https://t-mobile.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'Verizon', sellerUrl: 'https://verizon.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'AT&T', sellerUrl: 'https://att.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'Visible', sellerUrl: 'https://visible.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'Mint Mobile', sellerUrl: 'https://mintmobile.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'Metro by T-Mobile', sellerUrl: 'https://metrobyt-mobile.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'Google Fi', sellerUrl: 'https://fi.google.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'Consumer Cellular', sellerUrl: 'https://consumercellular.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'Boost Mobile', sellerUrl: 'https://boostmobile.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'Spectrum', sellerUrl: 'https://spectrum.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'Comcast', sellerUrl: 'https://comcast.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'Republic Wireless', sellerUrl: 'https://republicwireless.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'US Mobile', sellerUrl: 'https://usmobile.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'Xfinity', sellerUrl: 'https://xfinity.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},
      { sellerName: 'Optimum', sellerUrl: 'https://optimum.com', isListing: true,categoryName: 'Mobile, Wireless, Cell Phone Service'},


      // Chocolate
      { sellerName: 'See’s Candies', sellerUrl: 'https://sees.com', isListing: true,categoryName: 'Chocolate'},
      { sellerName: 'Godiva', sellerUrl: 'https://godiva.com', isListing: true,categoryName: 'Chocolate'},
      { sellerName: 'Ghirardelli', sellerUrl: 'https://ghirardelli.com', isListing: true,categoryName: 'Chocolate'},
      { sellerName: 'Lindt', sellerUrl: 'https://lindtusa.com', isListing: true,categoryName: 'Chocolate'},
      { sellerName: 'Hotelchocolat', sellerUrl: 'https://hotelchocolat.com', isListing: true,categoryName: 'Chocolate'},
      { sellerName: 'Vivilicious Chocolates', sellerUrl: 'https://viviliciouschocolates.com', isListing: true,categoryName: 'Chocolate'},

      // Coffee
      { sellerName: 'Starbucks', sellerUrl: 'https://starbucks.com', isListing: true,categoryName: 'Coffee'},
      { sellerName: 'Dunkin', sellerUrl: 'https://dunkin.com', isListing: true,categoryName: 'Coffee'},
      { sellerName: 'Panera Bread', sellerUrl: 'https://panerabread.com', isListing: true,categoryName: 'Coffee'},
      { sellerName: 'Sheetz', sellerUrl: 'https://sheetz.com', isListing: true,categoryName: 'Coffee'},
      { sellerName: 'Caribou Coffee', sellerUrl: 'https://cariboucoffee.com', isListing: true,categoryName: 'Coffee'},
      { sellerName: 'Peet’s Coffee', sellerUrl: 'https://peets.com', isListing: true,categoryName: 'Coffee'},


      // Credit Cards
      { sellerName: 'American Express', sellerUrl: 'https://americanexpress.com', isListing: true,categoryName: 'Credit Cards'},
      { sellerName: 'Bank of America', sellerUrl: 'https://bankofamerica.com', isListing: true,categoryName: 'Credit Cards'},
      { sellerName: 'Barclays', sellerUrl: 'https://barclays.com', isListing: true,categoryName: 'Credit Cards'},
      { sellerName: 'Capital One', sellerUrl: 'https://capitalone.com', isListing: true,categoryName: 'Credit Cards'},
      { sellerName: 'Chase', sellerUrl: 'https://chase.com', isListing: true,categoryName: 'Credit Cards'},
      { sellerName: 'Citibank', sellerUrl: 'https://citi.com', isListing: true,categoryName: 'Credit Cards'},
      { sellerName: 'Discover', sellerUrl: 'https://discover.com', isListing: true,categoryName: 'Credit Cards'},
      { sellerName: 'Navy Federal Credit Union', sellerUrl: 'https://navyfederal.org', isListing: true,categoryName: 'Credit Cards'},
      { sellerName: 'PNC', sellerUrl: 'https://pnc.com', isListing: true,categoryName: 'Credit Cards'},
      { sellerName: 'TD Bank', sellerUrl: 'https://td.com', isListing: true,categoryName: 'Credit Cards'},
      { sellerName: 'U.S. Bank', sellerUrl: 'https://usbank.com', isListing: true,categoryName: 'Credit Cards'},
      { sellerName: 'Wells Fargo', sellerUrl: 'https://wellsfargo.com', isListing: true,categoryName: 'Credit Cards'},


      // Cryptocurrency Exchanges and Wallets
      { sellerName: 'Bitfinex', sellerUrl: 'https://bitfinex.com', isListing: true,categoryName: 'Cryptocurrency Exchanges and Wallets'},
      { sellerName: 'Coinbase', sellerUrl: 'https://coinbase.com', isListing: true,categoryName: 'Cryptocurrency Exchanges and Wallets'},
      { sellerName: 'Kraken', sellerUrl: 'https://kraken.com', isListing: true,categoryName: 'Cryptocurrency Exchanges and Wallets'},
      { sellerName: 'Exodus', sellerUrl: 'https://exodus.com', isListing: true,categoryName: 'Cryptocurrency Exchanges and Wallets'},
      { sellerName: 'Gemini', sellerUrl: 'https://gemini.com', isListing: true,categoryName: 'Cryptocurrency Exchanges and Wallets'},
      { sellerName: 'eToro', sellerUrl: 'https://etoro.com', isListing: true,categoryName: 'Cryptocurrency Exchanges and Wallets'},
      { sellerName: 'Robinhood', sellerUrl: 'https://robinhood.com', isListing: true,categoryName: 'Cryptocurrency Exchanges and Wallets'},


      // Creativity
      { sellerName: 'Figma', sellerUrl: 'https://figma.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Adobe', sellerUrl: 'https://adobe.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Coffitivity', sellerUrl: 'https://coffitivity.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Craftsy', sellerUrl: 'https://craftsy.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'ehow', sellerUrl: 'https://ehow.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Faber-Castell', sellerUrl: 'https://fabercastell.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Skill share', sellerUrl: 'https://skillshare.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Creative Crafts', sellerUrl: 'https://creative-crafts.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Everything Art and Craft', sellerUrl: 'https://everythingartandcraft.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'CreativeLive', sellerUrl: 'https://creativelive.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Musiquest', sellerUrl: 'https://musiquest.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'The Music Place', sellerUrl: 'https://musicplace.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'PointBlank Music School', sellerUrl: 'https://pointblankmusicschool.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Art is Fun', sellerUrl: 'https://art-is-fun.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Envato Tuts+', sellerUrl: 'https://tutsplus.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Drawspace', sellerUrl: 'https://drawspace.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Michaels', sellerUrl: 'https://michaels.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Joann', sellerUrl: 'https://joann.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Hobby Lobby', sellerUrl: 'https://hobbylobby.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Partycity', sellerUrl: 'https://partycity.com', isListing: true,categoryName: 'Creativity'},
      { sellerName: 'Create and Craft', sellerUrl: 'https://createandcraft.com', isListing: true,categoryName: 'Creativity'},


      // Computers, Cell Phones and Electronics
      { sellerName: 'Best Buy', sellerUrl: 'https://bestbuy.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Newegg', sellerUrl: 'https://newegg.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Samsung', sellerUrl: 'https://samsung.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Apple', sellerUrl: 'https://apple.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Micro Center', sellerUrl: 'https://microcenter.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Dell', sellerUrl: 'https://dell.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'LG', sellerUrl: 'https://lg.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'HP', sellerUrl: 'https://hp.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Microsoft', sellerUrl: 'https://microsoft.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Sony', sellerUrl: 'https://sony.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Nvidia', sellerUrl: 'https://nvidia.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Amazon', sellerUrl: 'https://amazon.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'B&H Photo Video', sellerUrl: 'https://bhphotovideo.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'AT&T', sellerUrl: 'https://att.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Gazelle', sellerUrl: 'https://gazelle.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Google Store', sellerUrl: 'https://store.google.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Motorola', sellerUrl: 'https://motorola.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Staples', sellerUrl: 'https://staples.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'T-Mobile', sellerUrl: 'https://t-mobile.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},
      { sellerName: 'Verizon', sellerUrl: 'https://verizon.com', isListing: true,categoryName: 'Computers,Cell Phones and Electronics'},



    // Commuter Rail Systems
      { sellerName: 'Caltrain', sellerUrl: 'https://caltrain.com', isListing: true,categoryName: 'Commuter Rail Systems'},
      { sellerName: 'MetroRail', sellerUrl: 'https://metro.net', isListing: true,categoryName: 'Commuter Rail Systems'},
      { sellerName: 'MARC Train', sellerUrl: 'https://mta.maryland.gov', isListing: true,categoryName: 'Commuter Rail Systems'},
      { sellerName: 'MBTA Commuter Rail', sellerUrl: 'https://mbta.com', isListing: true,categoryName: 'Commuter Rail Systems'},
      { sellerName: 'Metra', sellerUrl: 'https://metra.com', isListing: true,categoryName: 'Commuter Rail Systems'},
      { sellerName: 'Metrolink', sellerUrl: 'https://metrolinktrains.com', isListing: true,categoryName: 'Commuter Rail Systems'},
      { sellerName: 'NJ Transit Rail', sellerUrl: 'https://njtransit.com', isListing: true,categoryName: 'Commuter Rail Systems'},
      { sellerName: 'SEPTA Regional Rail', sellerUrl: 'https://septa.org', isListing: true,categoryName: 'Commuter Rail Systems'},
      { sellerName: 'Sounder Commuter Rail', sellerUrl: 'https://soundtransit.org', isListing: true,categoryName: 'Commuter Rail Systems'},
      { sellerName: 'TexRail', sellerUrl: 'https://ridetrinitymetro.org/texrail', isListing: true,categoryName: 'Commuter Rail Systems'},
      { sellerName: 'Tri-Rail', sellerUrl: 'https://tri-rail.com', isListing: true,categoryName: 'Commuter Rail Systems'},
      { sellerName: 'Trinity Railway', sellerUrl: 'https://trinityrailwayexpress.org', isListing: true,categoryName: 'Commuter Rail Systems'},


      // Dating
      { sellerName: 'Bumble', sellerUrl: 'https://bumble.com', isListing: true,categoryName: 'Dating'},
      { sellerName: 'Eharmony', sellerUrl: 'https://eharmony.com', isListing: true,categoryName: 'Dating'},
      { sellerName: 'Elite Singles', sellerUrl: 'https://elitesingles.com', isListing: true,categoryName: 'Dating'},
      { sellerName: 'Match', sellerUrl: 'https://match.com', isListing: true,categoryName: 'Dating'},
      { sellerName: 'matrimony.com', sellerUrl: 'https://matrimony.com', isListing: true,categoryName: 'Dating'},
      { sellerName: 'OkCupid', sellerUrl: 'https://okcupid.com', isListing: true,categoryName: 'Dating'},
      { sellerName: 'Tinder', sellerUrl: 'https://tinder.com', isListing: true,categoryName: 'Dating'},
      { sellerName: 'Zoosk', sellerUrl: 'https://zoosk.com', isListing: true,categoryName: 'Dating'},


      // Daycare
      { sellerName: 'La Petite Academy', sellerUrl: 'https://lapetite.com', isListing: true,categoryName: 'Daycare'},
      { sellerName: 'Bright Horizons', sellerUrl: 'https://discover.brighthorizons.com', isListing: true,categoryName: 'Daycare'},
      { sellerName: 'Kiddie Academy', sellerUrl: 'https://kiddieacademy.com', isListing: true,categoryName: 'Daycare'},
      { sellerName: 'KinderCare', sellerUrl: 'https://kindercare.com', isListing: true,categoryName: 'Daycare'},
      { sellerName: 'The Goddard School', sellerUrl: 'https://goddardschool.com', isListing: true,categoryName: 'Daycare'},
      { sellerName: 'Childtime', sellerUrl: 'https://childtime.com', isListing: true,categoryName: 'Daycare'},
      { sellerName: 'Sunshine House', sellerUrl: 'https://sunshinehouse.com', isListing: true,categoryName: 'Daycare'},
      { sellerName: 'Primrose Schools', sellerUrl: 'https://primroseschools.com', isListing: true,categoryName: 'Daycare'},
      { sellerName: 'Children’s Courtyard', sellerUrl: 'https://childrenscourtyard.com', isListing: true,categoryName: 'Daycare'},


      // Department Stores
      { sellerName: 'Bloomingdale’s', sellerUrl: 'https://bloomingdales.com', isListing: true,categoryName: 'Department Stores'},
      { sellerName: 'Bergdorf Goodman', sellerUrl: 'https://bergdorfgoodman.com', isListing: true,categoryName: 'Department Stores'},
      { sellerName: 'Dillard’s', sellerUrl: 'https://dillards.com', isListing: true,categoryName: 'Department Stores'},
      { sellerName: 'Lord & Taylor', sellerUrl: 'https://lordandtaylor.com', isListing: true,categoryName: 'Department Stores'},
      { sellerName: 'Macy’s', sellerUrl: 'https://macys.com', isListing: true,categoryName: 'Department Stores'},
      { sellerName: 'Neiman Marcus', sellerUrl: 'https://neimanmarcus.com', isListing: true,categoryName: 'Department Stores'},
      { sellerName: 'Nordstrom', sellerUrl: 'https://nordstrom.com', isListing: true,categoryName: 'Department Stores'},
      { sellerName: 'Saks Fifth Avenue', sellerUrl: 'https://saksfifthavenue.com', isListing: true,categoryName: 'Department Stores'},
      { sellerName: 'Belk', sellerUrl: 'https://belk.com', isListing: true,categoryName: 'Department Stores'},
      { sellerName: 'Von Maur', sellerUrl: 'https://vonmaur.com', isListing: true,categoryName: 'Department Stores'},

    //   Dental Insurance
      { sellerName: 'Nationwide', sellerUrl: 'https://dentalinsurance.com', isListing: true,categoryName: 'Dental Insurance'},
      { sellerName: 'Delta Dental', sellerUrl: 'https://deltadental.com', isListing: true,categoryName: 'Dental Insurance'},
      { sellerName: 'Cigna', sellerUrl: 'https://cigna.com', isListing: true,categoryName: 'Dental Insurance'},
      { sellerName: 'Aetna', sellerUrl: 'https://aetna.com', isListing: true,categoryName: 'Dental Insurance'},
      { sellerName: 'Aflac', sellerUrl: 'https://aflac.com', isListing: true,categoryName: 'Dental Insurance'},
      { sellerName: 'MetLife', sellerUrl: 'https://metlife.com', isListing: true,categoryName: 'Dental Insurance'},


    //   Discount Department Stores
      { sellerName: 'J.C. Penney', sellerUrl: 'https://jcp.com', isListing: true,categoryName: 'Discount Department Stores'},
      { sellerName: 'Kohl\'s', sellerUrl: 'https://kohls.com', isListing: true,categoryName: 'Discount Department Stores'},
      { sellerName: 'Montgomery Ward', sellerUrl: 'https://wards.com', isListing: true,categoryName: 'Discount Department Stores'},
      { sellerName: 'Ross Stores', sellerUrl: 'https://rossstores.com', isListing: true,categoryName: 'Discount Department Stores'},
      { sellerName: 'Sears', sellerUrl: 'https://sears.com', isListing: true,categoryName: 'Discount Department Stores'},
      { sellerName: 'Kmart', sellerUrl: 'https://kmart.com', isListing: true,categoryName: 'Discount Department Stores'},
      { sellerName: 'TJX Maxx', sellerUrl: 'https://tjmaxx.tjx.com', isListing: true,categoryName: 'Discount Department Stores'},
      { sellerName: 'Marshalls', sellerUrl: 'https://marshalls.com', isListing: true,categoryName: 'Discount Department Stores'},
      { sellerName: 'Stein Mart', sellerUrl: 'https://steinmart.com', isListing: true,categoryName: 'Discount Department Stores'},
      { sellerName: 'Nordstrom Rack', sellerUrl: 'https://nordstromrack.com', isListing: true,categoryName: 'Discount Department Stores'},
      { sellerName: 'Bealls', sellerUrl: 'https://beallsflorida.com', isListing: true,categoryName: 'Discount Department Stores'},

      //   Discount Stores
      { sellerName: 'Big Lots', sellerUrl: 'https://biglots.com' , isListing: true,categoryName: 'Discount Stores'},
      { sellerName: 'Dollar General', sellerUrl: 'https://dollargeneral.com', isListing: true,categoryName: 'Discount Stores'  },
      { sellerName: 'Dollar Tree', sellerUrl: 'https://dollartree.com', isListing: true ,categoryName: 'Discount Stores' },
      { sellerName: 'Family Dollar', sellerUrl: 'https://familydollar.com', isListing: true,categoryName: 'Discount Stores'  },
      { sellerName: 'Homegoods', sellerUrl: 'https://homegoods.com', isListing: true ,categoryName: 'Discount Stores' },
      { sellerName: 'Costco', sellerUrl: 'https://costco.com', isListing: true,categoryName: 'Discount Stores'  },
      { sellerName: 'Target', sellerUrl: 'https://target.com', isListing: true ,categoryName: 'Discount Stores' },
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com', isListing: true,categoryName: 'Discount Stores'  },
      { sellerName: 'Five Below', sellerUrl: 'https://fivebelow.com', isListing: true,categoryName: 'Discount Stores'  },
      { sellerName: 'Sam\'s Club', sellerUrl: 'https://samsclub.com' , isListing: true,categoryName: 'Discount Stores'},


     //   Fashion Women
      { sellerName: 'Free People', sellerUrl: 'https://freepeople.com', isListing: true,categoryName:'Fashion Women'},
      { sellerName: 'Made Trade', sellerUrl: 'https://madetrade.com', isListing: true,categoryName:'Fashion Women'  },
      { sellerName: 'Wolf and Badger', sellerUrl: 'https://wolfandbadger.com' , isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'Cettire', sellerUrl: 'https://cettire.com', isListing: true ,categoryName:'Fashion Women' },
      { sellerName: 'Urban Outfitters', sellerUrl: 'https://urbanoutfitters.com', isListing: true ,categoryName:'Fashion Women' },
      { sellerName: 'Anthropologie', sellerUrl: 'https://anthropologie.com' , isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'Italist', sellerUrl: 'https://italist.com' , isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'Abercrombie and Fitch', sellerUrl: 'https://abercrombie.com',isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'H & M', sellerUrl: 'https://hm.com', isListing: true,categoryName:'Fashion Women'  },
      { sellerName: 'J Crew', sellerUrl: 'https://jcrew.com' , isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'Zappos', sellerUrl: 'https://zappos.com', isListing: true ,categoryName: 'Fashion Women' },
      { sellerName: 'Forever 21', sellerUrl: 'https://forever21.com' , isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'Lane Bryant', sellerUrl: 'https://lanebryant.com' , isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'American Eagle', sellerUrl: 'https://ae.com', isListing: true ,categoryName: 'Fashion Women' },
      { sellerName: 'Gap', sellerUrl: 'https://gap.com', isListing: true,categoryName: 'Fashion Women'  },
      { sellerName: 'Express', sellerUrl: 'https://express.com' , isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'Shopbop', sellerUrl: 'https://shopbop.com', isListing: true ,categoryName: 'Fashion Women' },
      { sellerName: 'Poshmark', sellerUrl: 'https://poshmark.com', isListing: true,categoryName: 'Fashion Women'  },
      { sellerName: 'Mercari', sellerUrl: 'https://mercari.com' , isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'Arket', sellerUrl: 'https://arket.com' , isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'Buck Mason', sellerUrl: 'https://buckmason.com', isListing: true ,categoryName: 'Fashion Women' },
      { sellerName: 'DSTLD', sellerUrl: 'https://dstld.com', isListing: true,categoryName: 'Fashion Women'  },
      { sellerName: 'Lucky Brand', sellerUrl: 'https://luckybrand.com', isListing: true ,categoryName: 'Fashion Women' },
      { sellerName: 'The Real Real', sellerUrl: 'https://therealreal.com' , isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'Suitsupply', sellerUrl: 'https://suitsupply.com', isListing: true ,categoryName: 'Fashion Women' },
      { sellerName: 'Rails', sellerUrl: 'https://railsclothing.com', isListing: true ,categoryName: 'Fashion Women' },
      { sellerName: 'GOAT', sellerUrl: 'https://goat.com', isListing: true ,categoryName: 'Fashion Women' },
      { sellerName: 'Zulily', sellerUrl: 'https://zulily.com' , isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'Banana Republic', sellerUrl: 'https://bananarepublic.gap.com', isListing: true  ,categoryName: 'Fashion Women'},
      { sellerName: 'Victoria\'s Secret', sellerUrl: 'https://victoriassecret.com' , isListing: true,categoryName: 'Fashion Women'},
      { sellerName: 'Bare Necessities', sellerUrl: 'https://barenecessities.com', isListing: true,categoryName: 'Fashion Women'  },
      { sellerName: 'Snapdeal', sellerUrl: 'https://snapdeal.com', isListing: true,categoryName: 'Fashion Women'  },


    //   Fashion Men
      { sellerName: 'Wolf and Badger', sellerUrl: 'https://wolfandbadger.com', isListing: true,categoryName: 'Fashion Men'},
      { sellerName: 'Italist', sellerUrl: 'https://italist.com', isListing: true,categoryName: 'Fashion Men'  },
      { sellerName: 'Urban Outfitters', sellerUrl: 'https://urbanoutfitters.com', isListing: true ,categoryName: 'Fashion Men' },
      { sellerName: 'Abercrombie and Fitch', sellerUrl: 'https://abercrombie.com', isListing: true,categoryName: 'Fashion Men'  },
      { sellerName: 'American Eagle', sellerUrl: 'https://ae.com', isListing: true ,categoryName: 'Fashion Men' },
      { sellerName: 'Gap', sellerUrl: 'https://gap.com', isListing: true,categoryName: 'Fashion Men'  },
      { sellerName: 'Express', sellerUrl: 'https://express.com' , isListing: true,categoryName: 'Fashion Men'},
      { sellerName: 'H & M', sellerUrl: 'https://hm.com', isListing: true,categoryName: 'Fashion Men'  },
      { sellerName: 'J Crew', sellerUrl: 'https://jcrew.com', isListing: true ,categoryName: 'Fashion Men' },
      { sellerName: 'Zappos', sellerUrl: 'https://zappos.com', isListing: true,categoryName: 'Fashion Men'  },
      { sellerName: 'Shopbop', sellerUrl: 'https://shopbop.com', isListing: true,categoryName: 'Fashion Men'  },
      { sellerName: 'Poshmark', sellerUrl: 'https://poshmark.com' , isListing: true,categoryName: 'Fashion Men'},
      { sellerName: 'Forever 21', sellerUrl: 'https://forever21.com', isListing: true ,categoryName: 'Fashion Men' },
      { sellerName: 'Mercari', sellerUrl: 'https://mercari.com' , isListing: true,categoryName: 'Fashion Men'},
      { sellerName: 'Arket', sellerUrl: 'https://arket.com' , isListing: true,categoryName: 'Fashion Men'},
      { sellerName: 'Bonobos', sellerUrl: 'https://bonobos.com', isListing: true,categoryName: 'Fashion Men'  },
      { sellerName: 'Buck Mason', sellerUrl: 'https://buckmason.com' , isListing: true,categoryName: 'Fashion Men'},
      { sellerName: 'DSTLD', sellerUrl: 'https://dstld.com' , isListing: true,categoryName: 'Fashion Men'},
      { sellerName: 'Lucky Brand', sellerUrl: 'https://luckybrand.com', isListing: true,categoryName: 'Fashion Men'  },
      { sellerName: 'The Real Real', sellerUrl: 'https://therealreal.com', isListing: true,categoryName: 'Fashion Men'  },
      { sellerName: 'Suitsupply', sellerUrl: 'https://suitsupply.com' , isListing: true,categoryName: 'Fashion Men'},
      { sellerName: 'Snapdeal', sellerUrl: 'https://snapdeal.com', isListing: true  ,categoryName: 'Fashion Men'},
      { sellerName: 'Rails', sellerUrl: 'https://railsclothing.com', isListing: true  ,categoryName: 'Fashion Men'},
      { sellerName: 'GOAT', sellerUrl: 'https://goat.com', isListing: true ,categoryName: 'Fashion Men' },
      { sellerName: 'Zulily', sellerUrl: 'https://zulily.com' , isListing: true,categoryName: 'Fashion Men'},
      { sellerName: 'Men’s Warehouse', sellerUrl: 'https://menswearhouse.com', isListing: true ,categoryName: 'Fashion Men' },
      { sellerName: 'Banana Republic', sellerUrl: 'https://bananarepublic.gap.com' , isListing: true,categoryName: 'Fashion Men'},
      { sellerName: 'Ash and Erie', sellerUrl: 'https://ashanderie.com', isListing: true,categoryName: 'Fashion Men'  },
      { sellerName: 'UNTUCKit', sellerUrl: 'https://untuckit.com', isListing: true ,categoryName: 'Fashion Men' },


    //   Fast Food
      { sellerName: 'McDonald’s', sellerUrl: 'https://mcdonalds.com', isListing: true,categoryName: 'Fast Food'},
      { sellerName: 'Subway', sellerUrl: 'https://subway.com', isListing: true,categoryName: 'Fast Food'},
      { sellerName: 'Taco Bell', sellerUrl: 'https://tacobell.com', isListing: true,categoryName: 'Fast Food'},
      { sellerName: 'Wendy’s', sellerUrl: 'https://wendys.com', isListing: true,categoryName: 'Fast Food'},
      { sellerName: 'Burger King', sellerUrl: 'https://burgerking.com', isListing: true,categoryName: 'Fast Food'},
      { sellerName: 'Chick-Fil-A', sellerUrl: 'https://chick-fil-a.com', isListing: true,categoryName: 'Fast Food'},


    //   Financial Investment, Money Management
      { sellerName: 'American Funds', sellerUrl: 'https://capitalgroup.com', isListing: true,categoryName: 'Financial Investment, Money Management'},
      { sellerName: 'Black Rock', sellerUrl: 'https://blackrock.com', isListing: true,categoryName: 'Financial Investment, Money Management'},
      { sellerName: 'Charles Schwab', sellerUrl: 'https://schwab.com', isListing: true,categoryName: 'Financial Investment, Money Management'},
      { sellerName: 'Edward Jones', sellerUrl: 'https://edwardjones.com', isListing: true,categoryName: 'Financial Investment, Money Management'},
      { sellerName: 'Fidelity Investments', sellerUrl: 'https://fidelity.com', isListing: true,categoryName: 'Financial Investment, Money Management'},
      { sellerName: 'Goldman Sachs', sellerUrl: 'https://goldmansachs.com', isListing: true,categoryName: 'Financial Investment, Money Management'},
      { sellerName: 'Chase', sellerUrl: 'https://chase.com', isListing: true,categoryName: 'Financial Investment, Money Management'},
      { sellerName: 'Morgan Stanley', sellerUrl: 'https://morganstanley.com', isListing: true,categoryName: 'Financial Investment, Money Management'},
      { sellerName: 'T.Rowe Price', sellerUrl: 'https://troweprice.com', isListing: true,categoryName: 'Financial Investment, Money Management'},
      { sellerName: 'Vanguard Brokerage', sellerUrl: 'https://vanguard.com', isListing: true,categoryName: 'Financial Investment, Money Management'},


    //   Flowers
      { sellerName: 'UrbanStems', sellerUrl: 'https://urbanstems.com', isListing: true,categoryName: 'Flowers'},
      { sellerName: 'Venus Et Fluer', sellerUrl: 'https://venusetfleur.com', isListing: true,categoryName: 'Flowers'},
      { sellerName: 'Teleflora', sellerUrl: 'https://teleflora.com', isListing: true,categoryName: 'Flowers'},
      { sellerName: 'Bouqs', sellerUrl: 'https://bouqs.com', isListing: true,categoryName: 'Flowers'},
      { sellerName: '1800Flowers', sellerUrl: 'https://1800flowers.com', isListing: true,categoryName: 'Flowers'},
      { sellerName: 'FTD', sellerUrl: 'https://ftd.com', isListing: true,categoryName: 'Flowers'},
      { sellerName: 'Fromyouflowers.com', sellerUrl: 'https://fromyouflowers.com', isListing: true,categoryName: 'Flowers'},



    //   Food and Grocery Delivery
      { sellerName: 'Doordash', sellerUrl: 'https://doordash.com', isListing: true,categoryName: 'Food and Grocery Delivery'},
      { sellerName: 'Grubhub', sellerUrl: 'https://grubhub.com', isListing: true,categoryName: 'Food and Grocery Delivery'},
      { sellerName: 'Ubereats', sellerUrl: 'https://ubereats.com', isListing: true,categoryName: 'Food and Grocery Delivery'},
      { sellerName: 'Seamless', sellerUrl: 'https://seamless.com', isListing: true,categoryName: 'Food and Grocery Delivery'},
      { sellerName: 'Instacart', sellerUrl: 'https://instacart.com', isListing: true,categoryName: 'Food and Grocery Delivery'},
      { sellerName: 'Amazon', sellerUrl: 'https://amazon.com', isListing: true,categoryName: 'Food and Grocery Delivery'},
      { sellerName: 'Fresh Direct', sellerUrl: 'https://freshdirect.com', isListing: true,categoryName: 'Food and Grocery Delivery'},
      { sellerName: 'Safeway', sellerUrl: 'https://safeway.com', isListing: true,categoryName: 'Food and Grocery Delivery'},
      { sellerName: 'Yelp', sellerUrl: 'https://yelp.com', isListing: true,categoryName: 'Food and Grocery Delivery'},

    //   Freelance Marketplaces
      { sellerName: '99Designs', sellerUrl: 'https://99designs.com', isListing: true,categoryName: 'Freelance Marketplaces'},
      { sellerName: 'Behance', sellerUrl: 'https://behance.net', isListing: true,categoryName: 'Freelance Marketplaces'},
      { sellerName: 'Fiverr', sellerUrl: 'https://fiverr.com', isListing: true,categoryName: 'Freelance Marketplaces'},
      { sellerName: 'Flex Jobs', sellerUrl: 'https://flexjobs.com', isListing: true,categoryName: 'Freelance Marketplaces'},
      { sellerName: 'Freelancer', sellerUrl: 'https://freelancer.com', isListing: true,categoryName: 'Freelance Marketplaces'},
      { sellerName: 'Guru', sellerUrl: 'https://guru.com', isListing: true,categoryName: 'Freelance Marketplaces'},
      { sellerName: 'People per Hour', sellerUrl: 'https://peopleperhour.com', isListing: true,categoryName: 'Freelance Marketplaces'},
      { sellerName: 'Task Rabbit', sellerUrl: 'https://taskrabbit.com', isListing: true,categoryName: 'Freelance Marketplaces'},
      { sellerName: 'Toptal', sellerUrl: 'https://toptal.com', isListing: true,categoryName: 'Freelance Marketplaces'},
      { sellerName: 'Upwork', sellerUrl: 'https://upwork.com', isListing: true,categoryName: 'Freelance Marketplaces'},

    //   Gas Stations
      { sellerName: 'Arco', sellerUrl: 'https://arco.com', isListing: true,categoryName: 'Gas Stations'},
      { sellerName: 'BP', sellerUrl: 'https://bp.com', isListing: true,categoryName: 'Gas Stations'},
      { sellerName: 'Chevron', sellerUrl: 'https://chevron.com', isListing: true,categoryName: 'Gas Stations'},
      { sellerName: 'Conoco', sellerUrl: 'https://conoco.com', isListing: true,categoryName: 'Gas Stations'},
      { sellerName: 'Mobil', sellerUrl: 'https://mobil.com', isListing: true,categoryName: 'Gas Stations'},
      { sellerName: 'Exxon', sellerUrl: 'https://exxon.com', isListing: true,categoryName: 'Gas Stations'},
      { sellerName: 'Phillips 66', sellerUrl: 'https://phillips66.com', isListing: true,categoryName: 'Gas Stations'},
      { sellerName: 'Shell', sellerUrl: 'https://shell.com', isListing: true,categoryName: 'Gas Stations'},
      { sellerName: 'Marathon', sellerUrl: 'https://marathon.com', isListing: true,categoryName: 'Gas Stations'},
      { sellerName: 'Sinclair', sellerUrl: 'https://sinclairoil.com', isListing: true,categoryName: 'Gas Stations'},
      { sellerName: '76', sellerUrl: 'https://76.com', isListing: true,categoryName: 'Gas Stations'},


    //   Gifts
      { sellerName: 'Uncommon Goods', sellerUrl: 'https://uncommongoods.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Home Wet Bar', sellerUrl: 'https://homewetbar.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Wrapables', sellerUrl: 'https://wrapables.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Sugarfina', sellerUrl: 'https://sugarfina.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Virgin Experience Gifts', sellerUrl: 'https://virginexperiencegifts.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: '3D Laser Gifts', sellerUrl: 'https://3dlasergifts.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Buy Olympia', sellerUrl: 'https://buyolympia.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Prezzybox', sellerUrl: 'https://prezzybox.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Boarding Pass', sellerUrl: 'https://boardingpassnyc.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Kikkerland', sellerUrl: 'https://kikkerland.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Terrain', sellerUrl: 'https://shopterrain.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Send A Cake', sellerUrl: 'https://sendacake.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Olive and Cocoa', sellerUrl: 'https://oliveandcocoa.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Knack', sellerUrl: 'https://knackshops.com', isListing: true,categoryName: 'Gifts'},
      { sellerName: 'Mindful', sellerUrl: 'https://shopmindfulgifts.com', isListing: true,categoryName: 'Gifts'},


    //   Gyms, Pilates, Yoga, Barre, HIIT and Cycling
      { sellerName: 'Gold’s Gym', sellerUrl: 'https://goldsgym.com', isListing: true,categoryName: 'Gyms,Pilates,Yoga,Barre,HIIT and Cycling'},
      { sellerName: 'Equinox', sellerUrl: 'https://equinox.com', isListing: true,categoryName: 'Gyms,Pilates,Yoga,Barre,HIIT and Cycling'},
      { sellerName: '24 Hour Fitness', sellerUrl: 'https://24hourfitness.com', isListing: true,categoryName: 'Gyms,Pilates,Yoga,Barre,HIIT and Cycling'},
      { sellerName: 'Anytime Fitness', sellerUrl: 'https://anytimefitness.com', isListing: true,categoryName: 'Gyms,Pilates,Yoga,Barre,HIIT and Cycling'},
      { sellerName: 'LA Fitness', sellerUrl: 'https://lafitness.com', isListing: true,categoryName: 'Gyms,Pilates,Yoga,Barre,HIIT and Cycling'},
      { sellerName: 'Orangetheory Fitness', sellerUrl: 'https://orangetheoryfitness.com', isListing: true,categoryName: 'Gyms,Pilates,Yoga,Barre,HIIT and Cycling'},
      { sellerName: 'Pure Barre', sellerUrl: 'https://purebarre.com', isListing: true,categoryName: 'Gyms,Pilates,Yoga,Barre,HIIT and Cycling'},
      { sellerName: 'Core Power Yoga', sellerUrl: 'https://corepoweryoga.com', isListing: true,categoryName: 'Gyms,Pilates,Yoga,Barre,HIIT and Cycling'},
      { sellerName: 'YogaWorks', sellerUrl: 'https://yogaworks.com', isListing: true,categoryName: 'Gyms,Pilates,Yoga,Barre,HIIT and Cycling'},
      { sellerName: 'Club Pilates', sellerUrl: 'https://clubpilates.com', isListing: true,categoryName: 'Gyms,Pilates,Yoga,Barre,HIIT and Cycling'},
      { sellerName: 'Cyclebar', sellerUrl: 'https://cyclebar.com', isListing: true,categoryName: 'Gyms,Pilates,Yoga,Barre,HIIT and Cycling'},



    //   Health Food and Vitamins
      { sellerName: 'Amazon', sellerUrl: 'https://amazon.com', isListing: true,categoryName: 'Health Food and Vitamins'},
      { sellerName: 'Brandless', sellerUrl: 'https://brandless.com', isListing: true,categoryName: 'Health Food and Vitamins'},
      { sellerName: 'Puritan’s Pride', sellerUrl: 'https://puritan.com', isListing: true,categoryName: 'Health Food and Vitamins'},
      { sellerName: 'GNC', sellerUrl: 'https://gnc.com', isListing: true,categoryName: 'Health Food and Vitamins'},
      { sellerName: 'Hungryroot', sellerUrl: 'https://hungryroot.com', isListing: true,categoryName: 'Health Food and Vitamins'},
      { sellerName: 'iHerb', sellerUrl: 'https://iherb.com', isListing: true,categoryName: 'Health Food and Vitamins'},
      { sellerName: 'Kalyx', sellerUrl: 'https://kalyx.com', isListing: true,categoryName: 'Health Food and Vitamins'},
      { sellerName: 'Sprouts', sellerUrl: 'https://sprouts.com', isListing: true,categoryName: 'Health Food and Vitamins'},
      { sellerName: 'Swanson Vitamins', sellerUrl: 'https://swansonvitamins.com', isListing: true,categoryName: 'Health Food and Vitamins'},
      { sellerName: 'Thrive Market', sellerUrl: 'https://thrivemarket.com', isListing: true,categoryName: 'Health Food and Vitamins'},
      { sellerName: 'Vitacost', sellerUrl: 'https://vitacost.com', isListing: true,categoryName: 'Health Food and Vitamins'},
      { sellerName: 'Whole Foods', sellerUrl: 'https://wholefoodsmarket.com', isListing: true,categoryName: 'Health Food and Vitamins'},



    //   Health Insurance
      { sellerName: 'Aetna', sellerUrl: 'https://aetna.com', isListing: true,categoryName: 'Health Insurance'},
      { sellerName: 'Aflac', sellerUrl: 'https://Aflac.com', isListing: true,categoryName: 'Health Insurance'},
      { sellerName: 'Anthem', sellerUrl: 'https://anthem.com', isListing: true,categoryName: 'Health Insurance'},
      { sellerName: 'Centene', sellerUrl: 'https://centene.com', isListing: true,categoryName: 'Health Insurance'},
      { sellerName: 'Cigna', sellerUrl: 'https://cigna.com', isListing: true,categoryName: 'Health Insurance'},
      { sellerName: 'Guidewell', sellerUrl: 'https://guidewell.com', isListing: true,categoryName: 'Health Insurance'},
      { sellerName: 'Humana', sellerUrl: 'https://humana.com', isListing: true,categoryName: 'Health Insurance'},
      { sellerName: 'Kaiser Permanente', sellerUrl: 'https://kaiserpermanente.org', isListing: true,categoryName: 'Health Insurance'},
      { sellerName: 'Molina', sellerUrl: 'https://molinahealthcare.com', isListing: true,categoryName: 'Health Insurance'},
      { sellerName: 'UnitedHealth Group', sellerUrl: 'https://unitedhealthgroup.com', isListing: true,categoryName: 'Health Insurance'},


    //   Home and Mortgage Loans
      { sellerName: 'Bank of America', sellerUrl: 'https://bankofamerica.com',isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'Capital Mortgage', sellerUrl: 'https://capitalmort.com',isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'Chase', sellerUrl: 'https://chase.com', isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'PennyMac', sellerUrl: 'https://pennymac.com',isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'PNC', sellerUrl: 'https://pnc.com',isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'Quicken Loans', sellerUrl: 'https://quickenloans.com' ,isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'Rocket Mortgages', sellerUrl: 'https://rocketmortgage.com' ,isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'U.S. Bank', sellerUrl: 'https://usbank.com',isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'Veterans United', sellerUrl: 'https://veteransunited.com',isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'Wells Fargo', sellerUrl: 'https://wellsfargo.com',isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'Loan Depot', sellerUrl: 'https://loandepot.com',isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'Citizens Bank', sellerUrl: 'https://citizensbank.com',isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'New American Funding', sellerUrl: 'https://newamericanfunding.com' ,isListing:true ,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'Central Bank', sellerUrl: 'https://centralbank.net',isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'Lending Tree', sellerUrl: 'https://lendingtree.com',isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'Fannie Mae', sellerUrl: 'https://fanniemae.com' ,isListing: true,categoryName: 'Home and Mortgage Loans'},
      { sellerName: 'Fairway Independent', sellerUrl: 'https://fairwayindependentmc.com',isListing: true,categoryName: 'Home and Mortgage Loans'},




    //   Home Style and Furniture
      { sellerName: 'Article', sellerUrl: 'https://article.com' ,isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Ashley Furniture', sellerUrl: 'https://ashleyfurniture.com',isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Crate&Barrel', sellerUrl: 'https://crateandbarrel.com',isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Ethan Allen', sellerUrl: 'https://ethanallen.com',isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Ikea', sellerUrl: 'https://ikea.com' ,isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Joybird', sellerUrl: 'https://joybird.com',isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Living Spaces', sellerUrl: 'https://livingspaces.com',isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Macy’s', sellerUrl: 'https://macys.com' ,isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Overstock', sellerUrl: 'https://overstock.com' ,isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Pier One', sellerUrl: 'https://pier1.com',isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Pottery Barn', sellerUrl: 'https://potterybarn.com',isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Room&Board', sellerUrl: 'https://roomandboard.com',isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Restoration Hardware', sellerUrl: 'https://rh.com',isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Target', sellerUrl: 'https://target.com',isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'Wayfair', sellerUrl: 'https://wayfair.com',isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'West Elm', sellerUrl: 'https://westelm.com',isListing: true,categoryName: 'Home Style and Furniture'},
      { sellerName: 'World Market', sellerUrl: 'https://worldmarket.com',isListing: true,categoryName: 'Home Style and Furniture'},




    //   Home, Garden and Plants
      { sellerName: 'Home Depot', sellerUrl: 'https://homedepot.com', isListing: true,categoryName: 'Home,Garden and Plants'},
      { sellerName: "Lowe's", sellerUrl: 'https://lowes.com',isListing: true,categoryName: 'Home,Garden and Plants'},
      { sellerName: 'The Sill', sellerUrl: 'https://thesill.com' ,isListing: true,categoryName: 'Home,Garden and Plants'},
      { sellerName: 'Plants.com', sellerUrl: 'https://plants.com',isListing: true,categoryName: 'Home,Garden and Plants'},
      { sellerName: 'Nature Hills', sellerUrl: 'https://naturehills.com',isListing: true,categoryName: 'Home,Garden and Plants'},


    //   Home Improvement
      { sellerName: 'Home Depot', sellerUrl: 'https://homedepot.com',isListing: true,categoryName: 'Home Improvement'},
      { sellerName: "Lowe's", sellerUrl: 'https://lowes.com' ,isListing: true,categoryName: 'Home Improvement'},
      { sellerName: 'Ace Hardware', sellerUrl: 'https://acehardware.com',isListing: true,categoryName: 'Home Improvement' },
      { sellerName: 'Menards', sellerUrl: 'https://menards.com',isListing: true,categoryName: 'Home Improvement'},
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com' ,isListing: true,categoryName: 'Home Improvement'},
      { sellerName: 'Build with Ferguson', sellerUrl: 'https://build.com',isListing: true,categoryName: 'Home Improvement'},
      { sellerName: 'Harbor Freight', sellerUrl: 'https://harborfreight.com',isListing: true,categoryName: 'Home Improvement'},
      { sellerName: 'Overstock', sellerUrl: 'https://overstock.com' ,isListing: true,categoryName: 'Home Improvement'},
      { sellerName: 'Tractor Supply Co.', sellerUrl: 'https://tractorsupply.com' ,isListing: true,categoryName: 'Home Improvement'},


    //   Home Repair and Handyman
      { sellerName: 'Task Rabbit', sellerUrl: 'https://taskrabbit.com' ,isListing: true,categoryName: 'Home Repair and Handyman'},
      { sellerName: 'Yelp', sellerUrl: 'https://yelp.com' ,isListing: true,categoryName: 'Home Repair and Handyman'},
      { sellerName: 'Thumbtack', sellerUrl: 'https://thumbtack.com',isListing: true,categoryName: 'Home Repair and Handyman'},
      { sellerName: 'Mr. Handyman', sellerUrl: 'https://mrhandyman.com',isListing: true,categoryName: 'Home Repair and Handyman' },
      { sellerName: 'Fixer', sellerUrl: 'https://fixer.com',isListing: true,categoryName: 'Home Repair and Handyman'},
      { sellerName: 'HomeAdvisor', sellerUrl: 'https://homeadvisor.com',isListing: true,categoryName: 'Home Repair and Handyman'},
      { sellerName: 'Angi', sellerUrl: 'https://angi.com',isListing: true,categoryName: 'Home Repair and Handyman'},
      { sellerName: 'AirTasker', sellerUrl: 'https://airtasker.com',isListing: true,categoryName: 'Home Repair and Handyman'},


    //   Home Owner’s Insurance
      { sellerName: 'American Family', sellerUrl: 'https://amfam.com',isListing: true,categoryName: 'Home Owner’s Insurance'},
      { sellerName: 'Amica', sellerUrl: 'https://amica.com',isListing: true,categoryName: 'Home Owner’s Insurance'},
      { sellerName: 'Chubb', sellerUrl: 'https://chubb.com' ,isListing: true,categoryName: 'Home Owner’s Insurance'},
      { sellerName: 'Erie Insurance', sellerUrl: 'https://erieinsurance.com' ,isListing: true,categoryName: 'Home Owner’s Insurance'},
      { sellerName: 'Farmers', sellerUrl: 'https://farmers.com',isListing: true,categoryName: 'Home Owner’s Insurance'},
      { sellerName: 'Liberty Mutual', sellerUrl: 'https://libertymutual.com',isListing: true,categoryName: 'Home Owner’s Insurance'},
      { sellerName: 'Lemonade', sellerUrl: 'https://lemonade.com',isListing: true,categoryName: 'Home Owner’s Insurance'},
      { sellerName: 'Nationwide', sellerUrl: 'https://nationwide.com',isListing: true,categoryName: 'Home Owner’s Insurance'},
      { sellerName: 'Progressive', sellerUrl: 'https://progressive.com',isListing: true,categoryName: 'Home Owner’s Insurance'},
      { sellerName: 'State Farm', sellerUrl: 'https://statefarm.com',isListing: true,categoryName: 'Home Owner’s Insurance'},
      { sellerName: 'Travelers', sellerUrl: 'https://travelers.com',isListing: true,categoryName: 'Home Owner’s Insurance'},
      { sellerName: 'USAA', sellerUrl: 'https://usaa.com' ,isListing: true,categoryName: 'Home Owner’s Insurance'},


    // Home Shopping Networks
      { sellerName: 'Gem Shopping Network', sellerUrl: 'https://gemshopping.com' ,isListing: true,categoryName: 'Home Shopping Networks'},
      { sellerName: 'Home Shopping Network', sellerUrl: 'https://hsn.com' ,isListing: true,categoryName: 'Home Shopping Networks'},
      { sellerName: 'JTV Live', sellerUrl: 'https://jtv.com' ,isListing: true,categoryName: 'Home Shopping Networks'},
      { sellerName: 'Planet Auction TV', sellerUrl: 'https://planet-auction.com',isListing: true,categoryName: 'Home Shopping Networks'},
      { sellerName: 'QVC', sellerUrl: 'https://qvc.com' ,isListing: true,categoryName: 'Home Shopping Networks'},
      { sellerName: 'ShopHQ', sellerUrl: 'https://shophq.com' ,isListing: true,categoryName: 'Home Shopping Networks'},
      { sellerName: 'Talk Shop Live', sellerUrl: 'https://talkshop.live',isListing: true,categoryName: 'Home Shopping Networks'},



    // Hotels, Motels, Lodging
      { sellerName: 'Baymont', sellerUrl: 'https://wyndhamhotels.com',isListing: true,categoryName: 'Hotels, Motels, Lodging'},
      { sellerName: 'Best Western', sellerUrl: 'https://bestwestern.com',isListing: true,categoryName: 'Hotels, Motels, Lodging'},
      { sellerName: 'Choice Hotels', sellerUrl: 'https://choicehotels.com' ,isListing: true,categoryName: 'Hotels, Motels, Lodging'},
      { sellerName: 'Extended Stay America', sellerUrl: 'https://extendedstayamerica.com' ,isListing: true,categoryName: 'Hotels, Motels, Lodging'},
      { sellerName: 'Hilton', sellerUrl: 'https://hilton.com',isListing: true,categoryName: 'Hotels, Motels, Lodging'},
      { sellerName: 'Hyatt Hotels', sellerUrl: 'https://hyatt.com',isListing: true,categoryName: 'Hotels, Motels, Lodging'},
      { sellerName: 'Marriott', sellerUrl: 'https://marriott.com',isListing: true,categoryName: 'Hotels, Motels, Lodging'},
      { sellerName: 'Motel 6', sellerUrl: 'https://motel6.com' ,isListing: true,categoryName: 'Hotels, Motels, Lodging'},
      { sellerName: 'Airbnb', sellerUrl: 'https://airbnb.com',isListing: true,categoryName: 'Hotels, Motels, Lodging'},
      { sellerName: 'Hotels.com', sellerUrl: 'https://hotels.com',isListing: true,categoryName: 'Hotels, Motels, Lodging'},

    // Internet Service Providers (ISPs)
      { sellerName: 'AT&T', sellerUrl: 'https://att.com',isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'Cox', sellerUrl: 'https://cox.com', isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'Earthlink', sellerUrl: 'https://earthlink.net' ,isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'Frontier', sellerUrl: 'https://frontier.com',isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'Mediacom', sellerUrl: 'https://mediacomcable.com',isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'Sparklight', sellerUrl: 'https://sparklight.com',isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'Consolidated Communications', sellerUrl: 'https://consolidated.com' ,isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'TDS Telecom', sellerUrl: 'https://tdstelecom.com' ,isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'Verizon', sellerUrl: 'https://verizon.com', isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'Windstream', sellerUrl: 'https://windstream.com',isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'Xfinity', sellerUrl: 'https://xfinity.com' ,isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'Optimum', sellerUrl: 'https://optimum.com' ,isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'Spectrum', sellerUrl: 'https://spectrum.com' ,isListing: true,categoryName: 'Internet Service Providers (ISPs)'},
      { sellerName: 'Starry', sellerUrl: 'https://starry.com' ,isListing: true,categoryName: 'Internet Service Providers (ISPs)'},

     // Jewelry
      { sellerName: 'Pandora Jewelry', sellerUrl: 'https://pandora.net', isListing: true,categoryName: 'Jewelry'},
      { sellerName: 'Tiffany & Co.', sellerUrl: 'https://tiffany.com', isListing: true,categoryName: 'Jewelry'},
      { sellerName: 'Swarovski', sellerUrl: 'https://swarovski.com', isListing: true,categoryName: 'Jewelry'},
      { sellerName: 'Jared', sellerUrl: 'https://jared.com', isListing: true,categoryName: 'Jewelry'},
      { sellerName: 'Zales', sellerUrl: 'https://zales.com', isListing: true,categoryName: 'Jewelry'},
      { sellerName: 'Kay Jewelers', sellerUrl: 'https://kay.com', isListing: true,categoryName: 'Jewelry'},
      { sellerName: 'Helen Ficalora', sellerUrl: 'https://helenficalora.com', isListing: true,categoryName: 'Jewelry'},
      { sellerName: 'Brilliant Earth', sellerUrl: 'https://brilliantearth.com', isListing: true,categoryName: 'Jewelry'},

    // Kitchen and Cooking
      { sellerName: 'Williams-Sonoma', sellerUrl: 'https://williams-sonoma.com', isListing: true,categoryName: 'Kitchen and Cooking'},
      { sellerName: 'Sur la Table', sellerUrl: 'https://surlatable.com', isListing: true,categoryName: 'Kitchen and Cooking'},
      { sellerName: 'Le Creuset', sellerUrl: 'https://lecreuset.com', isListing: true,categoryName: 'Kitchen and Cooking'},
      { sellerName: 'Cutlery and More', sellerUrl: 'https://cutleryandmore.com', isListing: true,categoryName: 'Kitchen and Cooking'},
      { sellerName: 'All-Clad', sellerUrl: 'https://all-clad.com', isListing: true,categoryName: 'Kitchen and Cooking'},


    // Kids
      { sellerName: 'Pirasta', sellerUrl: 'https://pirastanyc.com', isListing: true,categoryName: 'Kids'},
      { sellerName: "The Children's Place", sellerUrl: 'https://childrensplace.com', isListing: true,categoryName: 'Kids'},
      { sellerName: "Cookie's", sellerUrl: 'https://cookieskids.com', isListing: true,categoryName: 'Kids'},
      { sellerName: 'Fat Brain Toys', sellerUrl: 'https://fatbraintoys.com', isListing: true,categoryName: 'Kids'},
      { sellerName: 'Fun Brain', sellerUrl: 'https://funbrain.com', isListing: true,categoryName: 'Kids'},
      { sellerName: 'Learning Resources', sellerUrl: 'https://learningresources.com', isListing: true,categoryName: 'Kids'},


    // Kid’s Clothing
      { sellerName: 'Hanna Anderson', sellerUrl: 'https://hannaanderson.com', isListing: true,categoryName: 'Kid’s Clothing'},
      { sellerName: "Carter's", sellerUrl: 'https://carters.com', isListing: true,categoryName: 'Kid’s Clothing'},
      { sellerName: 'Gymboree', sellerUrl: 'https://gymboree.com', isListing: true,categoryName: 'Kid’s Clothing'},
      { sellerName: 'OshKosh', sellerUrl: 'https://oshkosh.com', isListing: true,categoryName: 'Kid’s Clothing'},
      { sellerName: 'Maisonette', sellerUrl: 'https://maisonette.com', isListing: true,categoryName: 'Kid’s Clothing'},
      { sellerName: 'Janie and Jack', sellerUrl: 'https://janieandjack.com', isListing: true,categoryName: 'Kid’s Clothing'},


    // Laundry
      { sellerName: 'Laundry Butler', sellerUrl: 'https://laundrybutlerforyou.com', isListing: true,categoryName: 'Laundry'},
      { sellerName: 'Happy Nest', sellerUrl: 'https://happynest.com', isListing: true,categoryName: 'Laundry'},
      { sellerName: 'SudShare', sellerUrl: 'https://sudshare.com', isListing: true,categoryName: 'Laundry'},
      { sellerName: 'Laundry Care', sellerUrl: 'https://laundrycare.biz', isListing: true,categoryName: 'Laundry'},
      { sellerName: 'Rinse', sellerUrl: 'https://rinse.com', isListing: true,categoryName: 'Laundry'},


    // Legal
      { sellerName: 'Avvo', sellerUrl: 'https://avvo.com', isListing: true,categoryName: 'Legal'},
      { sellerName: 'Inc Authority', sellerUrl: 'https://incauthority.com', isListing: true,categoryName: 'Legal'},
      { sellerName: 'Incfile', sellerUrl: 'https://incfile.com', isListing: true,categoryName: 'Legal'},
      { sellerName: 'LegalShield', sellerUrl: 'https://legalshield.com', isListing: true,categoryName: 'Legal'},
      { sellerName: 'LegalZoom', sellerUrl: 'https://legalzoom.com', isListing: true,categoryName: 'Legal'},
      { sellerName: 'Rocket Lawyer', sellerUrl: 'https://rocketlawyer.com', isListing: true,categoryName: 'Legal'},
      { sellerName: 'Swyftfilings', sellerUrl: 'https://swyftfilings.com', isListing: true,categoryName: 'Legal'},
      { sellerName: 'Zen Business', sellerUrl: 'https://zenbusiness.com', isListing: true,categoryName: 'Legal'},
      { sellerName: 'Legal Match', sellerUrl: 'https://legalmatch.com', isListing: true,categoryName: 'Legal'},
      { sellerName: 'JustAnswer', sellerUrl: 'https://justanswer.com', isListing: true,categoryName: 'Legal'},
      { sellerName: 'Country Wide Prepaid Legal Services', sellerUrl: 'https://countrywideppls.com', isListing: true,categoryName: 'Legal'},
      { sellerName: 'Lawyers.com', sellerUrl: 'https://lawyers.com', isListing: true,categoryName: 'Legal'},
      { sellerName: 'Legal Plans', sellerUrl: 'https://legalplans.com', isListing: true,categoryName: 'Legal'},


    // Life Insurance
      { sellerName: 'AIG', sellerUrl: 'https://aig.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'Bestow', sellerUrl: 'https://bestow.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'Guardian Life', sellerUrl: 'https://guardianlife.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'Haven Life', sellerUrl: 'https://havenlife.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'John Hancock', sellerUrl: 'https://johnhancock.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'Lincoln Financial', sellerUrl: 'https://lfg.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'MassMutual', sellerUrl: 'https://massmutual.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'Mutual of Omaha', sellerUrl: 'https://mutualofomaha.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'Nationwide', sellerUrl: 'https://nationwide.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'New York Life', sellerUrl: 'https://newyorklife.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'Northwestern Mutual', sellerUrl: 'https://northwesternmutual.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'Prudential', sellerUrl: 'https://prudential.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'State Farm', sellerUrl: 'https://statefarm.com', isListing: true,categoryName: 'Life Insurance'},
      { sellerName: 'Transamerica', sellerUrl: 'https://transamerica.com', isListing: true,categoryName: 'Life Insurance'},


    // Medical and Urgent Care
      { sellerName: 'Urgent Care', sellerUrl: 'https://urgentcare.com', isListing: true,categoryName: 'Medical and Urgent Care'},
      { sellerName: 'Care Well Urgent Care', sellerUrl: 'https://carewellurgentcare.com', isListing: true,categoryName: 'Medical and Urgent Care'},
      { sellerName: 'ConvenientMD', sellerUrl: 'https://convenientmd.com', isListing: true,categoryName: 'Medical and Urgent Care'},
      { sellerName: 'FastMed', sellerUrl: 'https://fastmed.com', isListing: true,categoryName: 'Medical and Urgent Care'},
      { sellerName: 'Action Urgent Care', sellerUrl: 'https://actionurgentcare.com', isListing: true,categoryName: 'Medical and Urgent Care'},
      { sellerName: 'Total Access Urgent Care', sellerUrl: 'https://totalaccessurgentcare.com', isListing: true,categoryName: 'Medical and Urgent Care'},
      { sellerName: 'Carbon Health', sellerUrl: 'https://carbonhealth.com/urgent-care', isListing: true,categoryName: 'Medical and Urgent Care'},
      { sellerName: 'Centers Urgent Care', sellerUrl: 'https://centersurgentcare.net', isListing: true,categoryName: 'Medical and Urgent Care'},


    // Box Subscriptions
      { sellerName: 'Beachly', sellerUrl: 'https://beach.ly', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'Allure Beauty Box', sellerUrl: 'https://beautybox.allure.com', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'Bespokepost', sellerUrl: 'https://bespokepost.com', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'GQbox', sellerUrl: 'https://gqbox.com', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'Boxy Charm', sellerUrl: 'https://boxycharm.ipsy.com', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'Dollar Shave Club', sellerUrl: 'https://dollarshaveclub.com', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'Ipsy', sellerUrl: 'https://ipsy.com', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'Kidpik', sellerUrl: 'https://kidpik.com', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'KiwiCo', sellerUrl: 'https://kiwico.co', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'Rent the Runway', sellerUrl: 'https://renttherunway.com', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'Stitch Fix', sellerUrl: 'https://stitchfix.com', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'Vinebox', sellerUrl: 'https://getvinebox.com', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'Lovevery', sellerUrl: 'https://lovevery.com', isListing: true,categoryName: 'Box Subscriptions'},
      { sellerName: 'Splendies', sellerUrl: 'https://splendies.com', isListing: true,categoryName: 'Box Subscriptions'},



    // Marketplaces
      { sellerName: 'Amazon', sellerUrl: 'https://amazon.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Bonanza', sellerUrl: 'https://bonanza.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Craigslist', sellerUrl: 'https://craigslist.org', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Ebay', sellerUrl: 'https://ebay.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Etsy', sellerUrl: 'https://etsy.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Houzz', sellerUrl: 'https://houzz.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Jane', sellerUrl: 'https://jane.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Kroger', sellerUrl: 'https://kroger.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Overstock', sellerUrl: 'https://overstock.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Poshmark', sellerUrl: 'https://poshmark.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Mercari', sellerUrl: 'https://mercari.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Ruby Lane', sellerUrl: 'https://rubylane.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Shopgoodwill.com', sellerUrl: 'https://shopgoodwill.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Sileline Swap', sellerUrl: 'https://sidelineswap.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'The Real Real', sellerUrl: 'https://therealreal.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Vestiaire Collective', sellerUrl: 'https://vestiairecollective.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Rakuten', sellerUrl: 'https://rakuten.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Wayfair', sellerUrl: 'https://wayfair.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Wish', sellerUrl: 'https://wish.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Best Buy', sellerUrl: 'https://bestbuy.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Sears', sellerUrl: 'https://sears.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'OfferUp', sellerUrl: 'https://offerup.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Cratejoy', sellerUrl: 'https://cratejoy.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Newegg', sellerUrl: 'https://newegg.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'Target', sellerUrl: 'https://target.com', isListing: true,categoryName: 'Marketplaces'},
      { sellerName: 'StockX', sellerUrl: 'https://stockx.com', isListing: true,categoryName: 'Marketplaces'},


      // Learning
      { sellerName: 'Adobe', sellerUrl: 'https://learning.adobe.com', isListing: true,categoryName: 'Learning'},
      { sellerName: 'Codecademy Shop', sellerUrl: 'https://codecademy.com', isListing: true,categoryName: 'Learning'},
      { sellerName: 'Coursera', sellerUrl: 'https://coursera.org', isListing: true,categoryName: 'Learning'},
      { sellerName: 'Learn smart', sellerUrl: 'https://learnsmartglobal.com', isListing: true,categoryName: 'Learning'},
      { sellerName: 'Plural sight', sellerUrl: 'https://pluralsight.com', isListing: true,categoryName: 'Learning'},
      { sellerName: 'Skill share', sellerUrl: 'https://skillshare.com', isListing: true,categoryName: 'Learning'},
      { sellerName: 'Udacity', sellerUrl: 'https://udacity.com', isListing: true,categoryName: 'Learning'},
      { sellerName: 'Udemy', sellerUrl: 'https://udemy.com', isListing: true,categoryName: 'Learning'},
      { sellerName: 'edX', sellerUrl: 'https://edx.org', isListing: true,categoryName: 'Learning'},
      { sellerName: 'McGraw-Hill Education', sellerUrl: 'https://mheducation.com', isListing: true,categoryName: 'Learning'},
      { sellerName: 'AWS Certification', sellerUrl: 'https://aws.amazon.com', isListing: true,categoryName: 'Learning'},


      // Meal Kit Delivery
      { sellerName: 'Blue Apron', sellerUrl: 'https://blueapron.com', isListing: true,categoryName: 'Meal Kit Delivery'},
      { sellerName: 'Dinnerly', sellerUrl: 'https://dinnerly.com', isListing: true,categoryName: 'Meal Kit Delivery'},
      { sellerName: 'Every Plate', sellerUrl: 'https://everyplate.com', isListing: true,categoryName: 'Meal Kit Delivery'},
      { sellerName: 'Home Chef', sellerUrl: 'https://homechef.com', isListing: true,categoryName: 'Meal Kit Delivery'},
      { sellerName: 'Gobble', sellerUrl: 'https://gobble.com', isListing: true,categoryName: 'Meal Kit Delivery'},
      { sellerName: 'Factor 75', sellerUrl: 'https://factor75.com', isListing: true,categoryName: 'Meal Kit Delivery'},
      { sellerName: 'Green Chef', sellerUrl: 'https://greenchef.com', isListing: true,categoryName: 'Meal Kit Delivery'},
      { sellerName: 'Hello Fresh', sellerUrl: 'https://hellofresh.com', isListing: true,categoryName: 'Meal Kit Delivery'},
      { sellerName: 'Purple Carrot', sellerUrl: 'https://purplecarrot.com', isListing: true,categoryName: 'Meal Kit Delivery'},
      { sellerName: 'Sunbasket', sellerUrl: 'https://sunbasket.com', isListing: true,categoryName: 'Meal Kit Delivery'},


    // Movers and Moving
      { sellerName: 'ABF U-Pack', sellerUrl: 'https://upack.com', isListing: true,categoryName: 'Movers and Moving'},
      { sellerName: 'Allied Van Lines', sellerUrl: 'https://allied.com', isListing: true,categoryName: 'Movers and Moving'},
      { sellerName: 'Atlas Van Lines', sellerUrl: 'https://atlasvanlines.com', isListing: true,categoryName: 'Movers and Moving'},
      { sellerName: 'Fisher North American', sellerUrl: 'https://fisherna.com', isListing: true,categoryName: 'Movers and Moving'},
      { sellerName: 'Horizon Moving', sellerUrl: 'https://horizonmoving.com', isListing: true,categoryName: 'Movers and Moving'},
      { sellerName: 'Mayflower Transit', sellerUrl: 'https://mayflower.com', isListing: true,categoryName: 'Movers and Moving'},
      { sellerName: 'National Van Lines', sellerUrl: 'https://nationalvanlines.com', isListing: true,categoryName: 'Movers and Moving'},
      { sellerName: 'North American Van Lines', sellerUrl: 'https://northamerican.com', isListing: true,categoryName: 'Movers and Moving'},
      { sellerName: 'PODS', sellerUrl: 'https://pods.com', isListing: true,categoryName: 'Movers and Moving'},
      { sellerName: 'Starving Students', sellerUrl: 'https://starvingstudents.com', isListing: true,categoryName: 'Movers and Moving'},
      { sellerName: 'U-Haul', sellerUrl: 'https://uhaul.com', isListing: true,categoryName: 'Movers and Moving'},
      { sellerName: 'United Van Lines', sellerUrl: 'https://unitedvanlines.com', isListing: true,categoryName: 'Movers and Moving'},
      { sellerName: 'Zippy Shell', sellerUrl: 'https://zippyshell.com', isListing: true,categoryName: 'Movers and Moving'},


      // Movie Theaters

      { sellerName: 'AMC Theaters', sellerUrl: 'https://amctheaters.com', isListing: true,categoryName: 'Movie Theaters'},
      { sellerName: 'B&B Theaters', sellerUrl: 'https://bbtheatres.com', isListing: true,categoryName: 'Movie Theaters'},
      { sellerName: 'Cinemark', sellerUrl: 'https://cinemark.com', isListing: true,categoryName: 'Movie Theaters'},
      { sellerName: 'Cineplex Entertainment', sellerUrl: 'https://cineplex.com', isListing: true,categoryName: 'Movie Theaters'},
      { sellerName: 'CMX Cinemas', sellerUrl: 'https://cmxcinemas.com', isListing: true,categoryName: 'Movie Theaters'},
      { sellerName: 'Harkins Theaters', sellerUrl: 'https://harkins.com', isListing: true,categoryName: 'Movie Theaters'},
      { sellerName: 'Malco Theaters', sellerUrl: 'https://malco.com', isListing: true,categoryName: 'Movie Theaters'},
      { sellerName: 'Marcus Theaters', sellerUrl: 'https://marcustheaters.com', isListing: true,categoryName: 'Movie Theaters'},
      { sellerName: 'Regal Cinemas', sellerUrl: 'https://regmovies.com', isListing: true,categoryName: 'Movie Theaters'},


      // Pet Supplies
      { sellerName: 'Chewy\'s', sellerUrl: 'https://chewys.com', isListing: true,categoryName: 'Pet Supplies'},
      { sellerName: 'Earthwise Pet Supply', sellerUrl: 'https://earthwisepet.com', isListing: true,categoryName: 'Pet Supplies'},
      { sellerName: 'PetCo', sellerUrl: 'https://petco.com', isListing: true,categoryName: 'Pet Supplies'},
      { sellerName: 'Petsense', sellerUrl: 'https://petsense.com', isListing: true,categoryName: 'Pet Supplies'},
      { sellerName: 'PetSmart', sellerUrl: 'https://petsmart.com', isListing: true,categoryName: 'Pet Supplies'},
      { sellerName: 'Pet Supplies Plus', sellerUrl: 'https://petsuppliesplus.com', isListing: true,categoryName: 'Pet Supplies'},


      // Pharmacies
      { sellerName: 'Costco', sellerUrl: 'https://costco.com', isListing: true,categoryName: 'Pharmacies'},
      { sellerName: 'CVS Health', sellerUrl: 'https://cvshealth.com', isListing: true,categoryName: 'Pharmacies'},
      { sellerName: 'Kroger', sellerUrl: 'https://kroger.com', isListing: true,categoryName: 'Pharmacies'},
      { sellerName: 'Publix', sellerUrl: 'https://publix.com', isListing: true,categoryName: 'Pharmacies'},
      { sellerName: 'Rite Aid', sellerUrl: 'https://riteaid.com', isListing: true,categoryName: 'Pharmacies'},
      { sellerName: 'Walgreens', sellerUrl: 'https://walgreens.com', isListing: true,categoryName: 'Pharmacies'},
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com', isListing: true,categoryName: 'Pharmacies'},


      // Real Estate
      { sellerName: 'Camden Property Trust', sellerUrl: 'https://camdenliving.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'Century 21', sellerUrl: 'https://century21.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'Coldwell Banker', sellerUrl: 'https://coldwellbanker.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'ERA Real Estate', sellerUrl: 'https://era.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'Better Homes and Gardens Real Estate', sellerUrl: 'https://bhgre.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'Keller Williams Realty, Inc.', sellerUrl: 'https://kw.co', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'Knock Home', sellerUrl: 'https://knock.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'Movoto', sellerUrl: 'https://movoto.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'Offerpad', sellerUrl: 'https://offerpad.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'Opendoor', sellerUrl: 'https://opendoor.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'RE/MAX', sellerUrl: 'https://remax.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'Redfin', sellerUrl: 'https://redfin.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'Sotheby\'s International Realty', sellerUrl: 'https://sothebysrealty.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'Realtor.com', sellerUrl: 'https://realtor.com', isListing: true,categoryName: 'Real Estate'},
      { sellerName: 'Zillow', sellerUrl: 'https://zillow.com', isListing: true,categoryName: 'Real Estate'},

      // Real Estate Agents
      { sellerName: 'Upnest', sellerUrl: 'https://upnest.com', isListing: true,categoryName: 'Real Estate Agents'},
      { sellerName: 'HomeLight', sellerUrl: 'https://homelight.com', isListing: true,categoryName: 'Real Estate Agents'},
      { sellerName: 'Zillow', sellerUrl: 'https://zillow.com', isListing: true,categoryName: 'Real Estate Agents'},
      { sellerName: 'Clever Real Estate', sellerUrl: 'https://listwithclever.com', isListing: true,categoryName: 'Real Estate Agents'},
      { sellerName: 'Homes', sellerUrl: 'https://homes.com', isListing: true,categoryName: 'Real Estate Agents'},
      { sellerName: 'RealEstateAgents.com', sellerUrl: 'https://realestateagents.com', isListing: true,categoryName: 'Real Estate Agents'},
      { sellerName: 'Realtor.com', sellerUrl: 'https://realtor.com', isListing: true,categoryName: 'Real Estate Agents'},


      // Renters Insurance
      { sellerName: 'Allstate', sellerUrl: 'https://allstate.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'American Family', sellerUrl: 'https://amfam.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'Amica', sellerUrl: 'https://amica.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'Assurant', sellerUrl: 'https://assurant.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'Erie Insurance', sellerUrl: 'https://erieinsurance.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'Farmers', sellerUrl: 'https://farmers.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'Homesite', sellerUrl: 'https://go.homesite.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'Lemonade', sellerUrl: 'https://lemonade.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'Liberty Mutual', sellerUrl: 'https://libertymutual.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'MetLife', sellerUrl: 'https://metlife.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'Nationwide', sellerUrl: 'https://nationwide.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'Progressive', sellerUrl: 'https://progressive.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'State Farm', sellerUrl: 'https://statefarm.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'Toggle', sellerUrl: 'https://gettogle.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'Travelers', sellerUrl: 'https://travelers.com', isListing: true,categoryName: 'Renters Insurance'},
      { sellerName: 'USAA', sellerUrl: 'https://usaa.com', isListing: true,categoryName: 'Renters Insurance'},


      // Ride Hail and Car Sharing
      { sellerName: 'Lyft', sellerUrl: 'https://lyft.com', isListing: true,categoryName: 'Ride Hail and Car Sharing'},
      { sellerName: 'Uber', sellerUrl: 'https://uber.com', isListing: true,categoryName: 'Ride Hail and Car Sharing'},
      { sellerName: 'RideGuru', sellerUrl: 'https://ride.guru', isListing: true,categoryName: 'Ride Hail and Car Sharing'},
      { sellerName: 'Zipcar', sellerUrl: 'https://zipcar.com', isListing: true,categoryName: 'Ride Hail and Car Sharing'},
      { sellerName: 'Turo', sellerUrl: 'https://turo.com', isListing: true,categoryName: 'Ride Hail and Car Sharing'},
      { sellerName: 'Getaround', sellerUrl: 'https://getaround.com', isListing: true,categoryName: 'Ride Hail and Car Sharing'},
      { sellerName: 'Flexcar', sellerUrl: 'https://flexcar.com', isListing: true,categoryName: 'Ride Hail and Car Sharing'},



      // Restaurants
      { sellerName: 'TGI Fridays', sellerUrl: 'https://tgifridays.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: "Applebee's", sellerUrl: 'https://applebees.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: 'Olive Garden', sellerUrl: 'https://olivegarden.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: 'Chilis', sellerUrl: 'https://chilis.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: 'Red Lobster', sellerUrl: 'https://redlobster.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: 'Ruby Tuesday', sellerUrl: 'https://rubytuesday.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: "Houlihan's", sellerUrl: 'https://houlihans.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: 'Cheesecake Factory', sellerUrl: 'https://thecheesecakefactory.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: 'Pizza Hut', sellerUrl: 'https://pizzahut.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: 'Longhorn Steakhouse', sellerUrl: 'https://longhornsteakhouse.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: 'Outback Steakhouse', sellerUrl: 'https://outback.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: 'IHOP', sellerUrl: 'https://ihop.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: "Domino's", sellerUrl: 'https://dominospizza.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: 'Panda Express', sellerUrl: 'https://pandaexpress.com', isListing: true,categoryName: 'Restaurants'},
      { sellerName: "Denny's", sellerUrl: 'https://dennys.com', isListing: true,categoryName: 'Restaurants'},

      // Shipping
      { sellerName: 'DHL', sellerUrl: 'https://dhl.com', isListing: true,categoryName: 'Shipping'},
      { sellerName: 'FedEx', sellerUrl: 'https://fedex.com', isListing: true,categoryName: 'Shipping'},
      { sellerName: 'U.S. Postal Service', sellerUrl: 'https://usps.com', isListing: true,categoryName: 'Shipping'},
      { sellerName: 'UPS', sellerUrl: 'https://ups.com', isListing: true,categoryName: 'Shipping'},


      //Outdoor Recreation, Sporting and Camping
      { sellerName: 'REI', sellerUrl: 'https://rei.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},
      { sellerName: 'Backcountry', sellerUrl: 'https://backcountry.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},
      { sellerName: 'The North Face', sellerUrl: 'https://thenorthface.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},
      { sellerName: "Dick's Sporting Goods", sellerUrl: 'https://dickssportinggoods.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},
      { sellerName: 'Summit Hut', sellerUrl: 'https://summithut.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},
      { sellerName: 'Patagonia', sellerUrl: 'https://patagonia.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},
      { sellerName: 'CampSaver', sellerUrl: 'https://campsaver.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},
      { sellerName: 'Salomon', sellerUrl: 'https://salomon.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},
      { sellerName: 'Big 5 Sporting Goods', sellerUrl: 'https://big5sportinggoods.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},
      { sellerName: 'Nike', sellerUrl: 'https://nike.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},
      { sellerName: 'Fanatics', sellerUrl: 'https://fanatics.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},
      { sellerName: 'Champs Sports', sellerUrl: 'https://champssports.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},
      { sellerName: 'Academy Sports', sellerUrl: 'https://academy.com', isListing: true,categoryName: 'Outdoor Recreation,Sporting and Camping'},


      // Shoes
      { sellerName: 'Zappos', sellerUrl: 'https://zappos.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: '6PM', sellerUrl: 'https://6pm.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'Foot Locker', sellerUrl: 'https://footlocker.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'Nordstrom', sellerUrl: 'https://nordstrom.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'Famous Footwear', sellerUrl: 'https://famousfootwear.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'DSW', sellerUrl: 'https://dsw.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'FarFetch', sellerUrl: 'https://farfetch.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'MyTheresa', sellerUrl: 'https://mytheresa.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'Nike', sellerUrl: 'https://nike.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'Steve Madden', sellerUrl: 'https://stevemadden.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'Road Runner Sports', sellerUrl: 'https://roadrunnersports.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'On', sellerUrl: 'https://on-running.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'New Balance', sellerUrl: 'https://newbalance.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'Crocs', sellerUrl: 'https://crocs.com', isListing: true,categoryName: 'Shoes'},
      { sellerName: 'Dansko', sellerUrl: 'https://dansko.com', isListing: true,categoryName: 'Shoes'},


      // Storage
      { sellerName: 'CubeSmart', sellerUrl: 'https://cubesmart.com', isListing: true,categoryName: 'Storage'},
      { sellerName: 'Extra Space Storage', sellerUrl: 'https://extraspace.com', isListing: true,categoryName: 'Storage'},
      { sellerName: 'Life Storage', sellerUrl: 'https://lifestorage.com', isListing: true,categoryName: 'Storage'},
      { sellerName: 'Public Storage', sellerUrl: 'https://publicstorage.com', isListing: true,categoryName: 'Storage'},
      { sellerName: 'Simply Self Storage', sellerUrl: 'https://simplyss.com', isListing: true,categoryName: 'Storage'},
      { sellerName: 'Price Self Storage', sellerUrl: 'https://priceselfstorage.com', isListing: true,categoryName: 'Storage'},


      // Therapy
      { sellerName: 'Better Help', sellerUrl: 'https://betterhelp.com', isListing: true,categoryName: 'Therapy'},
      { sellerName: 'Brightside', sellerUrl: 'https://brightside.com', isListing: true,categoryName: 'Therapy'},
      { sellerName: 'Talkspace', sellerUrl: 'https://try.talkspace.com', isListing: true,categoryName: 'Therapy'},
      { sellerName: 'Calmerry', sellerUrl: 'https://us.calmerry.com', isListing: true,categoryName: 'Therapy'},
      { sellerName: 'Online-Therapy.com', sellerUrl: 'https://online-therapy.com', isListing: true,categoryName: 'Therapy'},
      { sellerName: 'Cerebral', sellerUrl: 'https://cerebral.com', isListing: true,categoryName: 'Therapy'},


      //Ticket Marketplaces
      { sellerName: 'Ticketmaster', sellerUrl: 'https://ticketmaster.com', isListing: true,categoryName: 'Ticket Marketplaces'},
      { sellerName: 'StubHub', sellerUrl: 'https://stubhub.com', isListing: true,categoryName: 'Ticket Marketplaces'},
      { sellerName: 'Live Nation', sellerUrl: 'https://livenation.com', isListing: true,categoryName: 'Ticket Marketplaces'},
      { sellerName: 'Vivid Seats', sellerUrl: 'https://vividseats.com', isListing: true,categoryName: 'Ticket Marketplaces'},
      { sellerName: 'Songkick', sellerUrl: 'https://songkick.com', isListing: true,categoryName: 'Ticket Marketplaces'},
      { sellerName: 'SeatGeek', sellerUrl: 'https://seatgeek.com', isListing: true,categoryName: 'Ticket Marketplaces'},



     //Travel and Booking
      { sellerName: 'Airbnb', sellerUrl: 'https://airbnb.com', isListing: true,categoryName: 'Travel and Booking'},
      { sellerName: 'Booking.com', sellerUrl: 'https://booking.com', isListing: true,categoryName: 'Travel and Booking'},
      { sellerName: 'Expedia', sellerUrl: 'https://expedia.com', isListing: true,categoryName: 'Travel and Booking'},
      { sellerName: 'Kayak', sellerUrl: 'https://kayak.com', isListing: true,categoryName: 'Travel and Booking'},
      { sellerName: 'Skyscanner', sellerUrl: 'https://skyscanner.com', isListing: true,categoryName: 'Travel and Booking'},
      { sellerName: 'TripAdvisor', sellerUrl: 'https://tripadvisor.com', isListing: true,categoryName: 'Travel and Booking'},
      { sellerName: 'Trivago', sellerUrl: 'https://trivago.com', isListing: true,categoryName: 'Travel and Booking'},
      { sellerName: 'SmartFares', sellerUrl: 'https://smartfares.com', isListing: true,categoryName: 'Travel and Booking'},
      { sellerName: 'Hotels.com', sellerUrl: 'https://hotels.com', isListing: true,categoryName: 'Travel and Booking'},
      { sellerName: 'Priceline', sellerUrl: 'https://priceline.com', isListing: true,categoryName: 'Travel and Booking'},
      { sellerName: 'CheapOair', sellerUrl: 'https://cheapoair.com', isListing: true,categoryName: 'Travel and Booking'},
      { sellerName: 'Travelocity', sellerUrl: 'https://travelocity.com', isListing: true,categoryName: 'Travel and Booking'},


     // Music Streaming
      { sellerName: 'Amazon', sellerUrl: 'https://amazon.com', isListing: true,categoryName: 'Music Streaming'},
      { sellerName: 'Apple', sellerUrl: 'https://apple.com', isListing: true,categoryName: 'Music Streaming'},
      { sellerName: 'Deezer', sellerUrl: 'https://deezer.com', isListing: true,categoryName: 'Music Streaming'},
      { sellerName: 'MixCloud', sellerUrl: 'https://mixcloud.com', isListing: true,categoryName: 'Music Streaming'},
      { sellerName: 'Pandora', sellerUrl: 'https://pandora.com', isListing: true,categoryName: 'Music Streaming'},
      { sellerName: 'SoundCloud', sellerUrl: 'https://soundcloud.com', isListing: true,categoryName: 'Music Streaming'},
      { sellerName: 'Spotify', sellerUrl: 'https://spotify.com', isListing: true,categoryName: 'Music Streaming'},
      { sellerName: 'Tidal', sellerUrl: 'https://tidal.com', isListing: true,categoryName: 'Music Streaming'},
      { sellerName: 'YouTube Music', sellerUrl: 'https://music.youtube.com', isListing: true,categoryName: 'Music Streaming'},
      { sellerName: 'Genius', sellerUrl: 'https://genius.com', isListing: true,categoryName: 'Music Streaming'},
      { sellerName: 'last.fm', sellerUrl: 'https://last.fm', isListing: true,categoryName: 'Music Streaming'},
      { sellerName: 'Jango', sellerUrl: 'https://jango.com', isListing: true,categoryName: 'Music Streaming'},
      { sellerName: 'Discogs', sellerUrl: 'https://discogs.com', isListing: true,categoryName: 'Music Streaming'},



      //Vacation Packages
      { sellerName: 'Virgin Voyages', sellerUrl: 'https://virginvoyages.com', isListing: true,categoryName: 'Vacation Packages'},
      { sellerName: 'Brendan', sellerUrl: 'https://brendanvacations.com', isListing: true,categoryName: 'Vacation Packages'},
      { sellerName: 'Sandals', sellerUrl: 'https://sandals.com', isListing: true,categoryName: 'Vacation Packages'},
      { sellerName: 'Travelocity', sellerUrl: 'https://travelocity.com', isListing: true,categoryName: 'Vacation Packages'},
      { sellerName: 'Expedia', sellerUrl: 'https://expedia.comall-inclusive', isListing: true,categoryName: 'Vacation Packages'},
      { sellerName: 'Funjet', sellerUrl: 'https://funjet.com', isListing: true,categoryName: 'Vacation Packages'},




      //Vacation Rentals
      { sellerName: 'Vrbo', sellerUrl: 'https://vrbo.com', isListing: true,categoryName: 'Vacation Rentals'},
      { sellerName: 'Airbnb', sellerUrl: 'https://airbnb.com', isListing: true,categoryName: 'Vacation Rentals'},
      { sellerName: 'HomeToGo', sellerUrl: 'https://hometogo.com', isListing: true,categoryName: 'Vacation Rentals'},
      { sellerName: 'FlipKey', sellerUrl: 'https://flipkey.com', isListing: true,categoryName: 'Vacation Rentals'},
      { sellerName: 'Vacasa', sellerUrl: 'https://vacasa.com', isListing: true,categoryName: 'Vacation Rentals'},



      //Veterinarians, Pet Insurance and Pet Care
      { sellerName: 'BetterVet', sellerUrl: 'https://bettervet.com', isListing: true,categoryName: 'Veterinarians,Pet Insurance and Pet Care'},
      { sellerName: 'Vetster', sellerUrl: 'https://vetster.com', isListing: true,categoryName: 'Veterinarians,Pet Insurance and Pet Care'},
      { sellerName: 'Nationwide', sellerUrl: 'https://petinsurance.com', isListing: true,categoryName: 'Veterinarians,Pet Insurance and Pet Care'},
      { sellerName: 'VCA Hospitals', sellerUrl: 'https://vcahospitals.com', isListing: true,categoryName: 'Veterinarians,Pet Insurance and Pet Care'},
      { sellerName: 'MetLife Pet Insurance', sellerUrl: 'https://metlifepetinsurance.com', isListing: true,categoryName: 'Veterinarians,Pet Insurance and Pet Care'},
      { sellerName: 'Spot Pet Insurance', sellerUrl: 'https://spotpetins.com', isListing: true,categoryName: 'Veterinarians,Pet Insurance and Pet Care'},
      { sellerName: 'The Humane Society', sellerUrl: 'https://humanesociety.org', isListing: true,categoryName: 'Veterinarians,Pet Insurance and Pet Care'},





      //Video Games
      { sellerName: 'Sony', sellerUrl: 'https://playstation.com', isListing: true,categoryName: 'Video Games'},
      { sellerName: 'Microsoft', sellerUrl: 'https://microsoft.com', isListing: true,categoryName: 'Video Games'},
      { sellerName: 'Nintendo', sellerUrl: 'https://nintendo.com', isListing: true,categoryName: 'Video Games'},
      { sellerName: 'Tencent', sellerUrl: 'https://game.qq.com', isListing: true,categoryName: 'Video Games'},
      { sellerName: 'Activision Blizzard', sellerUrl: 'https://activisionblizzard.com', isListing: true,categoryName: 'Video Games'},
      { sellerName: 'Electronic Arts', sellerUrl: 'https://ea.com', isListing: true,categoryName: 'Video Games'},
      { sellerName: 'Epic Games', sellerUrl: 'https://store.epicgames.com', isListing: true,categoryName: 'Video Games'},




       //Wine
      { sellerName: 'Drizly', sellerUrl: 'https://drizly.com', isListing: true,categoryName: 'Wine'},
      { sellerName: 'Naked Wines', sellerUrl: 'https://nakedwines.com', isListing: true,categoryName: 'Wine'},
      { sellerName: 'Totalwine.com', sellerUrl: 'https://totalwine.com', isListing: true,categoryName: 'Wine'},
      { sellerName: 'Wine.com', sellerUrl: 'https://wine.com', isListing: true,categoryName: 'Wine'},
      { sellerName: 'BevMo!', sellerUrl: 'https://bevmo.com', isListing: true,categoryName: 'Wine'},



      //Weddings and Parties
      { sellerName: 'Party Slate', sellerUrl: 'https://partyslate.com', isListing: true,categoryName: 'Weddings and Parties'},
      { sellerName: 'Here Comes the Guide', sellerUrl: 'https://herecomestheguide.com', isListing: true,categoryName: 'Weddings and Parties'},
      { sellerName: 'Wedding Spot', sellerUrl: 'https://wedding-spot.com', isListing: true,categoryName: 'Weddings and Parties'},
      { sellerName: 'Eventective', sellerUrl: 'https://eventective.com', isListing: true,categoryName: 'Weddings and Parties'},
      { sellerName: 'Eventup', sellerUrl: 'https://marketing.eventup.com', isListing: true,categoryName: 'Weddings and Parties'},
      { sellerName: 'Giggster', sellerUrl: 'https://giggster.com', isListing: true, categoryName: 'Weddings and Parties' },
      { sellerName: 'WeddingWire', sellerUrl: 'https://weddingwire.com', isListing: true, categoryName: 'Weddings and Parties' },
      { sellerName: 'Zola', sellerUrl: 'https://zola.com', isListing: true , categoryName: 'Weddings and Parties'},
      { sellerName: 'Carats & Cake', sellerUrl: 'https://caratsandcake.com', isListing: true , categoryName: 'Weddings and Parties'},

    ];

      for (const seller of sellers)
      {
        const existingSeller = await queryRunner.query("SELECT * FROM sellers WHERE sellerName = ?", [seller.sellerName]);
        if (!existingSeller.length)
        {
          await queryRunner.query("INSERT INTO sellers (sellerName, sellerUrl, isListing) VALUES (?, ?, ?)", [seller.sellerName, seller.sellerUrl, seller.isListing]);
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
    }

    public async down(queryRunner: QueryRunner): Promise<void>
    {
      // Rollback logic (if required) goes here
    }
}




import { MigrationInterface, QueryRunner } from "typeorm";

export class createInitialSellersSeeder1685179560899 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void>
  {

    // Create sellers
    const sellers = [

      //Airlines
      { sellerName: 'Air Canada', sellerUrl: 'https://aircanada.com/', isListing: true },
      { sellerName: 'Air New Zealand', sellerUrl: 'https://airnewzealand.com/', isListing: true },
      { sellerName: 'British Airways', sellerUrl: 'https://britishairways.com/', isListing: true },
      { sellerName: 'Delta Air Lines', sellerUrl: 'https://delta.com/', isListing: true },
      { sellerName: 'Hawaiian Airlines', sellerUrl: 'https://hawaiinairlines.com/', isListing: true },
      { sellerName: 'Japan Air Lines', sellerUrl: 'https://jai.com/', isListing: true },
      { sellerName: 'JetBlue', sellerUrl: 'https://jetblue.com/', isListing: true },
      { sellerName: 'Lufthansa', sellerUrl: 'https://lufthansa.com/', isListing: true },
      { sellerName: 'Pakistan International Airline ', sellerUrl: 'https://piac.com.pk/', isListing: true },
      { sellerName: 'Singapore Airlines', sellerUrl: 'https://singaporeair.com/', isListing: true },
      { sellerName: 'Southwest Airlines', sellerUrl: 'https://southwest.com/', isListing: true },
      { sellerName: 'Spirit Airlines', sellerUrl: 'https://spirit.com/', isListing: true },
      { sellerName: 'United Airlines', sellerUrl: 'https://united.com/', isListing: true },
      { sellerName: 'Virgin Atlantic', sellerUrl: 'https://virginatlantic.com/', isListing: true },
      { sellerName: 'WestJet', sellerUrl: 'https://westjet.com/', isListing: true },

      //  Accounting and Taxes
      { sellerName: 'QuickBooks', sellerUrl: 'https://quickbooks.intuit.com/', isListing: true },
      { sellerName: 'TurboTax', sellerUrl: 'https://turbotax.intuit.com/', isListing: true },
      { sellerName: 'Zoho Books', sellerUrl: 'https://zoho.com/us/books', isListing: true },
      { sellerName: 'Fresh Books', sellerUrl: 'https://freshbooks.com/', isListing: true },
      { sellerName: 'Sage Accounting', sellerUrl: 'https://sage.com/', isListing: true },
      { sellerName: 'Xero', sellerUrl: 'https://Xero.com', isListing: true },
      { sellerName: 'NetSuite', sellerUrl: 'https://netsuite.com/', isListing: true },
      { sellerName: 'Wave Accounting', sellerUrl: 'https://waveapps.com/', isListing: true },
      { sellerName: 'H&R Block', sellerUrl: 'https://hrblock.com/', isListing: true },
      { sellerName: 'TaxSlayer', sellerUrl: 'https://taxslayer.com/', isListing: true },
      { sellerName: 'Cash App Taxes', sellerUrl: 'https://cash.app/taxes', isListing: true },
      { sellerName: 'Jackson Hewitt', sellerUrl: 'https://jacksonhewitt.com/', isListing: true },

     //Antivirus Software
      { sellerName: 'Bitdefender', sellerUrl: 'https://bitdefender.com/', isListing: true },
      { sellerName: 'Intego', sellerUrl: 'https://intego.com/', isListing: true },
      { sellerName: 'McAfee', sellerUrl: 'https://mcafee.com/', isListing: true },
      { sellerName: 'Norton', sellerUrl: 'https://norton.com/', isListing: true },

      //Apartments and Property Management
      { sellerName: 'Asset Living', sellerUrl: 'https://assetliving.com/', isListing: true },
      { sellerName: 'AvalonBay Communities', sellerUrl: 'https://avaloncommunities.com/', isListing: true },
      { sellerName: 'BH Companies', sellerUrl: 'https://livebh.com/', isListing: true },
      { sellerName: 'Cortland ', sellerUrl: 'https://cortland.com/', isListing: true },
      { sellerName: 'Cushman and Wakefield', sellerUrl: 'https://cushwakeliving.com/', isListing: true },
      { sellerName: 'Edward Rose', sellerUrl: 'https://edwardrose.com/', isListing: true },
      { sellerName: 'Equity', sellerUrl: 'https://equityapartments.com/', isListing: true },
      { sellerName: 'FPI Management ', sellerUrl: 'https://fpimgt.com/', isListing: true },
      { sellerName: 'Greystar', sellerUrl: 'https://greystar.com/', isListing: true },
      { sellerName: 'Irvine Company ', sellerUrl: 'https://irvinecompany.com/', isListing: true },
      { sellerName: 'Lincoln Property Company', sellerUrl: 'https://lincolnapts.com/', isListing: true },
      { sellerName: 'MAA Communities', sellerUrl: 'https://maac.com/', isListing: true },
      { sellerName: 'Monarch Investment', sellerUrl: 'https://monarchinvestment.com/', isListing: true },
      { sellerName: 'Morgan Properties', sellerUrl: 'https://morgan-properties.com/', isListing: true },
      { sellerName: 'Related Rentals', sellerUrl: 'https://relatedrentals.com/', isListing: true },
      { sellerName: 'Winn Companies', sellerUrl: 'https://winncompanies.com/', isListing: true },

       //Apartment and Housing Rentals
      { sellerName: 'Apartments', sellerUrl: 'https://apartments.com/', isListing: true },
      { sellerName: 'Zillow', sellerUrl: 'https://zillow.com/', isListing: true },
      { sellerName: 'Trulia', sellerUrl: 'https://trulia.com/', isListing: true },
      { sellerName: 'Westside Rentals', sellerUrl: 'https://westsiderentals.com/', isListing: true },
      { sellerName: 'Realtor', sellerUrl: 'https://realtor.com/', isListing: true },
      { sellerName: 'Redfin', sellerUrl: 'https://redfin.com/', isListing: true },
      { sellerName: 'Zumper', sellerUrl: 'https://zumper.com/', isListing: true },
      { sellerName: 'Rent', sellerUrl: 'https://rent.com/', isListing: true },

      //Auto Insurance
      { sellerName: 'Progressive', sellerUrl: 'https://progressive.com/', isListing: true },
      { sellerName: 'Mercury Insurance', sellerUrl: 'https://mercuryinsurance.com/', isListing: true },
      { sellerName: 'Allstate', sellerUrl: 'https://allstate.com/', isListing: true },
      { sellerName: 'Erie Insurance', sellerUrl: 'https://erieinsurance.com/', isListing: true },
      { sellerName: 'USAA', sellerUrl: 'https://usaa.com/', isListing: true },
      { sellerName: 'State Farm', sellerUrl: 'https://statefarm.com/', isListing: true },
      { sellerName: 'Travelers', sellerUrl: 'https://travelers.com/', isListing: true },
      { sellerName: 'Geico', sellerUrl: 'https://geico.com/', isListing: true },
      { sellerName: 'Nationwide', sellerUrl: 'https://nationwide.com/', isListing: true },
      { sellerName: 'American Family', sellerUrl: 'https://amfam.com/', isListing: true },
      { sellerName: 'Farmers', sellerUrl: 'https://farmers.com/', isListing: true },
      { sellerName: 'Liberty Mutual', sellerUrl: 'https://libertymutual.com/', isListing: true },
      { sellerName: 'Auto-Owners Insurance', sellerUrl: 'https://auto-owners.com/', isListing: true },

      //Auto Loans and Financing
      { sellerName: 'LightStream', sellerUrl: 'https://lightstream.com/', isListing: true },
      { sellerName: 'Consumers Credit Union', sellerUrl: 'https://myconsumers.org/', isListing: true },
      { sellerName: 'myAutoloan', sellerUrl: 'https://myautoloan.com/', isListing: true },
      { sellerName: 'Bank of America', sellerUrl: 'https://bankofamerica.com/', isListing: true },
      { sellerName: 'PenFed Credit Union', sellerUrl: 'https://penfed.org/', isListing: true },
      { sellerName: 'Carvana', sellerUrl: 'https://carvana.com/', isListing: true },
      { sellerName: 'Lending Tree', sellerUrl: 'https://lendingtree.com/', isListing: true },
      { sellerName: 'Ally', sellerUrl: 'https://ally.com/', isListing: true },
      { sellerName: 'Capital One', sellerUrl: 'https://capitalone.com/', isListing: true },
      { sellerName: 'Alliant', sellerUrl: 'https://alliantcreditunion.org/', isListing: true },
      { sellerName: 'U.S. Bank', sellerUrl: 'https://usbank.com/', isListing: true },
      { sellerName: 'Wells Fargo', sellerUrl: 'https://wellsfargo.com/', isListing: true },
      { sellerName: 'JP Morgan Chase', sellerUrl: 'https://chase.com/', isListing: true },
      { sellerName: 'Toyota', sellerUrl: 'https://toyota.com/', isListing: true },
      { sellerName: 'Ford', sellerUrl: 'https://ford.com/', isListing: true },
      { sellerName: 'Honda', sellerUrl: 'https://americanhondafinance.com/', isListing: true },
      { sellerName: 'TD Auto', sellerUrl: 'https://tdautofinance.com/', isListing: true },
      { sellerName: 'Carmax', sellerUrl: 'https://carmax.com/', isListing: true },
      { sellerName: 'PNC Bank', sellerUrl: 'https://pnc.com/', isListing: true },

      //Auto Repair
      { sellerName: 'AutoZone', sellerUrl: 'https://autozone.com/', isListing: true },
      { sellerName: 'Firestone Auto Care', sellerUrl: 'https://firestone.com/', isListing: true },
      { sellerName: 'Goodyear Auto Service', sellerUrl: 'https://goodyear.com/', isListing: true },
      { sellerName: 'Mr. Transmission', sellerUrl: 'https://mrtransmission.com/', isListing: true },
      { sellerName: 'O\'Reilly Auto Parts', sellerUrl: 'https://oreillyauto.com/', isListing: true },
      { sellerName: 'Walmart Oil and Lube', sellerUrl: 'https://walmart.com/', isListing: true },
      { sellerName: 'Miedecke', sellerUrl: 'https://miedecke.com.au/', isListing: true },
      { sellerName: 'National Tire and Battery', sellerUrl: 'https://ntb.com/', isListing: true },
      { sellerName: 'Onstar', sellerUrl: 'https://onstar.com/', isListing: true },
      { sellerName: 'AAA', sellerUrl: 'https://aaa.com/', isListing: true },
      { sellerName: 'Midas', sellerUrl: 'https://midas.com/', isListing: true },
      { sellerName: 'Big O Tires', sellerUrl: 'https://bigotires.com/', isListing: true },
      { sellerName: 'Safelight', sellerUrl: 'https://safelight.com/', isListing: true },
      { sellerName: 'AutoGlassNow!', sellerUrl: 'https://autoglassnow.com/', isListing: true },

      //Auto Warranties and Protection
      { sellerName: 'CarShield', sellerUrl: 'https://carshield.com/', isListing: true },
      { sellerName: 'Cars Protection Plus', sellerUrl: 'https://carsprotectionplus.com/', isListing: true },
      { sellerName: 'Protect My Car', sellerUrl: 'https://protectmycar.com/', isListing: true },
      { sellerName: 'Olive Auto Center', sellerUrl: 'https://olive.com/', isListing: true },
      { sellerName: 'Select Auto Protect', sellerUrl: 'https://selectautoprotect.com/', isListing: true },
      { sellerName: 'Autopom', sellerUrl: 'https://extended-vehicle-warranty.com/', isListing: true },
      { sellerName: 'Toco', sellerUrl: 'https://tocowarranty.com/', isListing: true },
      { sellerName: 'American First Auto Protect', sellerUrl: 'https://americanfirstautoprotect.com/', isListing: true },
      { sellerName: 'Endurance Auto Warranty', sellerUrl: 'https://endurancewarranty.com/', isListing: true },

      //Babies and Toddlers
      { sellerName: 'Patpat', sellerUrl: 'https://patpat.com/', isListing: true },
      { sellerName: 'Fat Brain Toys', sellerUrl: 'http:s//fatbraintoys.com/', isListing: true },
      { sellerName: 'Kids Stuff', sellerUrl: 'https://kidsstuff.com/', isListing: true },
      { sellerName: 'Learning Resources', sellerUrl: 'https://learningresources.com/', isListing: true },
      { sellerName: 'Honest', sellerUrl: 'https://honest.com/', isListing: true },
      { sellerName: 'Mori', sellerUrl: 'https://babymori.com/', isListing: true },
      { sellerName: 'Babylist', sellerUrl: 'https://babylist.com/', isListing: true },

      //Baby and Toddler Clothing
      { sellerName: 'Young Days', sellerUrl: 'https://youngdays.com/', isListing: true },
      { sellerName: 'MiniOlie', sellerUrl: 'https://miniolie.com/', isListing: true },
      { sellerName: 'Carter\'s', sellerUrl: 'https://carters.com/', isListing: true },
      { sellerName: 'OshKosh', sellerUrl: 'https://oshkosh.com/', isListing: true },
      { sellerName: 'Gerber Childrenswear', sellerUrl: 'https://gerberchildrenswear.com/', isListing: true },
      { sellerName: 'Babylist', sellerUrl: 'https://babylist.com/', isListing: true },
      { sellerName: 'Little Me', sellerUrl: 'https://littleme.com/', isListing: true },
      { sellerName: 'Zulily', sellerUrl: 'https://zulily.com/', isListing: true },

      //Banks
      { sellerName: 'JP Morgan Chase', sellerUrl: 'https://chase.com/', isListing: true },
      { sellerName: 'U.S. Bank', sellerUrl: 'https://usbank.com/', isListing: true },
      { sellerName: 'Bank of America', sellerUrl: 'https://bankofamerica.com/', isListing: true },
      { sellerName: 'Wells Fargo', sellerUrl: 'https://wellsfargo.com/', isListing: true },
      { sellerName: 'Citibank/Citigroup', sellerUrl: 'https://citigroup.com/', isListing: true },
      { sellerName: 'Truist Bank', sellerUrl: 'https://truist.com/', isListing: true },
      { sellerName: 'PNC Bank', sellerUrl: 'https://pnc.com/', isListing: true },
      { sellerName: 'TD Bank ', sellerUrl: 'https://td.com/', isListing: true },
      { sellerName: 'Bank of New York Mellon ', sellerUrl: 'https://bnymellon.com/', isListing: true },
      { sellerName: 'Capital One', sellerUrl: 'https://capitalone.com/', isListing: true },
      { sellerName: 'Goldman Sachs', sellerUrl: 'https://goldmansachs.com/', isListing: true },
      { sellerName: 'Citizens Bank', sellerUrl: 'https://citizensbank.com/', isListing: true },
      { sellerName: 'Ally', sellerUrl: 'https://ally.com/', isListing: true },


      //Beauty, Cosmetics and Skincare
      { sellerName: 'Sephora', sellerUrl: 'https://sephora.com', isListing: true },
      { sellerName: 'Ulta', sellerUrl: 'https://ulta.com', isListing: true },
      { sellerName: 'Urban Decay', sellerUrl: 'https://urbandecay.com', isListing: true },
      { sellerName: 'Dermstore', sellerUrl: 'https://dermstore.com', isListing: true },
      { sellerName: 'Mac Cosmetics', sellerUrl: 'https://maccosmetics.com', isListing: true },
      { sellerName: 'Byrdie', sellerUrl: 'https://byrdie.com', isListing: true },
      { sellerName: 'Paula’s Choice', sellerUrl: 'https://paulaschoice.com', isListing: true },
      { sellerName: 'Current Body', sellerUrl: 'https://currentbody.com', isListing: true },
      { sellerName: 'Look Fantastic', sellerUrl: 'https://lookfantastic.com', isListing: true },
      { sellerName: 'My NuFACE', sellerUrl: 'https://mynuface.com', isListing: true },
      { sellerName: 'Beauty Bay', sellerUrl: 'https://beautybay.com', isListing: true },

      //Bedding and Bath
      { sellerName: 'BrookLinen', sellerUrl: 'https://brooklinen.com', isListing: true },
      { sellerName: 'The Bath Outlet', sellerUrl: 'https://thebathoutlet.com', isListing: true },
      { sellerName: 'Parachute', sellerUrl: 'https://parachutehome.com', isListing: true },
      { sellerName: 'The Company Store', sellerUrl: 'https://thecompanystore.com', isListing: true },
      { sellerName: 'Macy’s', sellerUrl: 'https://macys.com', isListing: true },
      { sellerName: 'Target', sellerUrl: 'https://target.com', isListing: true },
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com', isListing: true },
      { sellerName: 'Kohl\'s', sellerUrl: 'https://kohls.com', isListing: true },
      { sellerName: 'Crate&Barrel', sellerUrl: 'https://crateandbarrel.com', isListing: true },
      { sellerName: 'FL&B', sellerUrl: 'https://flandb.com', isListing: true },
      { sellerName: 'Rough Linen', sellerUrl: 'https://roughlinen.com', isListing: true },
      { sellerName: 'Fine Linens', sellerUrl: 'https://finelinens.com', isListing: true },


      // Supercenter Stores
      { sellerName: 'Costco', sellerUrl: 'https://costco.com', isListing: true },
      { sellerName: 'Sams Club', sellerUrl: 'https://samsclub.com', isListing: true },
    { sellerName: 'Walmart', sellerUrl: 'https://walmart.com', isListing: true },
    { sellerName: 'Target', sellerUrl: 'https://target.com', isListing: true },
    { sellerName: 'BJs', sellerUrl: 'https://bjs.com', isListing: true },
    { sellerName: 'Kmart', sellerUrl: 'https://kmart.com', isListing: true },
    { sellerName: 'Amazon', sellerUrl: 'https://amazon.com', isListing: true },
    { sellerName: 'Big Lots', sellerUrl: 'https://biglots.com', isListing: true },


      // Books
      { sellerName: 'Barnes & Noble', sellerUrl: 'https://barnesandnoble.com', isListing: true },
      { sellerName: 'Book Outlet', sellerUrl: 'https://bookoutlet.com', isListing: true },
      { sellerName: 'Books-A-Million', sellerUrl: 'https://booksamillion.com', isListing: true },
      { sellerName: 'Amazon', sellerUrl: 'https://amazon.com', isListing: true },
      { sellerName: 'AbeBooks', sellerUrl: 'https://abebooks.com', isListing: true },
      { sellerName: 'KidsBooks', sellerUrl: 'https://kidsbooks.com', isListing: true },


      // Brokers
      { sellerName: 'Fidelity Investments', sellerUrl: 'https://fidelity.com', isListing: true },
      { sellerName: 'TD Ameritrade', sellerUrl: 'https://tdameritrade.com', isListing: true },
      { sellerName: 'Charles Schwab', sellerUrl: 'https://schwab.com', isListing: true },
      { sellerName: 'Robinhood', sellerUrl: 'https://robinhood.com', isListing: true },
      { sellerName: 'E-Trade', sellerUrl: 'https://etrade.com', isListing: true },
      { sellerName: 'Interactive Brokers', sellerUrl: 'https://interactivebrokers.com', isListing: true },
      { sellerName: 'Merrill Edge', sellerUrl: 'https://merrilledge.com', isListing: true },
      { sellerName: 'Ally Invest', sellerUrl: 'https://ally.com', isListing: true },




    // Cable, Video and TV Streaming
      { sellerName: 'Cox', sellerUrl: 'https://cox.com', isListing: true },
      { sellerName: 'DIRECTV', sellerUrl: 'https://directv.com', isListing: true },
      { sellerName: 'Dish', sellerUrl: 'https://dish.com', isListing: true },
      { sellerName: 'Fios', sellerUrl: 'https://frontier.com', isListing: true },
      { sellerName: 'Sling', sellerUrl: 'https://sling.com', isListing: true },
      { sellerName: 'Spectrum', sellerUrl: 'https://spectrum.com', isListing: true },
      { sellerName: 'Xfinity', sellerUrl: 'https://xfinity.com', isListing: true },
      { sellerName: 'YouTube', sellerUrl: 'https://tv.youtube.com', isListing: true },
      { sellerName: 'Amazon', sellerUrl: 'https://amazon.com', isListing: true },
      { sellerName: 'Apple TV Plus', sellerUrl: 'https://tv.apple.com', isListing: true },
      { sellerName: 'Crunchyroll', sellerUrl: 'https://crunchyroll.com', isListing: true },
      { sellerName: 'Disney', sellerUrl: 'https://disneyplus.com', isListing: true },
      { sellerName: 'HBO Max', sellerUrl: 'https://hbomax.com', isListing: true },
      { sellerName: 'Hulu', sellerUrl: 'https://hulu.com', isListing: true },
      { sellerName: 'Netflix', sellerUrl: 'https://netflix.com', isListing: true },
      { sellerName: 'Peacock', sellerUrl: 'https://peacocktv.com', isListing: true },




    // Wireless
      { sellerName: 'T-Mobile', sellerUrl: 'https://t-mobile.com', isListing: true },
      { sellerName: 'Verizon', sellerUrl: 'https://verizon.com', isListing: true },
      { sellerName: 'AT&T', sellerUrl: 'https://att.com', isListing: true },
      { sellerName: 'Visible', sellerUrl: 'https://visible.com', isListing: true },
      { sellerName: 'Mint Mobile', sellerUrl: 'https://mintmobile.com', isListing: true },
      { sellerName: 'Metro by T-Mobile', sellerUrl: 'https://metrobyt-mobile.com', isListing: true },
      { sellerName: 'Google Fi', sellerUrl: 'https://fi.google.com', isListing: true },
      { sellerName: 'Consumer Cellular', sellerUrl: 'https://consumercellular.com', isListing: true },
      { sellerName: 'Boost Mobile', sellerUrl: 'https://boostmobile.com', isListing: true },
      { sellerName: 'Spectrum', sellerUrl: 'https://spectrum.com', isListing: true },
      { sellerName: 'Comcast', sellerUrl: 'https://comcast.com', isListing: true },
      { sellerName: 'Republic Wireless', sellerUrl: 'https://republicwireless.com', isListing: true },
      { sellerName: 'US Mobile', sellerUrl: 'https://usmobile.com', isListing: true },
      { sellerName: 'Xfinity', sellerUrl: 'https://xfinity.com', isListing: true },
      { sellerName: 'Optimum', sellerUrl: 'https://optimum.com', isListing: true },


      // Chocolate
      { sellerName: 'See’s Candies', sellerUrl: 'https://sees.com', isListing: true },
      { sellerName: 'Godiva', sellerUrl: 'https://godiva.com', isListing: true },
      { sellerName: 'Ghirardelli', sellerUrl: 'https://ghirardelli.com', isListing: true },
      { sellerName: 'Lindt', sellerUrl: 'https://lindtusa.com', isListing: true },
      { sellerName: 'Hotelchocolat', sellerUrl: 'https://hotelchocolat.com', isListing: true },
      { sellerName: 'Vivilicious Chocolates', sellerUrl: 'https://viviliciouschocolates.com', isListing: true },

      // Coffee
      { sellerName: 'Starbucks', sellerUrl: 'https://starbucks.com', isListing: true },
      { sellerName: 'Dunkin’', sellerUrl: 'https://dunkin.com', isListing: true },
      { sellerName: 'Panera Bread', sellerUrl: 'https://panerabread.com', isListing: true },
      { sellerName: 'Sheetz', sellerUrl: 'https://sheetz.com', isListing: true },
      { sellerName: 'Caribou Coffee', sellerUrl: 'https://cariboucoffee.com', isListing: true },
      { sellerName: 'Peet’s Coffee', sellerUrl: 'https://peets.com', isListing: true },


      // Credit Cards
      { sellerName: 'American Express', sellerUrl: 'https://americanexpress.com', isListing: true },
      { sellerName: 'Bank of America', sellerUrl: 'https://bankofamerica.com', isListing: true },
      { sellerName: 'Barclays', sellerUrl: 'https://barclays.com', isListing: true },
      { sellerName: 'Capital One', sellerUrl: 'https://capitalone.com', isListing: true },
      { sellerName: 'Chase', sellerUrl: 'https://chase.com', isListing: true },
      { sellerName: 'Citi', sellerUrl: 'https://citi.com', isListing: true },
      { sellerName: 'Discover', sellerUrl: 'https://discover.com', isListing: true },
      { sellerName: 'Navy Federal Credit Union', sellerUrl: 'https://navyfederal.org', isListing: true },
      { sellerName: 'PNC', sellerUrl: 'https://pnc.com', isListing: true },
      { sellerName: 'TD Bank', sellerUrl: 'https://td.com', isListing: true },
      { sellerName: 'U.S. Bank', sellerUrl: 'https://usbank.com', isListing: true },
      { sellerName: 'Wells Fargo', sellerUrl: 'https://wellsfargo.com', isListing: true },


      // Cryptocurrency Exchanges and Wallets
      { sellerName: 'Binance', sellerUrl: 'https://binance.com', isListing: true },
      { sellerName: 'Bitfinex', sellerUrl: 'https://bitfinex.com', isListing: true },
      { sellerName: 'Coinbase', sellerUrl: 'https://coinbase.com', isListing: true },
      { sellerName: 'Kraken', sellerUrl: 'https://kraken.com', isListing: true },
      { sellerName: 'Exodus', sellerUrl: 'https://exodus.com', isListing: true },
      { sellerName: 'Gemini', sellerUrl: 'https://gemini.com', isListing: true },
      { sellerName: 'eToro', sellerUrl: 'https://etoro.com', isListing: true },
      { sellerName: 'Robinhood', sellerUrl: 'https://robinhood.com', isListing: true },


      // Creativity
      { sellerName: 'Figma', sellerUrl: 'https://figma.com', isListing: true },
      { sellerName: 'Adobe XD', sellerUrl: 'https://adobe.com/products/xd.html', isListing: true },
      { sellerName: 'Coffitivity', sellerUrl: 'https://coffitivity.com', isListing: true },
      { sellerName: 'Craftsy', sellerUrl: 'https://craftsy.com', isListing: true },
      { sellerName: 'ehow', sellerUrl: 'https://ehow.com', isListing: true },
      { sellerName: 'Faber-Castell', sellerUrl: 'https://fabercastell.com', isListing: true },
      { sellerName: 'Skillshare', sellerUrl: 'https://skillshare.com', isListing: true },
      { sellerName: 'Creative Crafts', sellerUrl: 'https://creative-crafts.com', isListing: true },
      { sellerName: 'Everything Art and Craft', sellerUrl: 'https://everythingartandcraft.com', isListing: true },
      { sellerName: 'CreativeLive', sellerUrl: 'https://creativelive.com', isListing: true },
      { sellerName: 'Musiquest', sellerUrl: 'https://musiquest.com', isListing: true },
      { sellerName: 'The Music Place', sellerUrl: 'https://musicplace.com', isListing: true },
      { sellerName: 'PointBlank Music School', sellerUrl: 'https://pointblankmusicschool.com', isListing: true },
      { sellerName: 'Art is Fun', sellerUrl: 'https://art-is-fun.com', isListing: true },
      { sellerName: 'Envato Tuts+', sellerUrl: 'https://tutsplus.com', isListing: true },
      { sellerName: 'Drawspace', sellerUrl: 'https://drawspace.com', isListing: true },
      { sellerName: 'Michaels', sellerUrl: 'https://michaels.com', isListing: true },
      { sellerName: 'Joann', sellerUrl: 'https://joann.com', isListing: true },
      { sellerName: 'Hobby Lobby', sellerUrl: 'https://hobbylobby.com', isListing: true },
      { sellerName: 'Partycity', sellerUrl: 'https://partycity.com', isListing: true },
      { sellerName: 'Create and Craft', sellerUrl: 'https://createandcraft.com', isListing: true },


      // Computers, Cell Phones and Electronics
      { sellerName: 'Best Buy', sellerUrl: 'https://bestbuy.com', isListing: true },
      { sellerName: 'Newegg', sellerUrl: 'https://newegg.com', isListing: true },
      { sellerName: 'Samsung', sellerUrl: 'https://samsung.com', isListing: true },
      { sellerName: 'Apple', sellerUrl: 'https://apple.com', isListing: true },
      { sellerName: 'Micro Center', sellerUrl: 'https://microcenter.com', isListing: true },
      { sellerName: 'Dell', sellerUrl: 'https://dell.com', isListing: true },
      { sellerName: 'LG', sellerUrl: 'https://lg.com', isListing: true },
      { sellerName: 'HP', sellerUrl: 'https://hp.com', isListing: true },
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com', isListing: true },
      { sellerName: 'Microsoft', sellerUrl: 'https://microsoft.com', isListing: true },
      { sellerName: 'Sony', sellerUrl: 'https://sony.com', isListing: true },
      { sellerName: 'Nvidia', sellerUrl: 'https://nvidia.com', isListing: true },
      { sellerName: 'Amazon', sellerUrl: 'https://amazon.com', isListing: true },
      { sellerName: 'B&H Photo Video', sellerUrl: 'https://bhphotovideo.com', isListing: true },
      { sellerName: 'AT&T', sellerUrl: 'https://att.com', isListing: true },
      { sellerName: 'Gazelle', sellerUrl: 'https://gazelle.com', isListing: true },
      { sellerName: 'Google Store', sellerUrl: 'https://store.google.com', isListing: true },
      { sellerName: 'Motorola', sellerUrl: 'https://motorola.com', isListing: true },
      { sellerName: 'Staples', sellerUrl: 'https://staples.com', isListing: true },
      { sellerName: 'T-Mobile', sellerUrl: 'https://t-mobile.com', isListing: true },
      { sellerName: 'Verizon', sellerUrl: 'https://verizon.com', isListing: true },



    // Commuter Rail Systems
      { sellerName: 'Caltrain', sellerUrl: 'https://caltrain.com', isListing: true },
      { sellerName: 'MetroRail', sellerUrl: 'https://metro.net', isListing: true },
      { sellerName: 'MARC Train', sellerUrl: 'https://mta.maryland.gov', isListing: true },
      { sellerName: 'MBTA Commuter Rail', sellerUrl: 'https://mbta.com', isListing: true },
      { sellerName: 'Metra', sellerUrl: 'https://metra.com', isListing: true },
      { sellerName: 'Metrolink', sellerUrl: 'https://metrolinktrains.com', isListing: true },
      { sellerName: 'NJ Transit Rail', sellerUrl: 'https://njtransit.com', isListing: true },
      { sellerName: 'SEPTA Regional Rail', sellerUrl: 'https://septa.org', isListing: true },
      { sellerName: 'Sounder Commuter Rail', sellerUrl: 'https://soundtransit.org', isListing: true },
      { sellerName: 'TexRail', sellerUrl: 'https://ridetrinitymetro.org/texrail', isListing: true },
      { sellerName: 'Tri-Rail', sellerUrl: 'https://tri-rail.com', isListing: true },
      { sellerName: 'Trinity Railway', sellerUrl: 'https://trinityrailwayexpress.org', isListing: true },


      // Dating
      { sellerName: 'Bumble', sellerUrl: 'https://bumble.com', isListing: true },
      { sellerName: 'Eharmony', sellerUrl: 'https://eharmony.com', isListing: true },
      { sellerName: 'Elite Singles', sellerUrl: 'https://elitesingles.com', isListing: true },
      { sellerName: 'Match', sellerUrl: 'https://match.com', isListing: true },
      { sellerName: 'matrimony.com', sellerUrl: 'https://matrimony.com', isListing: true },
      { sellerName: 'OkCupid', sellerUrl: 'https://okcupid.com', isListing: true },
      { sellerName: 'Tinder', sellerUrl: 'https://tinder.com', isListing: true },
      { sellerName: 'Zoosk', sellerUrl: 'https://zoosk.com', isListing: true },


      // Daycare
      { sellerName: 'La Petite Academy', sellerUrl: 'https://lapetite.com', isListing: true },
      { sellerName: 'Bright Horizons', sellerUrl: 'https://discover.brighthorizons.com', isListing: true },
      { sellerName: 'Kiddie Academy', sellerUrl: 'https://kiddieacademy.com', isListing: true },
      { sellerName: 'KinderCare', sellerUrl: 'https://kindercare.com', isListing: true },
      { sellerName: 'The Goddard School', sellerUrl: 'https://goddardschool.com', isListing: true },
      { sellerName: 'Childtime', sellerUrl: 'https://childtime.com', isListing: true },
      { sellerName: 'Sunshine House', sellerUrl: 'https://sunshinehouse.com', isListing: true },
      { sellerName: 'Primrose Schools', sellerUrl: 'https://primroseschools.com', isListing: true },
      { sellerName: 'Children’s Courtyard', sellerUrl: 'https://childrenscourtyard.com', isListing: true },


      // Department Stores
      { sellerName: 'Bloomingdale’s', sellerUrl: 'http://bloomingdales.com', isListing: true },
      { sellerName: 'Bergdorf Goodman', sellerUrl: 'http://bergdorfgoodman.com', isListing: true },
      { sellerName: 'Dillard’s', sellerUrl: 'http://dillards.com', isListing: true },
      { sellerName: 'Lord & Taylor', sellerUrl: 'http://lordandtaylor.com', isListing: true },
      { sellerName: 'Macys', sellerUrl: 'http://macys.com', isListing: true },
      { sellerName: 'Neiman Marcus', sellerUrl: 'http://neimanmarcus.com', isListing: true },
      { sellerName: 'Nordstrom', sellerUrl: 'http://nordstrom.com', isListing: true },
      { sellerName: 'Saks Fifth Avenue', sellerUrl: 'http://saksfifthavenue.com', isListing: true },
      { sellerName: 'Belk', sellerUrl: 'http://belk.com', isListing: true },
      { sellerName: 'Von Maur', sellerUrl: 'http://vonmaur.com', isListing: true },

    //   Dental Insurance
      { sellerName: 'Nationwide', sellerUrl: 'https://dentalinsurance.com', isListing: true },
      { sellerName: 'Delta Dental', sellerUrl: 'https://deltadental.com', isListing: true },
      { sellerName: 'Cigna', sellerUrl: 'https://cigna.com', isListing: true },
      { sellerName: 'Aetna', sellerUrl: 'https://aetna.com', isListing: true },
      { sellerName: 'Aflac', sellerUrl: 'https://aflac.com', isListing: true },
      { sellerName: 'MetLife', sellerUrl: 'https://metlife.com', isListing: true },


    //   Discount Department Stores
      { sellerName: 'J.C. Penney', sellerUrl: 'https://jcp.com', isListing: true },
      { sellerName: 'Kohl\'s', sellerUrl: 'https://kohls.com', isListing: true },
      { sellerName: 'Montgomery Ward', sellerUrl: 'https://wards.com', isListing: true },
      { sellerName: 'Ross Stores', sellerUrl: 'https://rossstores.com', isListing: true },
      { sellerName: 'Sears', sellerUrl: 'https://sears.com', isListing: true },
      { sellerName: 'Kmart', sellerUrl: 'https://kmart.com', isListing: true },
      { sellerName: 'TJX Maxx', sellerUrl: 'https://tjmaxx.tjx.com', isListing: true },
      { sellerName: 'Marshalls', sellerUrl: 'https://marshalls.com', isListing: true },
      { sellerName: 'Stein Mart', sellerUrl: 'https://steinmart.com', isListing: true },
      { sellerName: 'Nordstrom Rack', sellerUrl: 'https://nordstromrack.com', isListing: true },
      { sellerName: 'Bealls', sellerUrl: 'https://beallsflorida.com', isListing: true },


    //   Discount Stores

      { sellerName: 'Big Lots', sellerUrl: 'https://biglots.com/' , isListing: true },
      { sellerName: 'Dollar General', sellerUrl: 'https://dollargeneral.com/', isListing: true  },
      { sellerName: 'Dollar Tree', sellerUrl: 'https://dollartree.com/', isListing: true  },
      { sellerName: 'Family Dollar', sellerUrl: 'https://familydollar.com/', isListing: true  },
      { sellerName: 'Homegoods', sellerUrl: 'https://homegoods.com/', isListing: true  },
      { sellerName: 'Costco', sellerUrl: 'https://costco.com/', isListing: true  },
      { sellerName: 'Target', sellerUrl: 'https://target.com/', isListing: true  },
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com/', isListing: true  },
      { sellerName: 'Five Below', sellerUrl: 'https://fivebelow.com/', isListing: true  },
      { sellerName: 'Sam\'s Club', sellerUrl: 'https://samsclub.com/' , isListing: true },


    //   Fashion Women
      { sellerName: 'Free People', sellerUrl: 'https://freepeople.com/', isListing: true },
      { sellerName: 'Made Trade', sellerUrl: 'https://madetrade.com/', isListing: true  },
      { sellerName: 'Wolf and Badger', sellerUrl: 'https://wolfandbadger.com/' , isListing: true },
      { sellerName: 'Cettire', sellerUrl: 'https://cettire.com/', isListing: true  },
      { sellerName: 'Urban Outfitters', sellerUrl: 'https://urbanoutfitters.com/', isListing: true  },
      { sellerName: 'Anthropologie', sellerUrl: 'https://anthropologie.com/' , isListing: true },
      { sellerName: 'Italist', sellerUrl: 'https://italist.com/' , isListing: true },
      { sellerName: 'Abercrombie and Fitch', sellerUrl: 'https://abercrombie.com/',isListing: true },
      { sellerName: 'H&M', sellerUrl: 'https://hm.com/', isListing: true  },
      { sellerName: 'J.Crew', sellerUrl: 'https://jcrew.com/' , isListing: true },
      { sellerName: 'Zappos', sellerUrl: 'https://zappos.com/', isListing: true  },
      { sellerName: 'Forever 21', sellerUrl: 'https://forever21.com/' , isListing: true },
      { sellerName: 'Lane Bryant', sellerUrl: 'https://lanebryant.com/' , isListing: true },
      { sellerName: 'American Eagle', sellerUrl: 'https://ae.com/', isListing: true  },
      { sellerName: 'Gap', sellerUrl: 'https://gap.com/', isListing: true  },
      { sellerName: 'Express', sellerUrl: 'https://express.com/' , isListing: true },
      { sellerName: 'Shopbop', sellerUrl: 'https://shopbop.com/', isListing: true  },
      { sellerName: 'Poshmark', sellerUrl: 'https://poshmark.com/', isListing: true  },
      { sellerName: 'Mercari', sellerUrl: 'https://mercari.com/' , isListing: true },
      { sellerName: 'Arket', sellerUrl: 'https://arket.com/' , isListing: true },
      { sellerName: 'Buck Mason', sellerUrl: 'https://buckmason.com/', isListing: true  },
      { sellerName: 'DSTLD', sellerUrl: 'https://dstld.com/', isListing: true  },
      { sellerName: 'Lucky Brand', sellerUrl: 'https://luckybrand.com/', isListing: true  },
      { sellerName: 'The RealReal', sellerUrl: 'https://therealreal.com/' , isListing: true },
      { sellerName: 'Suitsupply', sellerUrl: 'https://suitsupply.com/', isListing: true  },
      { sellerName: 'Rails', sellerUrl: 'https://railsclothing.com/', isListing: true  },
      { sellerName: 'GOAT', sellerUrl: 'https://goat.com/', isListing: true  },
      { sellerName: 'Zulily', sellerUrl: 'https://zulily.com/' , isListing: true },
      { sellerName: 'Banana Republic', sellerUrl: 'https://bananarepublic.gap.com/', isListing: true  },
      { sellerName: 'Victoria\'s Secret', sellerUrl: 'https://victoriassecret.com/' , isListing: true },
      { sellerName: 'Bare Necessities', sellerUrl: 'https://barenecessities.com/', isListing: true  },
      { sellerName: 'Snapdeal', sellerUrl: 'https://snapdeal.com/', isListing: true  },


    //   Fashion Men
      { sellerName: 'Wolf and Badger', sellerUrl: 'https://wolfandbadger.com/', isListing: true },
      { sellerName: 'Italist', sellerUrl: 'https://italist.com/', isListing: true  },
      { sellerName: 'Urban Outfitters', sellerUrl: 'https://urbanoutfitters.com/', isListing: true  },
      { sellerName: 'Abercrombie and Fitch', sellerUrl: 'https://abercrombie.com/', isListing: true  },
      { sellerName: 'American Eagle', sellerUrl: 'https://ae.com/', isListing: true  },
      { sellerName: 'Gap', sellerUrl: 'https://gap.com/', isListing: true  },
      { sellerName: 'Express', sellerUrl: 'https://express.com/' , isListing: true },
      { sellerName: 'H&M', sellerUrl: 'https://hm.com/', isListing: true  },
      { sellerName: 'J.Crew', sellerUrl: 'https://jcrew.com/', isListing: true  },
      { sellerName: 'Zappos', sellerUrl: 'https://zappos.com/', isListing: true  },
      { sellerName: 'Shopbop', sellerUrl: 'https://shopbop.com/', isListing: true  },
      { sellerName: 'Poshmark', sellerUrl: 'https://poshmark.com/' , isListing: true },
      { sellerName: 'Forever 21', sellerUrl: 'https://forever21.com/', isListing: true  },
      { sellerName: 'Mercari', sellerUrl: 'https://mercari.com/' , isListing: true },
      { sellerName: 'Arket', sellerUrl: 'https://arket.com/' , isListing: true },
      { sellerName: 'Bonobos', sellerUrl: 'https://bonobos.com/', isListing: true  },
      { sellerName: 'Buck Mason', sellerUrl: 'https://buckmason.com/' , isListing: true },
      { sellerName: 'DSTLD', sellerUrl: 'https://dstld.com/' , isListing: true },
      { sellerName: 'Lucky Brand', sellerUrl: 'https://luckybrand.com/', isListing: true  },
      { sellerName: 'The RealReal', sellerUrl: 'https://therealreal.com/', isListing: true  },
      { sellerName: 'Suitsupply', sellerUrl: 'https://suitsupply.com/' , isListing: true },
      { sellerName: 'Snapdeal', sellerUrl: 'https://snapdeal.com/', isListing: true  },
      { sellerName: 'Rails', sellerUrl: 'https://railsclothing.com/', isListing: true  },
      { sellerName: 'GOAT', sellerUrl: 'https://goat.com/', isListing: true  },
      { sellerName: 'Zulily', sellerUrl: 'https://zulily.com/' , isListing: true },
      { sellerName: 'Men’s Warehouse', sellerUrl: 'https://menswearhouse.com/', isListing: true  },
      { sellerName: 'Banana Republic', sellerUrl: 'https://bananarepublic.gap.com/' , isListing: true },
      { sellerName: 'Ash and Erie', sellerUrl: 'https://ashanderie.com/', isListing: true  },
      { sellerName: 'UNTUCKit', sellerUrl: 'https://untuckit.com/', isListing: true  },


    //   Fast Food
      { sellerName: 'McDonald’s', sellerUrl: 'https://mcdonalds.com/', isListing: true },
      { sellerName: 'Subway', sellerUrl: 'https://subway.com/', isListing: true },
      { sellerName: 'Taco Bell', sellerUrl: 'https://tacobell.com/', isListing: true },
      { sellerName: 'Wendy’s', sellerUrl: 'https://wendys.com/', isListing: true },
      { sellerName: 'Burger King', sellerUrl: 'https://burgerking.com/', isListing: true },
      { sellerName: 'Chick-Fil-A', sellerUrl: 'https://chick-fil-a.com/', isListing: true },


    //   Financial Advisory and Money Management
      { sellerName: 'American Funds', sellerUrl: 'https://capitalgroup.com/', isListing: true },
      { sellerName: 'Black Rock', sellerUrl: 'https://blackrock.com/', isListing: true },
      { sellerName: 'Charles Schwab', sellerUrl: 'https://schwab.com/', isListing: true },
      { sellerName: 'Edward Jones', sellerUrl: 'https://edwardjones.com/', isListing: true },
      { sellerName: 'Fidelity Investments', sellerUrl: 'https://fidelity.com/', isListing: true },
      { sellerName: 'Goldman Sachs', sellerUrl: 'https://goldmansachs.com/', isListing: true },
      { sellerName: 'J.P. Morgan Chase', sellerUrl: 'https://jpmorganchase.com/', isListing: true },
      { sellerName: 'Morgan Stanley', sellerUrl: 'https://morganstanley.com/', isListing: true },
      { sellerName: 'T. Rowe Price', sellerUrl: 'https://troweprice.com/', isListing: true },
      { sellerName: 'Vanguard Brokerage', sellerUrl: 'https://vanguard.com/', isListing: true },


    //   Flowers
      { sellerName: 'UrbanStems', sellerUrl: 'https://urbanstems.com/', isListing: true },
      { sellerName: 'Venus Et Fluer', sellerUrl: 'https://venusetfleur.com/', isListing: true },
      { sellerName: 'Teleflora', sellerUrl: 'https://teleflora.com/', isListing: true },
      { sellerName: 'Bouqs', sellerUrl: 'https://bouqs.com/', isListing: true },
      { sellerName: '1800Flowers', sellerUrl: 'https://1800flowers.com/', isListing: true },
      { sellerName: 'FTD', sellerUrl: 'https://ftd.com/', isListing: true },
      { sellerName: 'Fromyouflowers.com', sellerUrl: 'https://fromyouflowers.com/', isListing: true },



    //   Food and Grocery Delivery
      { sellerName: 'Doordash', sellerUrl: 'https://doordash.com/', isListing: true },
      { sellerName: 'Grubhub', sellerUrl: 'https://grubhub.com/', isListing: true },
      { sellerName: 'Ubereats', sellerUrl: 'https://ubereats.com/', isListing: true },
      { sellerName: 'Seamless', sellerUrl: 'https://seamless.com/', isListing: true },
      { sellerName: 'Instacart', sellerUrl: 'https://instacart.com/', isListing: true },
      { sellerName: 'Amazon Fresh', sellerUrl: 'https://amazonfresh.com/', isListing: true },
      { sellerName: 'Fresh Direct', sellerUrl: 'https://freshdirect.com/', isListing: true },
      { sellerName: 'Safeway', sellerUrl: 'https://safeway.com/', isListing: true },
      { sellerName: 'Yelp', sellerUrl: 'https://yelp.com/', isListing: true },

    //   Freelance Marketplaces
      { sellerName: '99Designs', sellerUrl: 'https://99designs.com/', isListing: true },
      { sellerName: 'Behance', sellerUrl: 'https://behance.net/', isListing: true },
      { sellerName: 'Fiverr', sellerUrl: 'https://fiverr.com/', isListing: true },
      { sellerName: 'Flex Jobs', sellerUrl: 'https://flexjobs.com/', isListing: true },
      { sellerName: 'Freelancer', sellerUrl: 'https://freelancer.com/', isListing: true },
      { sellerName: 'Guru', sellerUrl: 'https://guru.com/', isListing: true },
      { sellerName: 'People per Hour', sellerUrl: 'https://peopleperhour.com/', isListing: true },
      { sellerName: 'Task Rabbit', sellerUrl: 'https://taskrabbit.com/', isListing: true },
      { sellerName: 'Toptal', sellerUrl: 'https://toptal.com/', isListing: true },
      { sellerName: 'Upwork', sellerUrl: 'https://upwork.com/', isListing: true },

    //   Gas Stations
      { sellerName: 'Arco', sellerUrl: 'https://arco.com/', isListing: true },
      { sellerName: 'BP', sellerUrl: 'https://bp.com/', isListing: true },
      { sellerName: 'Chevron', sellerUrl: 'https://chevron.com/', isListing: true },
      { sellerName: 'Conoco Phillips', sellerUrl: 'https://conocophillips.com/', isListing: true },
      { sellerName: 'Mobil', sellerUrl: 'https://mobil.com/', isListing: true },
      { sellerName: 'Exxon', sellerUrl: 'https://exxon.com/', isListing: true },
      { sellerName: 'Phillips 66', sellerUrl: 'https://phillips66.com/', isListing: true },
      { sellerName: 'Shell', sellerUrl: 'https://shell.com/', isListing: true },
      { sellerName: 'Marathon', sellerUrl: 'https://marathon.com/', isListing: true },
      { sellerName: 'Sinclair', sellerUrl: 'https://sinclairoil.com/', isListing: true },
      { sellerName: '76', sellerUrl: 'https://76.com/', isListing: true },


    //   Gifts
      { sellerName: 'Uncommon Goods', sellerUrl: 'https://uncommongoods.com/', isListing: true },
      { sellerName: 'Home Wet Bar', sellerUrl: 'https://homewetbar.com/', isListing: true },
      { sellerName: 'Wrapables', sellerUrl: 'https://wrapables.com/', isListing: true },
      { sellerName: 'Sugarfina', sellerUrl: 'https://sugarfina.com/', isListing: true },
      { sellerName: 'Virgin Experience Gifts', sellerUrl: 'https://virginexperiencegifts.com/', isListing: true },
      { sellerName: '3D Laser Gifts', sellerUrl: 'https://3dlasergifts.com/', isListing: true },
      { sellerName: 'Buy Olympia', sellerUrl: 'https://buyolympia.com/', isListing: true },
      { sellerName: 'Prezzybox', sellerUrl: 'https://prezzybox.com/', isListing: true },
      { sellerName: 'Boarding Pass', sellerUrl: 'https://boardingpassnyc.com/', isListing: true },
      { sellerName: 'Kikkerland', sellerUrl: 'https://kikkerland.com/', isListing: true },
      { sellerName: 'Terrain', sellerUrl: 'https://shopterrain.com/', isListing: true },
      { sellerName: 'Send A Cake', sellerUrl: 'https://sendacake.com/', isListing: true },
      { sellerName: 'Olive and Cocoa', sellerUrl: 'https://oliveandcocoa.com/', isListing: true },
      { sellerName: 'Knack', sellerUrl: 'https://knackshops.com/', isListing: true },
      { sellerName: 'Mindful', sellerUrl: 'https://shopmindfulgifts.com/', isListing: true },


    //   Gyms, Pilates, Yoga, Barre, HIIT and Cycling
      { sellerName: 'Gold’s Gym', sellerUrl: 'https://goldsgym.com/', isListing: true },
      { sellerName: 'Equinox', sellerUrl: 'https://equinox.com/', isListing: true },
      { sellerName: '24 Hour Fitness', sellerUrl: 'https://24hourfitness.com/', isListing: true },
      { sellerName: 'Anytime Fitness', sellerUrl: 'https://anytimefitness.com/', isListing: true },
      { sellerName: 'LA Fitness', sellerUrl: 'https://lafitness.com/', isListing: true },
      { sellerName: 'Orangetheory Fitness', sellerUrl: 'https://orangetheoryfitness.com/', isListing: true },
      { sellerName: 'Pure Barre', sellerUrl: 'https://purebarre.com/', isListing: true },
      { sellerName: 'Core Power Yoga', sellerUrl: 'https://corepoweryoga.com/', isListing: true },
      { sellerName: 'YogaWorks', sellerUrl: 'https://yogaworks.com/', isListing: true },
      { sellerName: 'Club Pilates', sellerUrl: 'https://clubpilates.com/', isListing: true },
      { sellerName: 'Cyclebar', sellerUrl: 'https://cyclebar.com/', isListing: true },



    //   Health Food and Vitamins
      { sellerName: 'Amazon Fresh', sellerUrl: 'https://amazonfresh.com/', isListing: true },
      { sellerName: 'Brandless', sellerUrl: 'https://brandless.com/', isListing: true },
      { sellerName: 'Puritan’s Pride', sellerUrl: 'https://puritan.com/', isListing: true },
      { sellerName: 'GNC', sellerUrl: 'https://gnc.com/', isListing: true },
      { sellerName: 'Hungryroot', sellerUrl: 'https://hungryroot.com/', isListing: true },
      { sellerName: 'iHerb', sellerUrl: 'https://iherb.com/', isListing: true },
      { sellerName: 'Kalyx', sellerUrl: 'https://kalyx.com/', isListing: true },
      { sellerName: 'Sprouts', sellerUrl: 'https://sprouts.com/', isListing: true },
      { sellerName: 'Swanson Vitamins', sellerUrl: 'https://swansonvitamins.com/', isListing: true },
      { sellerName: 'Thrive Market', sellerUrl: 'https://thrivemarket.com/', isListing: true },
      { sellerName: 'Vitacost', sellerUrl: 'https://vitacost.com/', isListing: true },
      { sellerName: 'Whole Foods', sellerUrl: 'https://wholefoodsmarket.com/', isListing: true },



    //   Health Insurance

      { sellerName: 'Aetna', sellerUrl: 'https://aetna.com/', isListing: true },
      { sellerName: 'Anthem', sellerUrl: 'https://anthem.com/', isListing: true },
      { sellerName: 'Centene', sellerUrl: 'https://centene.com/', isListing: true },
      { sellerName: 'Cigna', sellerUrl: 'https://cigna.com/', isListing: true },
      { sellerName: 'Guidewell', sellerUrl: 'https://guidewell.com/', isListing: true },
      { sellerName: 'Humana', sellerUrl: 'https://humana.com/', isListing: true },
      { sellerName: 'Kaiser Permanente', sellerUrl: 'https://kaiserpermanente.org/', isListing: true },
      { sellerName: 'Molina', sellerUrl: 'https://molinahealthcare.com/', isListing: true },
      { sellerName: 'UnitedHealth Group', sellerUrl: 'https://unitedhealthgroup.com/', isListing: true }
,


    //   Home and Mortgage Loans
      { sellerName: 'Bank of America', sellerUrl: 'https://bankofamerica.com/',isListing: true },
      { sellerName: 'Capital Mortgage', sellerUrl: 'https://capitalmort.com/',isListing: true },
      { sellerName: 'JP Morgan Chase', sellerUrl: 'https://chase.com/' ,isListing: true},
      { sellerName: 'PennyMac', sellerUrl: 'https://pennymac.com/',isListing: true },
      { sellerName: 'PNC', sellerUrl: 'https://pnc.com/',isListing: true },
      { sellerName: 'Quicken Loans', sellerUrl: 'https://quickenloans.com/' ,isListing: true},
      { sellerName: 'Rocket Mortgages', sellerUrl: 'https://rocketmortgage.com/' ,isListing: true},
      { sellerName: 'U.S. Bank', sellerUrl: 'https://usbank.com/',isListing: true },
      { sellerName: 'Veterans United', sellerUrl: 'https://veteransunited.com/',isListing: true },
      { sellerName: 'Wells Fargo', sellerUrl: 'https://wellsfargo.com/',isListing: true },
      { sellerName: 'Loan Depot', sellerUrl: 'https://loandepot.com/',isListing: true },
      { sellerName: 'Citizens Bank', sellerUrl: 'https://citizensbank.com/',isListing: true },
      { sellerName: 'New American Funding', sellerUrl: 'https://newamericanfunding.com/' ,isListing: true},
      { sellerName: 'Central Bank', sellerUrl: 'https://centralbank.net/',isListing: true },
      { sellerName: 'Lending Tree', sellerUrl: 'https://lendingtree.com/',isListing: true },
      { sellerName: 'Fannie Mae', sellerUrl: 'https://fanniemae.com/' ,isListing: true},
      { sellerName: 'Fairway Independent', sellerUrl: 'https://fairwayindependentmc.com/',isListing: true },




    //   Home Style and Furniture
      { sellerName: 'Article', sellerUrl: 'https://article.com/' ,isListing: true},
      { sellerName: 'Ashley Furniture', sellerUrl: 'https://ashleyfurniture.com/',isListing: true },
      { sellerName: 'Crate&Barrel', sellerUrl: 'https://crateandbarrel.com/',isListing: true },
      { sellerName: 'Ethan Allen', sellerUrl: 'https://ethanallen.com/',isListing: true },
      { sellerName: 'Ikea', sellerUrl: 'https://ikea.com/' ,isListing: true},
      { sellerName: 'Joybird', sellerUrl: 'https://joybird.com/',isListing: true },
      { sellerName: 'Living Spaces', sellerUrl: 'https://livingspaces.com/',isListing: true },
      { sellerName: 'Macy\'s', sellerUrl: 'https://macys.com/' ,isListing: true},
      { sellerName: 'Overstock', sellerUrl: 'https://overstock.com/' ,isListing: true},
      { sellerName: 'Pier One', sellerUrl: 'https://pier1.com/',isListing: true },
      { sellerName: 'Pottery Barn', sellerUrl: 'https://potterybarn.com/',isListing: true },
      { sellerName: 'Room&Board', sellerUrl: 'https://roomandboard.com/',isListing: true },
      { sellerName: 'Restoration Hardware', sellerUrl: 'https://rh.com/',isListing: true },
      { sellerName: 'Target', sellerUrl: 'https://target.com/',isListing: true },
      { sellerName: 'Wayfair', sellerUrl: 'https://wayfair.com/',isListing: true },
      { sellerName: 'West Elm', sellerUrl: 'https://westelm.com/',isListing: true },
      { sellerName: 'World Market', sellerUrl: 'https://worldmarket.com/',isListing: true },




    //   Home, Garden and Plants

      { sellerName: 'Home Depot', sellerUrl: 'https://homedepot.com/', isListing: true},
      { sellerName: 'Lowe\'s', sellerUrl: 'https://lowes.com/',isListing: true },
      { sellerName: 'The Sill', sellerUrl: 'https://thesill.com/' ,isListing: true},
      { sellerName: 'Plants.com', sellerUrl: 'https://plants.com/',isListing: true },
      { sellerName: 'Nature Hills', sellerUrl: 'https://naturehills.com/',isListing: true },


    //   Home Improvement
      { sellerName: 'Home Depot', sellerUrl: 'https://homedepot.com/',isListing: true },
      { sellerName: "Lowe's", sellerUrl: 'https://lowes.com/' ,isListing: true},
      { sellerName: 'Ace Hardware', sellerUrl: 'https://acehardware.com/',isListing: true, },
      { sellerName: 'Menards', sellerUrl: 'https://menards.com/',isListing: true },
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com/' ,isListing: true},
      { sellerName: 'Build with Ferguson', sellerUrl: 'https://build.com/',isListing: true },
      { sellerName: 'Harbor Freight', sellerUrl: 'https://harborfreight.com/',isListing: true },
      { sellerName: 'Overstock', sellerUrl: 'https://overstock.com/' ,isListing: true,},
      { sellerName: 'Tractor Supply Co.', sellerUrl: 'https://tractorsupply.com/' ,isListing: true},


    //   Home Repair and Handyman
      { sellerName: 'Task Rabbit', sellerUrl: 'https://taskrabbit.com/' ,isListing: true},
      { sellerName: 'Yelp', sellerUrl: 'https://yelp.com/' ,isListing: true},
      { sellerName: 'Thumbtack', sellerUrl: 'https://thumbtack.com/',isListing: true },
      { sellerName: 'Mr. Handyman', sellerUrl: 'https://mrhandyman.com/',isListing: true, },
      { sellerName: 'Fixer', sellerUrl: 'https://fixer.com/',isListing: true },
      { sellerName: 'HomeAdvisor', sellerUrl: 'https://homeadvisor.com/',isListing: true },
      { sellerName: 'Angi', sellerUrl: 'https://angi.com/',isListing: true },
      { sellerName: 'AirTasker', sellerUrl: 'https://airtasker.com/',isListing: true },


    //   Home Owner’s Insurance


      { sellerName: 'American Family', sellerUrl: 'https://amfam.com/',isListing: true },
      { sellerName: 'Amica', sellerUrl: 'https://amica.com/',isListing: true },
      { sellerName: 'Chubb', sellerUrl: 'https://chubb.com/' ,isListing: true},
      { sellerName: 'Erie Insurance', sellerUrl: 'https://erieinsurance.com/' ,isListing: true},
      { sellerName: 'Farmers', sellerUrl: 'https://farmers.com/',isListing: true },
      { sellerName: 'Liberty Mutual', sellerUrl: 'https://libertymutual.com/',isListing: true },
      { sellerName: 'Lemonade', sellerUrl: 'https://lemonade.com/',isListing: true },
      { sellerName: 'Nationwide', sellerUrl: 'https://nationwide.com/',isListing: true },
      { sellerName: 'Progressive', sellerUrl: 'https://progressive.com/',isListing: true},
      { sellerName: 'State Farm', sellerUrl: 'https://statefarm.com/',isListing: true },
      { sellerName: 'Travelers', sellerUrl: 'https://travelers.com/',isListing: true },
      { sellerName: 'USAA', sellerUrl: 'https://usaa.com/' ,isListing: true,},


    // Home Shopping Networks
      { sellerName: 'Gem Shopping Network', sellerUrl: 'https://gemshopping.com/' ,isListing: true},
      { sellerName: 'Home Shopping Network', sellerUrl: 'https://hsn.com/' ,isListing: true},
      { sellerName: 'JTV Live', sellerUrl: 'https://jtv.com/' ,isListing: true},
      { sellerName: 'Planet Auction TV', sellerUrl: 'https://planet-auction.com/',isListing: true },
      { sellerName: 'QVC', sellerUrl: 'https://qvc.com/' ,isListing: true},
      { sellerName: 'ShopHQ', sellerUrl: 'https://shophq.com/' ,isListing: true},
      { sellerName: 'Talk Shop Live', sellerUrl: 'https://talkshop.live/',isListing: true },



    // Hotels and Motels
      { sellerName: 'Baymont', sellerUrl: 'https://wyndhamhotels.com/',isListing: true },
      { sellerName: 'Best Western', sellerUrl: 'https://bestwestern.com/',isListing: true },
      { sellerName: 'Choice Hotels', sellerUrl: 'https://choicehotels.com/' ,isListing: true},
      { sellerName: 'Extended Stay America', sellerUrl: 'https://extendedstayamerica.com/' ,isListing: true},
      { sellerName: 'Hilton', sellerUrl: 'https://hilton.com/',isListing: true },
      { sellerName: 'Hyatt Hotels', sellerUrl: 'https://hyatt.com/',isListing: true },
      { sellerName: 'Marriott', sellerUrl: 'https://marriott.com/',isListing: true },
      { sellerName: 'Motel 6', sellerUrl: 'https://motel6.com/' ,isListing: true},
      { sellerName: 'Airbnb', sellerUrl: 'https://airbnb.com/',isListing: true },
      { sellerName: 'Hotels.com', sellerUrl: 'https://hotels.com/',isListing: true },

    // Internet Service Providers

      { sellerName: 'AT&T', sellerUrl: 'https://att.com/',isListing: true },
      { sellerName: 'Cox Communications', sellerUrl: 'https://cox.com/',isListing: true },
      { sellerName: 'Earthlink', sellerUrl: 'https://earthlink.net/' ,isListing: true},
      { sellerName: 'Frontier Communications', sellerUrl: 'https://frontier.com/',isListing: true },
      { sellerName: 'Mediacom', sellerUrl: 'https://mediacomcable.com/',isListing: true },
      { sellerName: 'Sparklight', sellerUrl: 'https://sparklight.com/',isListing: true },
      { sellerName: 'Consolidated Communications', sellerUrl: 'https://consolidated.com/' ,isListing: true},
      { sellerName: 'TDS Telecom', sellerUrl: 'https://tdstelecom.com/' ,isListing: true},
      { sellerName: 'Verizon High Speed Internet', sellerUrl: 'https://verizon.com/',isListing: true },
      { sellerName: 'Windstream', sellerUrl: 'https://windstream.com/',isListing: true },
      { sellerName: 'Xfinity', sellerUrl: 'https://xfinity.com/' ,isListing: true},

    // Jewelry
      { sellerName: 'Pandora', sellerUrl: 'https://pandora.net/', isListing: true },
      { sellerName: 'Tiffany & Co.', sellerUrl: 'https://tiffany.com/', isListing: true },
      { sellerName: 'Swarovski', sellerUrl: 'https://swarovski.com/', isListing: true },
      { sellerName: 'Jared', sellerUrl: 'https://jared.com/', isListing: true },
      { sellerName: 'Zales', sellerUrl: 'https://zales.com/', isListing: true },
      { sellerName: 'Kay Jewelers', sellerUrl: 'https://kay.com/', isListing: true },
      { sellerName: 'Helen Ficalora', sellerUrl: 'https://helenficalora.com/', isListing: true },
      { sellerName: 'Brilliant Earth', sellerUrl: 'https://brilliantearth.com/', isListing: true },

    // Kitchen and Cooking
      { sellerName: 'Williams-Sonoma', sellerUrl: 'https://williams-sonoma.com/', isListing: true },
      { sellerName: 'Sur la Table', sellerUrl: 'https://surlatable.com/', isListing: true },
      { sellerName: 'Le Creuset', sellerUrl: 'https://lecreuset.com/', isListing: true },
      { sellerName: 'Cutlery and More', sellerUrl: 'https://cutleryandmore.com/', isListing: true },
      { sellerName: 'All-Clad', sellerUrl: 'https://all-clad.com/', isListing: true },


    // Kids

      { sellerName: 'Pirasta', sellerUrl: 'https://pirastanyc.com/', isListing: true },
      { sellerName: "The Children's Place", sellerUrl: 'https://childrensplace.com/', isListing: true },
      { sellerName: "Cookie's", sellerUrl: 'https://cookieskids.com/', isListing: true },
      { sellerName: 'Fat Brain Toys', sellerUrl: 'https://fatbraintoys.com/', isListing: true },
      { sellerName: 'Fun Brain', sellerUrl: 'https://funbrain.com/', isListing: true },
      { sellerName: 'Learning Resources', sellerUrl: 'https://learningresources.com/', isListing: true },


    // Kid’s Clothing
      { sellerName: 'Hanna Anderson', sellerUrl: 'https://hannaanderson.com/', isListing: true },
      { sellerName: "Carter's", sellerUrl: 'https://carters.com/', isListing: true },
      { sellerName: 'Gymboree', sellerUrl: 'https://gymboree.com/', isListing: true },
      { sellerName: 'OshKosh', sellerUrl: 'https://oshkosh.com/', isListing: true },
      { sellerName: 'Maisonette', sellerUrl: 'https://maisonette.com/', isListing: true },
      { sellerName: 'Janie and Jack', sellerUrl: 'https://janieandjack.com/', isListing: true },


    // Laundry
      { sellerName: 'Laundry Butler', sellerUrl: 'https://laundrybutlerforyou.com/', isListing: true },
      { sellerName: 'Happy Nest', sellerUrl: 'https://happynest.com/', isListing: true },
      { sellerName: 'SudShare', sellerUrl: 'https://sudshare.com/', isListing: true },
      { sellerName: 'Laundry Care', sellerUrl: 'https://laundrycare.biz/', isListing: true },
      { sellerName: 'Rinse', sellerUrl: 'https://rinse.com/', isListing: true },


    // Legal
      { sellerName: 'Avvo', sellerUrl: 'https://avvo.com/', isListing: true },
      { sellerName: 'Inc Authority', sellerUrl: 'https://incauthority.com/', isListing: true },
      { sellerName: 'Incfile', sellerUrl: 'https://incfile.com/', isListing: true },
      { sellerName: 'LegalShield', sellerUrl: 'https://legalshield.com/', isListing: true },
      { sellerName: 'LegalZoom', sellerUrl: 'https://legalzoom.com/', isListing: true },
      { sellerName: 'Rocket Lawyer', sellerUrl: 'https://rocketlawyer.com/', isListing: true },
      { sellerName: 'Swyftfilings', sellerUrl: 'https://swyftfilings.com/', isListing: true },
      { sellerName: 'Zen Business', sellerUrl: 'https://zenbusiness.com/', isListing: true },
      { sellerName: 'Legal Match', sellerUrl: 'https://legalmatch.com/', isListing: true },
      { sellerName: 'JustAnswer', sellerUrl: 'https://justanswer.com/', isListing: true },
      { sellerName: 'Country Wide Prepaid Legal Services', sellerUrl: 'https://countrywideppls.com/', isListing: true },
      { sellerName: 'Lawyers.com', sellerUrl: 'https://lawyers.com/', isListing: true },
      { sellerName: 'Legal Plans', sellerUrl: 'https://legalplans.com/', isListing: true },


    // Life Insurance
      { sellerName: 'AIG', sellerUrl: 'https://aig.com/', isListing: true },
      { sellerName: 'Bestow', sellerUrl: 'https://bestow.com/', isListing: true },
      { sellerName: 'Guardian Life', sellerUrl: 'https://guardianlife.com/', isListing: true },
      { sellerName: 'Haven Life', sellerUrl: 'https://havenlife.com/', isListing: true },
      { sellerName: 'John Hancock', sellerUrl: 'https://johnhancock.com/', isListing: true },
      { sellerName: 'Lincoln Financial', sellerUrl: 'https://lfg.com/', isListing: true },
      { sellerName: 'MassMutual', sellerUrl: 'https://massmutual.com/', isListing: true },
      { sellerName: 'Mutual of Omaha', sellerUrl: 'https://mutualofomaha.com/', isListing: true },
      { sellerName: 'Nationwide', sellerUrl: 'https://nationwide.com/', isListing: true },
      { sellerName: 'New York Life', sellerUrl: 'https://newyorklife.com/', isListing: true },
      { sellerName: 'Northwestern Mutual', sellerUrl: 'https://northwesternmutual.com/', isListing: true },
      { sellerName: 'Prudential', sellerUrl: 'https://prudential.com/', isListing: true },
      { sellerName: 'State Farm', sellerUrl: 'https://statefarm.com/', isListing: true },
      { sellerName: 'Transamerica', sellerUrl: 'https://transamerica.com/', isListing: true },


    // Medical and Urgent Care
      { sellerName: 'Urgent Care', sellerUrl: 'https://urgentcare.com/', isListing: true },
      { sellerName: 'Care Well Urgent Care', sellerUrl: 'https://carewellurgentcare.com/', isListing: true },
      { sellerName: 'ConvenientMD', sellerUrl: 'https://convenientmd.com/', isListing: true },
      { sellerName: 'FastMed', sellerUrl: 'https://fastmed.com/', isListing: true },
      { sellerName: 'Action Urgent Care', sellerUrl: 'https://actionurgentcare.com/', isListing: true },
      { sellerName: 'Total Access Urgent Care', sellerUrl: 'https://totalaccessurgentcare.com/', isListing: true },
      { sellerName: 'Carbon Health', sellerUrl: 'https://carbonhealth.com/urgent-care', isListing: true },
      { sellerName: 'Centers Urgent Care', sellerUrl: 'https://centersurgentcare.net/', isListing: true },


    // Box Subscriptions
      { sellerName: 'Beachly', sellerUrl: 'https://beach.ly/', isListing: true },
      { sellerName: 'Allure Beauty Box', sellerUrl: 'https://beautybox.allure.com/', isListing: true },
      { sellerName: 'Bespokepost', sellerUrl: 'https://bespokepost.com/', isListing: true },
      { sellerName: 'GQbox', sellerUrl: 'https://gqbox.com/', isListing: true },
      { sellerName: 'Boxy Charm', sellerUrl: 'https://boxycharm.ipsy.com/', isListing: true },
      { sellerName: 'Dollar Shave Club', sellerUrl: 'https://dollarshaveclub.com/', isListing: true },
      { sellerName: 'Ipsy', sellerUrl: 'https://ipsy.com/', isListing: true },
      { sellerName: 'Kidpik', sellerUrl: 'https://kidpik.com/', isListing: true },
      { sellerName: 'KiwiCo', sellerUrl: 'https://kiwico.com/', isListing: true },
      { sellerName: 'Rent the Runway', sellerUrl: 'https://renttherunway.com/', isListing: true },
      { sellerName: 'Stitch Fix', sellerUrl: 'https://stitchfix.com/', isListing: true },
      { sellerName: 'Vinebox', sellerUrl: 'https://getvinebox.com/', isListing: true },
      { sellerName: 'Lovevery', sellerUrl: 'https://lovevery.com/', isListing: true },
      { sellerName: 'Splendies', sellerUrl: 'https://splendies.com/', isListing: true },



    // Marketplaces
      { sellerName: 'Amazon', sellerUrl: 'https://amazon.com/', isListing: true },
      { sellerName: 'Bonanza', sellerUrl: 'https://bonanza.com/', isListing: true },
      { sellerName: 'Craigslist', sellerUrl: 'https://craigslist.org/', isListing: true },
      { sellerName: 'Ebay', sellerUrl: 'https://ebay.com/', isListing: true },
      { sellerName: 'Etsy', sellerUrl: 'https://etsy.com/', isListing: true },
      { sellerName: 'Houzz', sellerUrl: 'https://houzz.com/', isListing: true },
      { sellerName: 'Jane', sellerUrl: 'https://jane.com/', isListing: true },
      { sellerName: 'Kroger', sellerUrl: 'https://kroger.com/', isListing: true },
      { sellerName: 'Overstock', sellerUrl: 'https://overstock.com/', isListing: true },
      { sellerName: 'Poshmark', sellerUrl: 'https://poshmark.com/', isListing: true },
      { sellerName: 'Mercari', sellerUrl: 'https://mercari.com/', isListing: true },
      { sellerName: 'Ruby Lane', sellerUrl: 'https://rubylane.com/', isListing: true },
      { sellerName: 'Shopgoodwill.com', sellerUrl: 'https://shopgoodwill.com/', isListing: true },
      { sellerName: 'SidelineSwap', sellerUrl: 'https://sidelineswap.com/', isListing: true },
      { sellerName: 'The RealReal', sellerUrl: 'https://therealreal.com/', isListing: true },
      { sellerName: 'Vestiaire Collective', sellerUrl: 'https://vestiairecollective.com/', isListing: true },
      { sellerName: 'Rakuten', sellerUrl: 'https://rakuten.com/', isListing: true },
      { sellerName: 'Wayfair', sellerUrl: 'https://wayfair.com/', isListing: true },
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com/', isListing: true },
      { sellerName: 'Wish', sellerUrl: 'https://wish.com/', isListing: true },
      { sellerName: 'Best Buy', sellerUrl: 'https://bestbuy.com/', isListing: true },
      { sellerName: 'Sears', sellerUrl: 'https://sears.com/', isListing: true },
      { sellerName: 'OfferUp', sellerUrl: 'https://offerup.com/', isListing: true },
      { sellerName: 'Cratejoy', sellerUrl: 'https://cratejoy.com/', isListing: true },
      { sellerName: 'Newegg', sellerUrl: 'https://newegg.com/', isListing: true },
      { sellerName: 'Target', sellerUrl: 'https://target.com/', isListing: true },
      { sellerName: 'StockX', sellerUrl: 'https://stockx.com/', isListing: true },


      // Learning
      { sellerName: 'Adobe', sellerUrl: 'https://learning.adobe.com/', isListing: true },
      { sellerName: 'Codecademy Shop', sellerUrl: 'https://codecademy.com/', isListing: true },
      { sellerName: 'Coursera', sellerUrl: 'https://coursera.org/', isListing: true },
      { sellerName: 'Learnsmart', sellerUrl: 'https://learnsmartglobal.com/', isListing: true },
      { sellerName: 'Pluralsight', sellerUrl: 'https://pluralsight.com/', isListing: true },
      { sellerName: 'Skillshare', sellerUrl: 'https://skillshare.com/', isListing: true },
      { sellerName: 'Udacity', sellerUrl: 'https://udacity.com/', isListing: true },
      { sellerName: 'Udemy', sellerUrl: 'https://udemy.com/', isListing: true },
      { sellerName: 'edX', sellerUrl: 'https://edx.org/', isListing: true },
      { sellerName: 'McGraw-Hill Education', sellerUrl: 'https://mheducation.com/', isListing: true },
      { sellerName: 'AWS Certification', sellerUrl: 'https://aws.amazon.com/', isListing: true },


      // Meal Delivery Services
      { sellerName: 'Blue Apron', sellerUrl: 'https://blueapron.com/', isListing: true },
      { sellerName: 'Dinnerly', sellerUrl: 'https://dinnerly.com/', isListing: true },
      { sellerName: 'Every Plate', sellerUrl: 'https://everyplate.com/', isListing: true },
      { sellerName: 'Home Chef', sellerUrl: 'https://homechef.com/', isListing: true },
      { sellerName: 'Gobble', sellerUrl: 'https://gobble.com/', isListing: true },
      { sellerName: 'Factor 75', sellerUrl: 'https://factor75.com/', isListing: true },
      { sellerName: 'Green Chef', sellerUrl: 'https://greenchef.com/', isListing: true },
      { sellerName: 'Hello Fresh', sellerUrl: 'https://hellofresh.com/', isListing: true },
      { sellerName: 'Purple Carrot', sellerUrl: 'https://purplecarrot.com/', isListing: true },
      { sellerName: 'Sunbasket', sellerUrl: 'https://sunbasket.com/', isListing: true },


    // Movers and Moving
      { sellerName: 'ABF U-Pack', sellerUrl: 'https://upack.com/', isListing: true },
      { sellerName: 'Allied Van Lines', sellerUrl: 'https://allied.com/', isListing: true },
      { sellerName: 'Atlas Van Lines', sellerUrl: 'https://atlasvanlines.com/', isListing: true },
      { sellerName: 'Fisher North American', sellerUrl: 'https://fisherna.com/', isListing: true },
      { sellerName: 'Horizon Moving', sellerUrl: 'https://horizonmoving.com/', isListing: true },
      { sellerName: 'Mayflower Transit', sellerUrl: 'https://mayflower.com/', isListing: true },
      { sellerName: 'National Van Lines', sellerUrl: 'https://nationalvanlines.com/', isListing: true },
      { sellerName: 'North American Van Lines', sellerUrl: 'https://northamerican.com/', isListing: true },
      { sellerName: 'PODS', sellerUrl: 'https://pods.com/', isListing: true },
      { sellerName: 'Starving Students', sellerUrl: 'https://starvingstudents.com/', isListing: true },
      { sellerName: 'U-Haul', sellerUrl: 'https://uhaul.com/', isListing: true },
      { sellerName: 'United Van Lines', sellerUrl: 'https://unitedvanlines.com/', isListing: true },
      { sellerName: 'Zippy Shell', sellerUrl: 'https://zippyshell.com/', isListing: true },


      // Movie Theaters

      { sellerName: 'AMC Theaters', sellerUrl: 'https://amctheaters.com/', isListing: true },
      { sellerName: 'B&B Theaters', sellerUrl: 'https://bbtheatres.com/', isListing: true },
      { sellerName: 'Cinemark', sellerUrl: 'https://cinemark.com/', isListing: true },
      { sellerName: 'Cineplex Entertainment', sellerUrl: 'https://cineplex.com/', isListing: true },
      { sellerName: 'CMX Cinemas', sellerUrl: 'https://cmxcinemas.com/', isListing: true },
      { sellerName: 'Harkins Theaters', sellerUrl: 'https://harkins.com/', isListing: true },
      { sellerName: 'Malco Theaters', sellerUrl: 'https://malco.com/', isListing: true },
      { sellerName: 'Marcus Theaters', sellerUrl: 'https://marcustheaters.com/', isListing: true },
      { sellerName: 'Regal Cinemas', sellerUrl: 'https://regmovies.com/', isListing: true },


      // Pet Supplies
      { sellerName: 'Chewy\'s', sellerUrl: 'https://chewys.com/', isListing: true },
      { sellerName: 'Earthwise Pet Supply', sellerUrl: 'https://earthwisepet.com/', isListing: true },
      { sellerName: 'PetCo', sellerUrl: 'https://petco.com/', isListing: true },
      { sellerName: 'Petsense', sellerUrl: 'https://petsense.com/', isListing: true },
      { sellerName: 'PetSmart', sellerUrl: 'https://petsmart.com/', isListing: true },
      { sellerName: 'Pet Supplies Plus', sellerUrl: 'https://petsuppliesplus.com/', isListing: true },


      // Pharmacies
      { sellerName: 'Costco', sellerUrl: 'https://costco.com/', isListing: true },
      { sellerName: 'CVS Health', sellerUrl: 'https://cvshealth.com/', isListing: true },
      { sellerName: 'Kroger', sellerUrl: 'https://kroger.com/', isListing: true },
      { sellerName: 'Publix', sellerUrl: 'https://publix.com/', isListing: true },
      { sellerName: 'Rite Aid', sellerUrl: 'https://riteaid.com/', isListing: true },
      { sellerName: 'Walgreens', sellerUrl: 'https://walgreens.com/', isListing: true },
      { sellerName: 'Walmart', sellerUrl: 'https://walmart.com/', isListing: true },


      // Real Estate
      { sellerName: 'Camden Property Trust', sellerUrl: 'https://camdenliving.com/', isListing: true },
      { sellerName: 'Century 21', sellerUrl: 'https://century21.com/', isListing: true },
      { sellerName: 'Coldwell Banker', sellerUrl: 'https://coldwellbanker.com/', isListing: true },
      { sellerName: 'ERA Real Estate', sellerUrl: 'https://era.com/', isListing: true },
      { sellerName: 'Better Homes and Gardens Real Estate', sellerUrl: 'https://bhgre.com/', isListing: true },
      { sellerName: 'Keller Williams Realty, Inc.', sellerUrl: 'https://kw.com/', isListing: true },
      { sellerName: 'Knock Home', sellerUrl: 'https://knock.com/', isListing: true },
      { sellerName: 'Movoto', sellerUrl: 'https://movoto.com/', isListing: true },
      { sellerName: 'Offerpad', sellerUrl: 'https://offerpad.com/', isListing: true },
      { sellerName: 'Opendoor', sellerUrl: 'https://opendoor.com/', isListing: true },
      { sellerName: 'RE/MAX', sellerUrl: 'https://remax.com/', isListing: true },
      { sellerName: 'Redfin', sellerUrl: 'https://redfin.com/', isListing: true },
      { sellerName: 'Sotheby\'s International Realty', sellerUrl: 'https://sothebysrealty.com/', isListing: true },
      { sellerName: 'Realtor', sellerUrl: 'https://realtor.com/', isListing: true },
      { sellerName: 'Zillow', sellerUrl: 'https://zillow.com/', isListing: true },

      // Real Estate Agents
      { sellerName: 'Upnest', sellerUrl: 'https://upnest.com/', isListing: true },
      { sellerName: 'HomeLight', sellerUrl: 'https://homelight.com/', isListing: true },
      { sellerName: 'Zillow', sellerUrl: 'https://zillow.com/', isListing: true },
      { sellerName: 'Clever Real Estate', sellerUrl: 'https://listwithclever.com/', isListing: true },
      { sellerName: 'Homes.com', sellerUrl: 'https://homes.com/', isListing: true },
      { sellerName: 'RealEstateAgents.com', sellerUrl: 'https://realestateagents.com/', isListing: true },
      { sellerName: 'Realtor', sellerUrl: 'https://realtor.com/', isListing: true },


      // Renters Insurance

      { sellerName: 'Allstate', sellerUrl: 'https://allstate.com/', isListing: true },
      { sellerName: 'American Family', sellerUrl: 'https://amfam.com/', isListing: true },
      { sellerName: 'Amica', sellerUrl: 'https://amica.com/', isListing: true },
      { sellerName: 'Assurant', sellerUrl: 'https://assurant.com/', isListing: true },
      { sellerName: 'Erie Insurance', sellerUrl: 'https://erieinsurance.com/', isListing: true },
      { sellerName: 'Farmers', sellerUrl: 'https://farmers.com/', isListing: true },
      { sellerName: 'Homesite', sellerUrl: 'https://go.homesite.com/', isListing: true },
      { sellerName: 'Lemonade', sellerUrl: 'https://lemonade.com/', isListing: true },
      { sellerName: 'Liberty Mutual', sellerUrl: 'https://libertymutual.com/', isListing: true },
      { sellerName: 'MetLife', sellerUrl: 'https://metlife.com/', isListing: true },
      { sellerName: 'Nationwide', sellerUrl: 'https://nationwide.com/', isListing: true },
      { sellerName: 'Progressive', sellerUrl: 'https://progressive.com/', isListing: true },
      { sellerName: 'State Farm', sellerUrl: 'https://statefarm.com/', isListing: true },
      { sellerName: 'Toggle', sellerUrl: 'https://gettogle.com/', isListing: true },
      { sellerName: 'Travelers', sellerUrl: 'https://travelers.com/', isListing: true },
      { sellerName: 'USAA', sellerUrl: 'https://usaa.com/', isListing: true },


      // Ride Hail and Car Sharing
      { sellerName: 'Lyft', sellerUrl: 'https://lyft.com/', isListing: true },
      { sellerName: 'Uber', sellerUrl: 'https://uber.com/', isListing: true },
      { sellerName: 'RideGuru', sellerUrl: 'https://ride.guru/', isListing: true },
      { sellerName: 'Zipcar', sellerUrl: 'https://zipcar.com/', isListing: true },
      { sellerName: 'Turo', sellerUrl: 'https://turo.com/', isListing: true },
      { sellerName: 'Getaround', sellerUrl: 'https://getaround.com/', isListing: true },
      { sellerName: 'Flexcar', sellerUrl: 'https://flexcar.com/', isListing: true },



      // Restaurants
      { sellerName: 'TGI Fridays', sellerUrl: 'https://tgifridays.com/', isListing: true },
      { sellerName: "Applebee's", sellerUrl: 'https://applebees.com/', isListing: true },
      { sellerName: 'Olive Garden', sellerUrl: 'https://olivegarden.com/', isListing: true },
      { sellerName: 'Chili', sellerUrl: 'https://chilis.com/', isListing: true },
      { sellerName: 'Red Lobster', sellerUrl: 'https://redlobster.com/', isListing: true },
      { sellerName: 'Ruby Tuesday', sellerUrl: 'https://rubytuesday.com/', isListing: true },
      { sellerName: "Houlihan's", sellerUrl: 'https://houlihans.com/', isListing: true },
      { sellerName: 'Cheesecake Factory', sellerUrl: 'https://thecheesecakefactory.com/', isListing: true },
      { sellerName: 'Pizza Hut', sellerUrl: 'https://pizzahut.com/', isListing: true },
      { sellerName: 'Longhorn Steakhouse', sellerUrl: 'https://longhornsteakhouse.com/', isListing: true },
      { sellerName: 'Outback Steakhouse', sellerUrl: 'https://outback.com/', isListing: true },
      { sellerName: 'IHOP', sellerUrl: 'https://ihop.com/', isListing: true },
      { sellerName: "Domino's", sellerUrl: 'https://dominospizza.com/', isListing: true },
      { sellerName: 'Panda Express', sellerUrl: 'https://pandaexpress.com/', isListing: true },
      { sellerName: "Denny's", sellerUrl: 'https://dennys.com/', isListing: true },

      // Shipping
      { sellerName: 'DHL', sellerUrl: 'https://dhl.com/', isListing: true },
      { sellerName: 'FedEx', sellerUrl: 'https://fedex.com/', isListing: true },
      { sellerName: 'U.S. Postal Service', sellerUrl: 'https://usps.com/', isListing: true },
      { sellerName: 'UPS', sellerUrl: 'https://ups.com/', isListing: true },


      //Outdoor Recreation, Sporting and Camping
      { sellerName: 'REI', sellerUrl: 'https://rei.com/', isListing: true },
      { sellerName: 'Backcountry', sellerUrl: 'https://backcountry.com/', isListing: true },
      { sellerName: 'The North Face', sellerUrl: 'https://thenorthface.com/', isListing: true },
      { sellerName: "Dick's Sporting Goods", sellerUrl: 'https://dickssportinggoods.com/', isListing: true },
      { sellerName: 'Summit Hut', sellerUrl: 'https://summithut.com/', isListing: true },
      { sellerName: 'Patagonia', sellerUrl: 'https://patagonia.com/', isListing: true },
      { sellerName: 'CampSaver', sellerUrl: 'https://campsaver.com/', isListing: true },
      { sellerName: 'Salomon', sellerUrl: 'https://salomon.com/', isListing: true },
      { sellerName: 'Big 5 Sporting Goods', sellerUrl: 'https://big5sportinggoods.com/', isListing: true },
      { sellerName: 'Nike', sellerUrl: 'https://nike.com/', isListing: true },
      { sellerName: 'Fanatics', sellerUrl: 'https://fanatics.com/', isListing: true },
      { sellerName: 'Champs Sports', sellerUrl: 'https://champssports.com/', isListing: true },
      { sellerName: 'Academy Sports', sellerUrl: 'https://academy.com/', isListing: true },


      // Shoes
      { sellerName: 'Zappos', sellerUrl: 'https://zappos.com/', isListing: true },
      { sellerName: '6PM', sellerUrl: 'https://6pm.com/', isListing: true },
      { sellerName: 'Foot Locker', sellerUrl: 'https://footlocker.com/', isListing: true },
      { sellerName: 'Nordstrom', sellerUrl: 'https://nordstrom.com/', isListing: true },
      { sellerName: 'Famous Footwear', sellerUrl: 'https://famousfootwear.com/', isListing: true },
      { sellerName: 'DSW', sellerUrl: 'https://dsw.com/', isListing: true },
      { sellerName: 'FarFetch', sellerUrl: 'https://farfetch.com/', isListing: true },
      { sellerName: 'MyTheresa', sellerUrl: 'https://mytheresa.com/', isListing: true },
      { sellerName: 'Nike', sellerUrl: 'https://nike.com/', isListing: true },
      { sellerName: 'Steve Madden', sellerUrl: 'https://stevemadden.com/', isListing: true },
      { sellerName: 'Road Runner Sports', sellerUrl: 'https://roadrunnersports.com/', isListing: true },
      { sellerName: 'On', sellerUrl: 'https://on-running.com/', isListing: true },
      { sellerName: 'New Balance', sellerUrl: 'https://newbalance.com/', isListing: true },
      { sellerName: 'Crocs', sellerUrl: 'https://crocs.com/', isListing: true },
      { sellerName: 'Dansko', sellerUrl: 'https://dansko.com/', isListing: true },


      // Storage
      { sellerName: 'CubeSmart', sellerUrl: 'https://cubesmart.com/', isListing: true },
      { sellerName: 'Extra Space Storage', sellerUrl: 'https://extraspace.com/', isListing: true },
      { sellerName: 'Life Storage', sellerUrl: 'https://lifestorage.com/', isListing: true },
      { sellerName: 'Public Storage', sellerUrl: 'https://publicstorage.com/', isListing: true },
      { sellerName: 'Simply Self Storage', sellerUrl: 'https://simplyss.com/', isListing: true },
      { sellerName: 'Price Self Storage', sellerUrl: 'https://priceselfstorage.com/', isListing: true },


      // Therapy
      { sellerName: 'Better Help', sellerUrl: 'https://betterhelp.com/', isListing: true },
      { sellerName: 'Brightside', sellerUrl: 'https://brightside.com/', isListing: true },
      { sellerName: 'Talkspace', sellerUrl: 'https://try.talkspace.com/', isListing: true },
      { sellerName: 'Calmerry', sellerUrl: 'https://us.calmerry.com/', isListing: true },
      { sellerName: 'Online-Therapy.com', sellerUrl: 'https://online-therapy.com/', isListing: true },
      { sellerName: 'Cerebral', sellerUrl: 'https://cerebral.com/', isListing: true },


      //Ticket Marketplaces
      { sellerName: 'Ticketmaster', sellerUrl: 'https://ticketmaster.com/', isListing: true },
      { sellerName: 'StubHub', sellerUrl: 'https://stubhub.com/', isListing: true },
      { sellerName: 'Live Nation', sellerUrl: 'https://livenation.com/', isListing: true },
      { sellerName: 'Vivid Seats', sellerUrl: 'https://vividseats.com/', isListing: true },
      { sellerName: 'Songkick', sellerUrl: 'https://songkick.com/', isListing: true },
      { sellerName: 'SeatGeek', sellerUrl: 'https://seatgeek.com/', isListing: true },



     //Travel and Booking
      { sellerName: 'Airbnb', sellerUrl: 'https://airbnb.com/', isListing: true },
      { sellerName: 'Booking.com', sellerUrl: 'https://booking.com/', isListing: true },
      { sellerName: 'Expedia', sellerUrl: 'https://expedia.com/', isListing: true },
      { sellerName: 'Kayak', sellerUrl: 'https://kayak.com/', isListing: true },
      { sellerName: 'Skyscanner', sellerUrl: 'https://skyscanner.com/', isListing: true },
      { sellerName: 'TripAdvisor', sellerUrl: 'https://tripadvisor.com/', isListing: true },
      { sellerName: 'Trivago', sellerUrl: 'https://trivago.com/', isListing: true },
      { sellerName: 'SmartFares', sellerUrl: 'https://smartfares.com/', isListing: true },
      { sellerName: 'Hotels.com', sellerUrl: 'https://hotels.com/', isListing: true },
      { sellerName: 'Priceline', sellerUrl: 'https://priceline.com/', isListing: true },
      { sellerName: 'CheapOair', sellerUrl: 'https://cheapoair.com/', isListing: true },
      { sellerName: 'Travelocity', sellerUrl: 'https://travelocity.com/', isListing: true },


     // Music Streaming
      { sellerName: 'Amazon Music HD', sellerUrl: 'https://music.amazon.com/', isListing: true },
      { sellerName: 'Apple Music', sellerUrl: 'https://music.apple.com/', isListing: true },
      { sellerName: 'Deezer', sellerUrl: 'https://deezer.com/', isListing: true },
      { sellerName: 'MixCloud', sellerUrl: 'https://mixcloud.com/', isListing: true },
      { sellerName: 'Pandora', sellerUrl: 'https://pandora.com/', isListing: true },
      { sellerName: 'SoundCloud', sellerUrl: 'https://soundcloud.com/', isListing: true },
      { sellerName: 'Spotify', sellerUrl: 'https://spotify.com/', isListing: true },
      { sellerName: 'Tidal', sellerUrl: 'https://tidal.com/', isListing: true },
      { sellerName: 'YouTube Music', sellerUrl: 'https://music.youtube.com/', isListing: true },
      { sellerName: 'Genius', sellerUrl: 'https://genius.com/', isListing: true },
      { sellerName: 'last.fm', sellerUrl: 'https://last.fm/', isListing: true },
      { sellerName: 'Jango', sellerUrl: 'https://jango.com/', isListing: true },
      { sellerName: 'Discogs', sellerUrl: 'https://discogs.com/', isListing: true },



      //Vacation Packages
      { sellerName: 'Virgin Voyages', sellerUrl: 'http://virginvoyages.com/', isListing: true },
      { sellerName: 'Sandals', sellerUrl: 'http://sandals.com/', isListing: true },
      { sellerName: 'Travelocity', sellerUrl: 'http://travelocity.com/', isListing: true },
      { sellerName: 'Expedia', sellerUrl: 'http://expedia.com/all-inclusive', isListing: true },
      { sellerName: 'Funjet', sellerUrl: 'http://funjet.com/', isListing: true },




      //Vacation Rentals
      { sellerName: 'Vrbo', sellerUrl: 'http://vrbo.com/', isListing: true },
      { sellerName: 'Airbnb', sellerUrl: 'http://airbnb.com/', isListing: true },
      { sellerName: 'HomeToGo', sellerUrl: 'http://hometogo.com/', isListing: true },
      { sellerName: 'FlipKey', sellerUrl: 'http://flipkey.com/', isListing: true },
      { sellerName: 'Vacasa', sellerUrl: 'http://vacasa.com/', isListing: true },



      //Veterinarians, Pet Insurance and Pet Care
      { sellerName: 'BetterVet', sellerUrl: 'http://bettervet.com/', isListing: true },
      { sellerName: 'Vetster', sellerUrl: 'http://vetster.com/', isListing: true },
      { sellerName: 'Nationwide', sellerUrl: 'http://petinsurance.com/', isListing: true },
      { sellerName: 'VCA Hospitals', sellerUrl: 'http://vcahospitals.com/', isListing: true },
      { sellerName: 'MetLife Pet Insurance', sellerUrl: 'http://metlifepetinsurance.com/', isListing: true },
      { sellerName: 'Spot Pet Insurance', sellerUrl: 'http://spotpetins.com/', isListing: true },
      { sellerName: 'The Humane Society', sellerUrl: 'http://humanesociety.org/', isListing: true },





      //Video Games

      { sellerName: 'Sony', sellerUrl: 'http://playstation.com/', isListing: true },
      { sellerName: 'Microsoft', sellerUrl: 'http://microsoft.com/', isListing: true },
      { sellerName: 'Nintendo', sellerUrl: 'http://nintendo.com/', isListing: true },
      { sellerName: 'Tencent', sellerUrl: 'http://game.qq.com/', isListing: true },
      { sellerName: 'Activision Blizzard', sellerUrl: 'http://activisionblizzard.com/', isListing: true },
      { sellerName: 'Electronic Arts', sellerUrl: 'http://ea.com/', isListing: true },
      { sellerName: 'Epic Games', sellerUrl: 'http://store.epicgames.com/', isListing: true },




       //Wine
      { sellerName: 'Drizly', sellerUrl: 'http://drizly.com', isListing: true },
      { sellerName: 'Naked Wines', sellerUrl: 'http://nakedwines.com', isListing: true },
      { sellerName: 'Totalwine.com', sellerUrl: 'http://totalwine.com', isListing: true },
      { sellerName: 'Wine.com', sellerUrl: 'http://wine.com', isListing: true },
      { sellerName: 'BevMo!', sellerUrl: 'http://bevmo.com', isListing: true },



      //Weddings and Parties
      { sellerName: 'Party Slate', sellerUrl: 'http://partyslate.com', isListing: true },
      { sellerName: 'Here Comes the Guide', sellerUrl: 'http://herecomestheguide.com', isListing: true },
      { sellerName: 'Wedding Spot', sellerUrl: 'http://wedding-spot.com', isListing: true },
      { sellerName: 'Eventective', sellerUrl: 'http://eventective.com', isListing: true },
      { sellerName: 'Eventup	marketing.', sellerUrl: 'http://eventup.com', isListing: true },
      { sellerName: 'Giggster', sellerUrl: 'http://giggster.com', isListing: true },
      { sellerName: 'WeddingWire', sellerUrl: 'http://weddingwire.com', isListing: true },
      { sellerName: 'Zola', sellerUrl: 'http://zola.com', isListing: true },
      { sellerName: 'Carats & Cake', sellerUrl: 'http://caratsandcake.com', isListing: true },


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

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

async function category() {
  const Nike = await prisma.category.upsert({
    where: { name: "Nike" },
    update: {},
    create: {
      name: "Nike",
      product: {
        create: [
          {
            name: "Nike Air Force 1 '07",
            desc: "Nike Air Force 1 '07",
            price: 1549000,
            stock: 10,
            imageUrl:
              "https://www.footlocker.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/1/01-NIKE-F34KBNIK5-NIKCW2288111-White.jpg",
          },
          {
            name: "Nike Air Max 1",
            desc: "Nike Air Max",
            price: 2199000,
            stock: 10,
            imageUrl:
              "https://www.footlocker.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/1/01-NIKE-FFSSBNIK5-NIKFD9082107-White.jpg",
          },
          {
            name: "Nike Dunk Low",
            desc: "Nike Dunk Low",
            price: 1129000,
            stock: 10,
            imageUrl:
              "https://www.footlocker.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/1/01-NIKE-F34KBNIK5-NIKCW1590600-Red.jpg",
          },
          {
            name: "Nike Dunk Low Retro",
            desc: "Nike Dunk Low Retro",
            price: 1549000,
            stock: 10,
            imageUrl:
              "https://www.footlocker.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/1/01-NIKE-F34KBNIK5-NIKDV0831103-White.jpg",
          },
          {
            name: "Nike Cortez",
            desc: "Nike Cortez",
            price: 1299000,
            stock: 10,
            imageUrl:
              "https://www.footlocker.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/1/01-NIKE-FFSSBNIK5-NIKDM4044100-White.jpg",
          },
          {
            name: "Nike V2K Run",
            desc: "Nike V2K Run",
            price: 1909000,
            stock: 10,
            imageUrl:
              "https://www.footlocker.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/1/01-NIKE-FFSSBNIK5-NIKFD0736101-White.jpg",
          },
          {
            name: "Nike P-6000",
            desc: "Nike P-6000",
            price: 1429000,
            stock: 10,
            imageUrl:
              "https://www.footlocker.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/1/01-NIKE-FFSSBNIK5-NIKCD6404103-White.jpg",
          },
          {
            name: "Nike Air Max 97",
            desc: "Nike Air Max 97",
            price: 1908000,
            stock: 10,
            imageUrl:
              "https://www.footlocker.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/1/01-NIKE-FFSSBNIK5-NIK921522011-Black.jpg",
          },
          {
            name: "W NIKE PHOENIX WAFFLE",
            desc: "W NIKE PHOENIX WAFFLE",
            price: 1549000,
            stock: 10,
            imageUrl:
              "https://www.footlocker.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/1/01-NIKE-FFSSBNIK5-NIKFD2196100-White.jpg",
          },
          {
            name: "FORCE 1 LOW EASYON LV8 1 (PS)",
            desc: "FORCE 1 LOW EASYON LV8 1 (PS)",
            price: 1169000,
            stock: 10,
            imageUrl:
              "https://www.footlocker.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/1/01-NIKE-FFSSBNIK5-NIKFZ5522161-Beige.jpg",
          },
        ],
      },
    },
  });

  const NewBalance = await prisma.category.upsert({
    where: { name: "New Balance " },
    update: {},
    create: {
      name: "New Balance",
      product: {
        create: [
          {
            name: '530 "low-top"',
            desc: "New Balance 530",
            price: 2261000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/19/52/47/28/19524728_43509670_1000.jpg",
          },
          {
            name: '530 "Steel Blue"',
            desc: "New Balance 530",
            price: 3874000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/94/96/04/22949604_53058718_1000.jpg",
          },
          {
            name: '530 "Mercury Blue"',
            desc: "New Balance 530",
            price: 3178000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/74/27/93/22742793_52752599_1000.jpg",
          },
          {
            name: '530 "silver/Khaki"',
            desc: "New Balance 530",
            price: 1707000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/28/58/43/22285843_52098863_1000.jpg",
          },
          {
            name: '530 "Mesh"',
            desc: "New Balance 530",
            price: 2055000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/72/89/21/22728921_52836365_1000.jpg",
          },
          {
            name: '530 "White/Blue"',
            desc: "New Balance 530",
            price: 2071000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/88/24/61/22882461_52914696_1000.jpg",
          },
          {
            name: '725V1 "Metallic Silver"',
            desc: "New Balance 725V1",
            price: 1897000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/93/89/52/22938952_52973393_1000.jpg",
          },
          {
            name: 'M2002R "Vintage Black White"',
            desc: "New Balance M200R",
            price: 2419000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/98/21/46/22982146_53062354_1000.jpg",
          },
          {
            name: 'X Kith 1906R "Black"',
            desc: "New Balance X Kith",
            price: 5202000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/23/22/70/44/23227044_53331342_1000.jpg",
          },
          {
            name: '1906R "Licorice"',
            desc: "New Balance 1906R",
            price: 2514000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/93/89/55/22938955_52973688_1000.jpg",
          },
        ],
      },
    },
  });

  const Adidas = await prisma.category.upsert({
    where: { name: "Adidas" },
    update: {},
    create: {
      name: "Adidas",
      product: {
        create: [
          {
            name: 'Samba OG "White/Black"',
            desc: "Adidas Samba OG",
            price: 1360000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/16/65/22/47/16652247_32587810_1000.jpg",
          },
          {
            name: "x Wales Bonner SL72 knitted",
            desc: "Adidas x Wales Bonner",
            price: 2893000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/20/67/39/60/20673960_50561608_1000.jpg",
          },
          {
            name: "Samba OG",
            desc: "Adidas Samba OG",
            price: 1249000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/18/78/65/19/18786519_40721703_1000.jpg",
          },
          {
            name: 'Campus 00s "Grey/White"',
            desc: "Adidas Campus",
            price: 2372000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/20/54/00/73/20540073_50479529_1000.jpg",
          },
          {
            name: 'Handball Spezial "low-top"',
            desc: "Adidas Handball Spezial",
            price: 1391000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/20/01/49/92/20014992_44905268_1000.jpg",
          },
          {
            name: 'Gazelle "Indoor"',
            desc: "Adidas Gazelle",
            price: 1280000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/20/03/83/25/20038325_44994617_1000.jpg",
          },
          {
            name: 'Handball Spezial "White/Grey"',
            desc: "Adidas Handball Spezial",
            price: 2182000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/21/47/91/30/21479130_51590046_1000.jpg",
          },
          {
            name: 'Campus suede "low-stop"',
            desc: "Adidas Campus",
            price: 2308000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/21/74/44/61/21744461_51634314_1000.jpg",
          },
          {
            name: 'Forum Low "White/Black"',
            desc: "Adidas Forum Low",
            price: 1454000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/19/20/88/30/19208830_42071453_1000.jpg",
          },
          {
            name: 'Samba X "Wales Bonner"',
            desc: "Adidas x Wales Bonner",
            price: 10389000,
            stock: 3,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/21/07/14/73/21071473_51067042_1000.jpg",
          },
        ],
      },
    },
  });

  const Asics = await prisma.category.upsert({
    where: { name: "Asics" },
    update: {},
    create: {
      name: "Asics",
      product: {
        create: [
          {
            name: 'GEL-1130 "Shark Skin"',
            desc: "Asics Gel-1130",
            price: 2893000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/50/01/64/22500164_52683718_1000.jpg",
          },
          {
            name: 'GEL-Kayano 14 "Birch/Dark Pewter"',
            desc: "Asics Gel-Kayano 14",
            price: 2893000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/21/47/91/30/21479130_51590046_1000.jpg",
          },
          {
            name: 'GEL-Kayano 14 "Metallic Plum"',
            desc: "Asics Gel-Kayano 14",
            price: 3352000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/20/76/79/16/20767916_50868138_1000.jpg",
          },
          {
            name: "Gel-Quantum Kinetic",
            desc: "Asics Gel-Quantum",
            price: 4111000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/89/38/41/22893841_53043467_1000.jpg",
          },
          {
            name: 'Gel-Kayano 14 "Black Pure Silver"',
            desc: "Asics Gel-Kayano 14",
            price: 2467000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/63/77/19/22637719_52618715_1000.jpg",
          },
          {
            name: 'Gel-Lyte III OG "X Atmos X Sean WotherSpoon"',
            desc: "Asics Gel-Lyte III OG",
            price: 2735000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/15/76/29/48/15762948_28692876_1000.jpg",
          },
          {
            name: 'Gel-Lyte V "Re: Collaboration"',
            desc: "Asics Gel-Lyte V",
            price: 3194000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/21/51/63/35/21516335_51452125_1000.jpg",
          },
          {
            name: "Gel-Venture 6",
            desc: "Asics Gel-Venture 6",
            price: 2134000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/84/96/79/22849679_52992394_1000.jpg",
          },
          {
            name: 'GEL-NYC "Graphite"',
            desc: "Asics Gel-NYC",
            price: 2530000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/70/69/75/22706975_52683817_1000.jpg",
          },
          {
            name: 'GEL-NYC "Ivory /Grey Clay"',
            desc: "Asics Gel-NYC",
            price: 2735000,
            stock: 5,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/19/54/32/22195432_51925086_1000.jpg",
          },
        ],
      },
    },
  });

  const Puma = await prisma.category.upsert({
    where: { name: "Puma" },
    update: {},
    create: {
      name: "Puma",
      product: {
        create: [
          {
            name: 'Palermo OG "Silver Sky/Cayenne Pepper/Gum"',
            desc: "Puma Palermo OG",
            price: 1186000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/20/98/60/68/20986068_50971806_1000.jpg",
          },
          {
            name: "Suede Classic Sneakers",
            desc: "Puma Suede Classic Sneakers",
            price: 616000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/14/89/51/31/14895131_24180576_1000.jpg",
          },
          {
            name: 'Palermo "Puma White/Vapor Gray/Gum"',
            desc: "Puma Palermo",
            price: 1597000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/22/24/32/03/22243203_52079965_1000.jpg",
          },
          {
            name: "Super Team OG Panelled",
            desc: "Puma Super Team OG Panelled",
            price: 1660000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/23/16/33/60/23163360_53228585_1000.jpg",
          },
          {
            name: "VTG Hairy Suede",
            desc: "Puma VTG Hairy Suede",
            price: 1454000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/19/69/11/72/19691172_44341295_1000.jpg",
          },
          {
            name: "RS-X Toys",
            desc: "Puma RS-X Toys",
            price: 2846000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/14/14/72/70/14147270_18767491_1000.jpg",
          },
          {
            name: "X Maison Kitsuné Ralph Sampson 70",
            desc: "Puma x Maison Kitsuné",
            price: 609000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/16/65/65/98/16656598_32577230_1000.jpg",
          },
          {
            name: "X AMI Slipstream LO 2",
            desc: "Puma x AMI Slipstream LO 2",
            price: 2387000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/19/52/52/58/19525258_43522307_1000.jpg",
          },
          {
            name: "Suede Classic XXI",
            desc: "Puma Suede Classic XXI",
            price: 1881000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/19/67/37/64/19673764_43940200_1000.jpg",
          },
          {
            name: 'X Staple Suede "Year of the Dragon"',
            desc: "Puma x Staple Suede",
            price: 2024000,
            stock: 10,
            imageUrl:
              "https://cdn-images.farfetch-contents.com/23/09/01/24/23090124_53258532_1000.jpg",
          },
        ],
      },
    },
  });
  console.log(Nike, NewBalance, Adidas, Asics, Puma);
}

async function userAdmin() {
  const password = "admin123";
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const Admin = await prisma.userAdmin.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
    },
  });
  console.log(Admin);
}

async function user() {
  const password = "admin123";
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: "Sudo",
      email: "admin123@gmail.com",
      password: hashedPassword,
      phone: "1122334455",
      address: "Br4der shop",
      gender: "undefined",
      profileImage: "admin.photobox",
    },
  });
  console.log(user);
}

userAdmin()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

category()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

user()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });

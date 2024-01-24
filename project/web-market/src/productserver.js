const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());

const products = [
  {
    id: 1,
    title: 'iPhone 15 (używany)',
    description: 'Teraz jest szansa go mieć, twój wymarzony telefon',
    thumbnail: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,pr_2014_2_27_15_1_54_753.jpg',
    category: 'Electronics',
    price: 499.99,
    owner: 'user1',
  },
  {
    id: 2,
    title: 'Ziemniok',
    description: 'Polski ziemniok, Promocja!!!',
    thumbnail:
      'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSm0Yi_nRWF41eEdhHLrOfaBsDM3tIUZeoi1FPT1_M3_ndYtgOPOxafhoMAI-ywT_Ac',
    category: 'Food',
    price: 999.99,
    owner: 'admin1',
  },
  {
    id: 3,
    title: 'pasta',
    description: 'pasta do zębów',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUeMh8RZEHXIx7SewphRGcS2kJAC-fYmQRrL6NwldqPN-jP2JDD23VpVMBEp15losVjI&usqp=CAU',
    category: 'Other',
    price: 99.99,
    owner: 'user1',
  },
  {
    id: 4,
    title: 'Smartwatch XYZ',
    description: 'Nowy model smartwatcha z najnowszymi funkcjami',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuuEWoh8qeV12KsRAYom4W1kNyOpLCFotMtw&usqp=CAU',
    category: 'Electronics',
    price: 199.99,
    owner: 'admin1',
  },
  {
    id: 5,
    title: 'Bluza z nadrukiem',
    description: 'Stylowa koszulka z unikalnym nadrukiem',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UzBhTz102th0eCwblWLRYo4okXTImhXAbJTEHECVGiyiI5sK5F58MYVYiQdzfQ9bSyQ&usqp=CAU',
    category: 'Clothes',
    price: 29.99,
    owner: 'user1',
  },
  {
    id: 6,
    title: 'Kawa Arabica',
    description: 'Kawa najwyższej jakości, idealna na każdą porę dnia',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPBxCnruP0FchWLudwLovPL9KvmxFZBEq8H8X_NP8-Z0ltAzn4k4AuxCdesygaqbcnGLk5yVM4vpIVa43SivsCQ9G7uYM_Ug&usqp=CAE',
    category: 'Food',
    price: 49.99,
    owner: 'admin2',
  },
  {
    id: 7,
    title: 'Laptop ProBook X',
    description: 'Wydajny laptop do pracy i rozrywki',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNm4HtmG0flHjcj5i2gWKUSM4AGWiIPw22Eg&usqp=CAU',
    category: 'Electronics',
    price: 899.99,
    owner: 'user1',
  },
  {
    id: 8,
    title: 'Oczyszczacz powietrza',
    description: 'Zadbaj o czyste powietrze w swoim domu',
    thumbnail: 'https://tanisklepmedyczny.pl/environment/cache/images/0_0_productGfx_2201/Oczyszczacz-powietrza-ze-sterylizacja-UV-TruSens-Z-1000-TaniSklepMedyczny.jpg',
    category: 'Other',
    price: 149.99,
    owner: 'user2',
  },
  {
    id: 9,
    title: 'Słuchawki Bluetooth',
    description: 'Bezprzewodowe słuchawki z doskonałym dźwiękiem',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBvMje6CLLSGLeNh48McSxNxycgzd04jPGUVNiK3M6h-zL7z11FcIdt_ZAZDhgyER7_s&usqp=CAU',
    category: 'Electronics',
    price: 79.99,
    owner: 'user1',
  },
  {
    id: 10,
    title: 'Nowoczesny stół',
    description: 'Elegancki stół do jadalni z nowoczesnym designem',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZPqX0LJZLn_okljB5LmkBilDWghE-nH_PC1mg-ZEGf_uTk-5VLVBC2AxnotZvhrGbI8&usqp=CAU',
    category: 'Other',
    price: 349.99,
    owner: 'user2',
  },
  {
    id: 11,
    title: 'Ubranka dla niemowląt',
    description: 'Pierwszy rowerek dla malucha do nauki równowagi',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnvA1xGOa6iH5UAA5kuXxAnGNWmJlBs4J0Q&usqp=CAU',
    category: 'Kids',
    price: 59.99,
    owner: 'user2',
  },
  {
    id: 12,
    title: 'Myszka komputerowa gamingowa',
    description: 'Precyzyjna myszka dla pasjonatów gier komputerowych',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjlFUwaiIITVQOCwvYBiKvi9PS-XZQYMriw&usqp=CAU',
    category: 'Electronics',
    price: 39.99,
    owner: 'admin1',
  },
  {
    id: 13,
    title: 'Książka "Podróż przez czas"',
    description: 'Najnowsza powieść science fiction',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfOkFrPKniS_yPzGHNyBmzX4CH6LnH-KoBg&usqp=CAU',
    category: 'Other',
    price: 19.99,
    owner: 'user1',
  },
  {
    id: 14,
    title: 'Rower miejski',
    description: 'Stylowy rower na codzienne przejażdżki po mieście',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HM84YmsVuuXQ2qPPA-g7tql_wZAEZutqDtJrZAk8tGJzEPHkYvPvItUR7I9V2CcdK2E&usqp=CAU',
    category: 'Other',
    price: 299.99,
    owner: 'user1',
  },
  {
    id: 15,
    title: 'Zestaw garnków',
    description: 'Najwyższej jakości garnki do gotowania',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnaZOa372s-oPqifR8-bEruSmpZXKFvKbkg&usqp=CAU',
    category: 'Home',
    price: 129.99,
    owner: 'user1',
  },
  {
    id: 16,
    title: 'Smart TV 4K',
    description: 'Najnowszy model telewizora z rozdzielczością 4K',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05gSqV36y3uc0uEPbNidbLz5g1dCZpj3rVw&usqp=CAU',
    category: 'Electronics',
    price: 799.99,
    owner: 'admin2',
  },
  {
    id: 17,
    title: 'Piękny naszyjnik',
    description: 'Elegancki naszyjnik z błyszczącymi kamieniami',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKDA3SsAcZ8xOb8kX7RlDVi7DtXWRJxRVf0w&usqp=CAU',
    category: 'Other',
    price: 149.99,
    owner: 'user2',
  },
  {
    id: 18,
    title: 'Konsola do gier',
    description: 'Nowoczesna konsola dla zapalonych graczy',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0_ZaloStDWkHaHWX4iKi4DGj_Ngpo7PRtQ&usqp=CAU',
    category: 'Electronics',
    price: 499.99,
    owner: 'admin1',
  },
  {
    id: 19,
    title: 'Elegancka sukienka',
    description: 'Sukienka wieczorowa idealna na specjalne okazje',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOaLSCnl0uKRsUnJwa9s7D30pdrVwkXvBfQ&usqp=CAU',
    category: 'Clothes',
    price: 79.99,
    owner: 'user2',
  },
  {
    id: 20,
    title: 'Smartfon Android',
    description: 'Nowoczesny smartfon z systemem Android',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_wTMf6YVwLyxI_rJnOcXOc8aLn4xo4M7AQ&usqp=CAU',
    category: 'Electronics',
    price: 349.99,
    owner: 'admin2',
  },
  {
    id: 21,
    title: 'Przenośna drukarka',
    description: 'Drukuj dokumenty w dowolnym miejscu',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbR1MOCwzlRguP3IeWi73ZVRzTIXjzNOxiPg&usqp=CAU',
    category: 'Electronics',
    price: 129.99,
    owner: 'user1',
  },
  {
    id: 22,
    title: 'Zestaw do manicure',
    description: 'Profesjonalny zestaw do pielęgnacji paznokci',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl90yxz-baNl-_Vn6JK51IdjBWBU_N82R9qqamqBmaEm6yv-xLcrihUfcaqW9ofUgmpEg&usqp=CAU',
    category: 'Other',
    price: 34.99,
    owner: 'user1',
  },
  {
    id: 23,
    title: 'Drewniana deska do krojenia',
    description: 'Trwała deska do krojenia z litego drewna',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHH_yDJbJvpgMJnBDHZEqsdGnEgrQFNsM2fw&usqp=CAU',
    category: 'Home',
    price: 24.99,
    owner: 'admin1',
  },
  {
    id: 24,
    title: 'Zegarek męski',
    description: 'Elegancki zegarek męski z automatycznym mechanizmem',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpQDgx8Wix9TwwxsidOlYC5WUwatDOgakwA&usqp=CAU',
    category: 'Clothes',
    price: 199.99,
    owner: 'user2',
  },
  {
    id: 25,
    title: 'Rowerek biegowy dla dzieci',
    description: 'Pierwszy rowerek dla malucha do nauki równowagi',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MhhmdpJvaa3PXk-Ln9Uc1ljAYPx4UB4aWg&usqp=CAU',
    category: 'Other',
    price: 49.99,
    owner: 'admin2',
  },
  {
    id: 26,
    title: 'Kamera sportowa 4K',
    description: 'Nagrywaj swoje przygody w najwyższej jakości',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOn51kdNP0W8XTiOIR-iIi3Zc5Z1Y0Q54-Fbs3fOe3-J-35JvE4zBbgHUSu-pmv34APQk&usqp=CAU',
    category: 'Electronics',
    price: 179.99,
    owner: 'admin2',
  },
  {
    id: 27,
    title: 'Koszulka z nadrukiem',
    description: 'Unikalna koszulka, która wyróżni Twój styl',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36nzIx3Ikp0QxCEn0ywvuMgEfbXzUR_YhRw&usqp=CAU',
    category: 'Clothes',
    price: 24.99,
    owner: 'user1',
  },
  {
    id: 28,
    title: 'Głośnik Bluetooth',
    description: 'Bezprzewodowy głośnik do słuchania ulubionej muzyki',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LrO_mxUiyC1xJZMM1ne88vl3usfDWk-EhsFvkSXjonsOJvPZQmMPrw8j97OwngzN5aU&usqp=CAU',
    category: 'Electronics',
    price: 49.99,
    owner: 'user2',
  },
  {
    id: 29,
    title: 'Puzzle dla dzieci',
    description: 'Zestaw kolorowych puzzli dla najmłodszych',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0IT0fOzIHa-wgtiQE_EIN-EfcT270Us_uQ&usqp=CAU',
    category: 'Home',
    price: 14.99,
    owner: 'admin1',
  },
  {
    id: 30,
    title: 'Łóżko drewniane',
    description: 'Eleganckie łóżko z litego drewna',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7Cpgsg74B3B75WYGwdlFQz8_RCVTBTOKzQ&usqp=CAU',
    category: 'Home',
    price: 299.99,
    owner: 'user2',
  },
  {
    id: 31,
    title: 'Monitor gamingowy',
    description: 'Szeroki monitor do pełnych wrażeń podczas gry',
    thumbnail: 'https://media.bechtle.com/is/180712/1c4b3d4ee288fc9434f5175bf56070570/c3/gallery/831ede26a9c74f29adda9372134cd83d?version=0',
    category: 'Electronics',
    price: 399.99,
    owner: 'admin2',
  },
  {
    id: 32,
    title: 'Szczoteczka elektryczna',
    description: 'Nowoczesna szczoteczka do zębów dla całej rodziny',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJZojZ9iA3UtGE0dCm91U0c-TWdfwFO5PRazZsRw2dmzkJjj0xg1c3GArymCXTxj35UI&usqp=CAU',
    category: 'Electronics',
    price: 39.99,
    owner: 'user1',
  },
  {
    id: 33,
    title: 'Kubki termiczne',
    description: 'Zestaw eleganckich kubków na gorące napoje',
    thumbnail: 'https://www.campingshop.pl/images/items/56918/kubek-termiczny-octaroma-clasico-018l-carmine-red-wacaco-20220406-1_top.jpg',
    category: 'Home',
    price: 19.99,
    owner: 'user2',
  },
  {
    id: 34,
    title: 'Fotel biurowy',
    description: 'Komfortowy fotel do pracy i nauki',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8D_uYEkvyslsNMFf8T9FlKVw0jjZq3xSwQ&usqp=CAU',
    category: 'Home',
    price: 129.99,
    owner: 'admin1',
  },
  {
    id: 35,
    title: 'Prostownica do włosów',
    description: 'Prostownica do szybkiego i skutecznego układania włosów',
    thumbnail: 'https://ph-progress.pl/wp-content/uploads/2019/07/Prostownica-Tourmaline-Nano-Silver-600x600.jpg',
    category: 'Electronics',
    price: 34.99,
    owner: 'admin2',
  },
  {
    id: 36,
    title: 'Torba podróżna',
    description: 'Praktyczna torba na krótkie wypady',
    thumbnail: 'https://hurtowniawalizek.pl/16734-large_default/torba-podrozna-a1-crossover.jpg',
    category: 'Clothes',
    price: 29.99,
    owner: 'user1',
  },
  {
    id: 37,
    title: 'Owocowy zestaw herbat',
    description: 'Zestaw aromatycznych herbat owocowych',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ37AyMkH2cXuLk2hGf53T2qogQvZvLDVfAQ&usqp=CAU',
    category: 'Food',
    price: 19.99,
    owner: 'user2',
  },
  {
    id: 38,
    title: 'Gra planszowa dla rodziny',
    description: 'Rozwijająca i zabawna gra planszowa dla całej rodziny',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3EZ80RPenKkdYGsU_PrAuPhTJ49Kd0Bo1Ag&usqp=CAU',
    category: 'Other',
    price: 39.99,
    owner: 'admin1',
  },
  {
    id: 39,
    title: 'Zestaw do makijażu',
    description: 'Profesjonalny zestaw do makijażu dla każdej kobiety',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdp_GC9J-1FTnxg8sikZ1ISNI0QTQPaevvBP_rkvqmAybj3XiVbYQHVUZThw5tb46J5M&usqp=CAU',
    category: 'Other',
    price: 49.99,
    owner: 'user2',
  },
  {
    id: 40,
    title: 'Termos na kawę',
    description: 'Termos na świeżą kawę zawsze pod ręką',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSs4Y86OsOaEOvTJuaH5SBIsbIy2j02WrbKMdsMUtwGj7M1dssf7aLbScIyJ4Dbe1Rws&usqp=CAU',
    category: 'Home',
    price: 24.99,
    owner: 'user1',
  },
];


app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const newProduct = req.body;

  if (!newProduct.title || !newProduct.description || !newProduct.thumbnail || !newProduct.price || !newProduct.owner || !newProduct.category) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newProductId = products.length > 0 ? Math.max(...products.map((product) => product.id)) + 1 : 1;

  const newProductWithId = {
    id: newProductId,
    title: newProduct.title,
    description: newProduct.description,
    category: newProduct.category,
    thumbnail: newProduct.thumbnail,
    price: newProduct.price,
    owner: newProduct.owner
  };

  products.push(newProductWithId);

  res.status(201).json(newProductWithId);
});

app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const index = products.findIndex((product) => product.id === productId);

  if (index !== -1) {
    const deletedProduct = products.splice(index, 1)[0];
    res.json(deletedProduct);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;

  const index = products.findIndex((product) => product.id === productId);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find((product) => product.id === productId);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

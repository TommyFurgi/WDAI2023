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
    thumbnail: 'https://i.dummyjson.com/data/products/1/1.jpg',
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

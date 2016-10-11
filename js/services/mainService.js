angular.module('eStore')
.service('mainService', function($q, $http) {

this.title = 'ARTICLE';
this.shopLink = 'NEW ARRIVALS';
this.footerInfoLinks = ['Returns & Exchanges', 'Terms Of Service', 'Privacy', 'Contact', 'About'];

var cartItems = [];
var brands = ['3sixteen','A.P.C','Apolis','Billy Reid','Collective Quarterly','Corridor','Deus Ex Machina','Filson','Gant','Gitman Vintage','Grayers','Industry of all Nations','Manready Mercantile','Mollusk','Noble Denim','Quoddy','Rogue Territory','Saturdays NYC','Shinola','Steven Alan','The Hill-Side','Tanner Goods','Todd Snyder','Todd Snyder + Champion'];
var departments = ['Shop All','Accessories','Bags','Blazers & Suits','Bottoms','Denim','Footwear','Grooming','Home','Neckwear','Outerwear','Shirts','Tops'];


this.itemsInCart = function() {
  var totalItems = 0;
  for (var i = 0; i < cartItems.length; i++) {
    console.log(parseInt(cartItems[i].quantity))
    totalItems += parseInt(cartItems[i].quantity);
    console.log(totalItems);
  }
  return totalItems;
}


this.getDepartments = function() {
  return departments;
}
this.getBrands = function() {
  return brands;
}

this.removeFromCart = function(id) {
  for (var i = 0; i < cartItems.length; i++) {
    console.log(cartItems[i]);
    if (cartItems[i].id === id) {
      console.log(cartItems[i]);
      cartItems.splice(i, 1);
      console.log(cartItems);

    }
  }
}

this.getTotal = function() {
  var cartTotal = 0;
  for (var i = 0; i < cartItems.length; i++) {
    cartTotal = cartTotal + (cartItems[i].price * cartItems[i].quantity);
  }
  return cartTotal;
}

this.getCart = function() {
    return cartItems;
}


this.addToCart = function(obj) {
  cartItems.push(obj);
  console.log(cartItems);
};

var clothes = [
  {
    id: 1,
    image: 'http://cdn.shopify.com/s/files/1/0238/2599/products/The_Hill-Side_Scarf_Wool_Blend_Galaxy_Tweed_Oatmeal_SC1-386_X1_1024x1024_2e4f5b65-91d5-4349-ac4d-c9b07e01271e_large.jpg?v=1474485921',
    name: 'GALAXAY TWEED SCARF BY THE HILL-SIDE',
    brand: 'THE HILL-SIDE',
    quantity: 0,
    price: 90,
    size: '21" x 70"',
    edge: 'Non-selvedge, finished edges',
    made: 'MADE IN USA',
    inspired: "Inspired by a vintage US Military helicopter pilot's jacket",
    zipper: 'Two-way zipper',
    cuffs: 'Storm cuffs',
    natural: 'Natural cotton twill tape label'

  },
  {
    id: 2,
    image: 'http://cdn.shopify.com/s/files/1/0238/2599/products/The_Hill-Side_Scarf_Wool_Blend_Windowpane_Check_Brown_Black_SC1-382_X1_1024x1024_396a0204-3de7-4db2-ba9f-ca6c9344fa69_large.jpg?v=1474485680',
    name: 'WINDOWPANE SCARF BY THE HILL-SIDE',
    brand: 'THE HILL-SIDE',
    quantity: 0,
    price: 90,
    size: '21" x 70"',
    edge: 'Non-selvedge, finished edges',
    made: 'MADE IN USA',
    inspired: "Inspired by a vintage US Military helicopter pilot's jacket",
    zipper: 'Two-way zipper',
    cuffs: 'Storm cuffs',
    natural: 'Natural cotton twill tape label'
  },
  {
    id: 3,
    image: 'http://cdn.shopify.com/s/files/1/0238/2599/products/The_Hill-Side_Scarf_Extra_Neppy_Indigo_Chambray_SC1-324_X1_1024x1024_f387f6a2-d23c-4fd7-9722-6a7c69a8af42_large.jpg?v=1474486485',
    name: 'EXTRA NEPPY INDIGO SCARF BY THE HILL-SIDE',
    brand: 'THE HILL-SIDE',
    quantity: 0,
    price: 90,
    size: '21" x 70"',
    edge: 'Non-selvedge, finished edges',
    made: 'MADE IN USA',
    inspired: "Inspired by a vintage US Military helicopter pilot's jacket",
    zipper: 'Two-way zipper',
    cuffs: 'Storm cuffs',
    natural: 'Natural cotton twill tape label'
  },
  {
    id: 4,
    image: 'http://cdn.shopify.com/s/files/1/0238/2599/products/The_Hill-Side_Astro_Cargo_Shirt_Nylon_Polar_Fleece_Navy_SH6-402_X1_1024x1024_7940a429-b5ef-4316-b257-2540b0d9dc3d_large.jpg?v=1474484919',
    name: 'ASTRO CARGO SHIRT BY THE HILL-SIDE',
    brand: 'THE HILL-SIDE',
    quantity: 0,
    price: 285,
    size: '21" x 70"',
    edge: 'Non-selvedge, finished edges',
    made: 'MADE IN USA',
    inspired: "Inspired by a vintage US Military helicopter pilot's jacket",
    zipper: 'Two-way zipper',
    cuffs: 'Storm cuffs',
    natural: 'Natural cotton twill tape label'
  },
  {
    id: 5,
    image: 'http://cdn.shopify.com/s/files/1/0238/2599/products/mens-heavyseas-heather-grey-fall15_2048x2048_03a1b947-3a1b-47f8-85c5-db37576a8bdf_large.jpg?v=1473352775',
    name: 'HEAVY SEAS TEE BY MOLLUSK',
    brand: 'MOLLUSK',
    quantity: 0,
    price: 32,
    size: '21" x 70"',
    edge: 'Non-selvedge, finished edges',
    made: 'MADE IN USA',
    inspired: "Inspired by a vintage US Military helicopter pilot's jacket",
    zipper: 'Two-way zipper',
    cuffs: 'Storm cuffs',
    natural: 'Natural cotton twill tape label'
  },
  {
    id: 6,
    image: 'http://cdn.shopify.com/s/files/1/0238/2599/products/mens-cosmos-tee-heather-grey_2048x2048_da625326-f1e0-4703-be93-9cfcdf40c33b_large.jpg?v=1473351996',
    name: 'COSMOS TEE BY MOLLUSK',
    brand: 'MOLLUSK',
    quantity: 0,
    price: 42,
    size: '21" x 70"',
    edge: 'Non-selvedge, finished edges',
    made: 'MADE IN USA',
    inspired: "Inspired by a vintage US Military helicopter pilot's jacket",
    zipper: 'Two-way zipper',
    cuffs: 'Storm cuffs',
    natural: 'Natural cotton twill tape label'
  },
  {
    id: 7,
    image: 'http://cdn.shopify.com/s/files/1/0238/2599/products/Screen_Shot_2016-09-15_at_3.53.35_PM_large.png?v=1473969461',
    name: 'FISHERMAN SWEATER BY MOLLUSK',
    brand: 'MOLLUSK',
    quantity: 0,
    price: 128,
    size: '21" x 70"',
    edge: 'Non-selvedge, finished edges',
    made: 'MADE IN USA',
    inspired: "Inspired by a vintage US Military helicopter pilot's jacket",
    zipper: 'Two-way zipper',
    cuffs: 'Storm cuffs',
    natural: 'Natural cotton twill tape label'
  },
  {
    id: 8,
    image: 'http://cdn.shopify.com/s/files/1/0238/2599/products/Screen_Shot_2016-09-15_at_3.54.16_PM_large.png?v=1473969396',
    name: 'JEFFERY SWEATER BY MOLLUSK',
    brand: 'MOLLUSK',
    quantity: 0,
    price: 90,
    size: '21" x 70"',
    edge: 'Non-selvedge, finished edges',
    made: 'MADE IN USA',
    inspired: "Inspired by a vintage US Military helicopter pilot's jacket",
    zipper: 'Two-way zipper',
    cuffs: 'Storm cuffs',
    natural: 'Natural cotton twill tape label'
  },
  {
    id: 9,
    image: 'http://cdn.shopify.com/s/files/1/0238/2599/products/Mens-BuilderJacket-Navy-Front_2048x2048_6f4c54b6-f886-41b4-8c17-bedb3792b40e_large.jpg?v=1473352385',
    name: 'BUILDER JACKET BY MOLLUSK',
    brand: 'MOLLUSK',
    quantity: 0,
    price: 140,
    size: '21" x 70"',
    edge: 'Non-selvedge, finished edges',
    made: 'MADE IN USA',
    inspired: "Inspired by a vintage US Military helicopter pilot's jacket",
    zipper: 'Two-way zipper',
    cuffs: 'Storm cuffs',
    natural: 'Natural cotton twill tape label'
  },
  {
    id: 10,
    image: 'http://cdn.shopify.com/s/files/1/0238/2599/products/source_photo_large.jpg?v=1472838727',
    name: 'OLIVE WAXED COTTON M65 BY CORRIDOR',
    brand: 'CORRIDOR',
    quantity: 0,
    price: 90,
    size: '21" x 70"',
    edge: 'Non-selvedge, finished edges',
    made: 'MADE IN USA',
    inspired: "Inspired by a vintage US Military helicopter pilot's jacket",
    zipper: 'Two-way zipper',
    cuffs: 'Storm cuffs',
    natural: 'Natural cotton twill tape label'
  },
  {
    id: 11,
    image: 'http://cdn.shopify.com/s/files/1/0238/2599/products/13720782_1119942314715758_428270208_n_large.jpg?v=1472839253',
    name: 'DUCK DYED INDIGO CHORE COAT BY CORRIDOR',
    brand: 'CORRIDOR',
    quantity: 0,
    price: 90,
    size: '21" x 70"',
    edge: 'Non-selvedge, finished edges',
    made: 'MADE IN USA',
    inspired: "Inspired by a vintage US Military helicopter pilot's jacket",
    zipper: 'Two-way zipper',
    cuffs: 'Storm cuffs',
    natural: 'Natural cotton twill tape label'
  },
  {
    id: 12,
    image: 'http://cdn.shopify.com/s/files/1/0238/2599/products/12385099_1069675246462435_811253882_n_large.jpg?v=1472839910',
    name: 'BUFFALO CHECK SHIRT BY CORRIDOR',
    brand: 'CORRIDOR',
    quantity: 0,
    price: 90,
    size: '21" x 70"',
    edge: 'Non-selvedge, finished edges',
    made: 'MADE IN USA',
    inspired: "Inspired by a vintage US Military helicopter pilot's jacket",
    zipper: 'Two-way zipper',
    cuffs: 'Storm cuffs',
    natural: 'Natural cotton twill tape label'
  },
]

this.getClothes = function() {
  return clothes;
}

this.getOneItem = function(id) {
  var defer = $q.defer();
  for (var i = 0; i < clothes.length; i++) {
    if (id == clothes[i].id) {
      var newItem = clothes[i];
      defer.resolve(newItem);
    }
  }
  return defer.promise;
}



})

const express = require('express');

// 
const { errorHandler } = require('../middleware/index');
const { Image } = require('../models/image');
const { Car } = require('../models/car');

const auth = require('../controllers/auth');
const images = require('../controllers/images');
const cars = require('../controllers/cars');
// 

const { User } = require('../models/user');
const { Brand } = require('../models/brand');
const { Category } = require('../models/category');
const { Flyer } = require('../models/flyer');
const { Product } = require('../models/product');
const { Client } = require('../models/client');
const { Wishlist } = require('../models/wishlist');

const users = require('../controllers/users');
const brands = require('../controllers/brands');
const categories = require('../controllers/categories');
const flyers = require('../controllers/flyers');
const products = require('../controllers/products');
const clients = require('../controllers/clients');
const wishlists = require('../controllers/wishlists');

const models = { User, Car, Image, Brand, Category, Flyer, Product, Client, Wishlist };

const routersInit = config => {
  const router = express();

  router.use('/auth', auth(models, { config }));
  router.use('/cars', cars(models, { config }));
  router.use('/images', images(models, { config }));
  
  router.use('/users', users(models, { config }));
	router.use('/brands', brands(models, { config }));
	router.use('/categories', categories(models, { config }));
	router.use('/flyers', flyers(models, { config }));
	router.use('/products', products(models, { config }));
	router.use('/clients', clients(models, { config }));
	router.use('/wishlists', wishlists(models, { config }));

  router.use(errorHandler);
  return router;
};

module.exports = routersInit;

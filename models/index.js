// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: {model: ProductTag, unique: false},

});
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: {model: ProductTag, unique: false},

});
// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

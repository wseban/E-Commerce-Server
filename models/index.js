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
Product.belongsToMany(ProductTag, {
  foreignKey: 'product_id',
});
Tag.belongsToMany(ProductTag, {
  foreignKey: 'tag_id',
});
// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

'use strict';

const Sequelize = require('sequelize');
const db = require('../config/sequalize');
const category_videos = require('./category_video');

const videos = db.define('videos', {
  title: {
    type: Sequelize.STRING,
  },
  link_video: {
    type: Sequelize.STRING,
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'categoryId',
  },
})

videos.belongsTo(category_videos, {
  foreignKey: 'categoryId', 
  as: 'category'
});

module.exports = videos;










// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class video extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   video.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'video',
//   });
//   return video;
// };
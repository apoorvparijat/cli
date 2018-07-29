#!/usr/bin/env node

console.info('~~~~ Sequelize running in transform-runtime mode with babel');

require('babel-register')({
  presets: [
    'env',
  ],
  plugins: [
    'transform-runtime'
  ]
});

console.info('~~~~ here0');
require('./sequelize');
console.info('~~~~ here0');

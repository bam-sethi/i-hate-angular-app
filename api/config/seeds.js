//SEED DATA//

var mongoose = require('mongoose');
var Post = require('../models/Angular');

mongoose.connect('mongodb://localhost:27017/angular');

var post1 = new Post({
  title: 'Debugging in angular',
  author: 'Francois Hollande',
  content: 'Put a debugger in that debugger until you can debug the bug',
  photo: 'http://cdn.images.express.co.uk/img/dynamic/78/590x/Francois-Hollande-affair-453851.jpg',
  video: 'http://www.youtube.com/embed/9pFG6EAkJD4',
  quote: 'I am president of France'
});

post1.save(function(err, post){
  if(err) console.log(err)
  console.log('post1 saved', post)
});

var post2 = new Post({
  title: 'Angular Merkkkkkks',
  author: 'Angela Merkel',
  content: 'Angela Merkel thinks deporting children will help solve the Angular crisis',
  photo: 'http://images.zeit.de/politik/deutschland/2014-07/angela-royal/angela-royal-540x304.jpg',
  video: 'http://www.youtube.com/embed/LX_IX15wTLA',
  quote: 'I will bring you down'
});

post2.save(function(err, post){
  if(err) console.log(err)
  console.log('post2 saved', post)
});

var post3 = new Post({
  title: 'Angular is a dictatorship',
  author: 'Yanis Varafakous',
  content: 'Europe in its infinite wisdom decided to deal with this bankruptcy by loading the largest loan in human history on the weakest of shoulders … What we’ve been having ever since is a kind of fiscal waterboarding that has turned this nation into a debt colony. The eurozone resembles a fine riverboat that was launched on a still ocean in 2000. And then the first storm that hit it, in 2008, started creating serious structural problems for it. We started leaking water. And of course, the people in the third class, as in the Titanic, start feeling the drowning effects first.',
  photo: 'http://resources0.news.com.au/images/2015/06/04/1227382/988284-f11bc582-08e8-11e5-8dc7-b0c4f7af3b6c.jpg',
  video: 'http://www.youtube.com/embed/FgGwF64K2vQ',
  quote: 'It is an honour to have Bild trying to undermine me. The more they do it, the better I sleep at night.'
});

post3.save(function(err, post){
  if(err) console.log(err)
  console.log('post3 saved', post)
});

var post4 = new Post({
  title: 'REST',
  author: 'The Dalai Lama',
  content: 'Inner peace with restful angular',
  photo: 'http://golfingwiththedalailama.com/wp-content/uploads/2012/12/dalailama.jpg',
  video: 'http://www.youtube.com/embed/aGHzqwQU06g',
  quote: 'Matz is nice so we should be nice'
});

post4.save(function(err, post){
  if(err) console.log(err)
  console.log('post4 saved', post)
});
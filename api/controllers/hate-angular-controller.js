var Post = require('../models/Angular');


//GET

function getAll(req, res){
  Post.find(function(err, posts){
    if(err) console.log(err)
    res.json({posts: posts})
  });
};

//POST
function createPost(req, res){
  console.log('body:' + req.body);
  var post = new Post(req.body);

  post.save(function(err){
    if(err) console.log(err)

    res.json({post: post})
  })

}


module.exports = {
  getAll : getAll,
  createPost: createPost
}
module.exports.home = function(req,res){
    return res.render('home');
}

module.exports.signin = function(req,res){
    return res.render('signIn');
}

module.exports.signup = function(req,res){
    return res.render('signUp');
}
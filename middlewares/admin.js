let admins = ["Ada", "Greta", "Vim", "Tim"];

function admin (req, res, next){
    let user =req.query.user;
    if(user){
        admins.forEach(function(admin){
            if(user == admin){
                next()
            }
        })
        res.send("No tiene los privilegios para ingresar");
    } else {
        res.send("No se encontro el usuario")
    }

}
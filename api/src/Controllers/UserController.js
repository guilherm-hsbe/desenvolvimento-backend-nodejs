let users = [
    {
        id: 1,
        name: "G",
        email: "email@"
    }
]

class UserController {
    store(req, res){
        const {email, name} = req.body;

        if(!name || !email){
            return res.status(400).json({message:"Nome e Email são obrigatórios..."});
        }

        const newId = users[users.length - 1].id + 1;

        const newUser = {
            id: newId,
            name,
            email,
        }

        users.push(newUser);

        return res.status(201).json({message: "User created..."});
    }

    index(req, res){
        return res.status(200).json(users);
    }

    show(req, res){
        const {id} = req.params;

        if(!id){
            return res.status(400).json({message: "Id is invalid..."});
        }

        const currentUser = users.find((user) => user.id === parseInt(id));

        if(!currentUser){
            return res.status(404).json({message: "User not found..."});
        }

        return res.status(200).json(currentUser);
    }

    update(req, res){
        const {id} = req.params;
        const {email, name} = req.body;

        if(!name || !email){
            return res.status(400).json({message:"Nome e Email são obrigatórios..."});
        }

        if(!id){
            return res.status(400).json({message: "Id is invalid..."});
        }

        const currentUser = users.findIndex((user) => user.id === parseInt(id));

        if(!currentUser === -1){
            return res.status(404).json({message: "User not found..."});
        }

        users[currentUserIndex].name = name;
        users[currentUserIndex].email = email;

        return res.status(200).json({message: "User updated..."});
    }

    delete(){

    }
}

module.exports = new UserController();
//@desc Get Request
//@route Get /api/get
//@access Private

const getGet = (req, res) => {
    res.status(200).json({message: 'Get Endpoint'})
}

//@desc Post Request
//@route Get /api/get
//@access Private
const getPost = (req, res) => {
    if(!req.body) {
        throw  new Error('Please add an input')
    } 
        console.log(req.body)
        res.status(200).json({message: 'Post Endpoint'})

}

//@desc Put Request
//@route Get /api/get
//@access Private
const getPut = (req, res) => {
    res.status(200).json({message: `Update Endpoint ID ${req.params.id}`})
}


//@desc Delete Request
//@route Get /api/get
//@access Private
const getDelete = (req, res) => {
    res.status(200).json({message: `delete Endpoint ID ${req.params.id}`})
}

module.exports = {
    getGet,
    getPost,
    getPut,
    getDelete
}
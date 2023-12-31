const multer = require('multer');

const MINE_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, 'images')
    },
    filemane: (req, file, callback) => {
        const name = file.originalname.split (' ').join('_');
        const extension = MINE_TYPES[file.minetype];
        callback(null, name + Date.now()+'.'+extension);

    }
});

module.exports = multer({ storage }).single('image');
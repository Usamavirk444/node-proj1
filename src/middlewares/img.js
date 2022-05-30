const express = require('express')
const multer = require('multer')
const app = express()
    // const upload = multer({ dest: './public/data/uploads/' })

const fileStoreEngine = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'public/data/upload/');
    },
    filename: (req, file, cb) => {
        // file original name will get .jpg .png
        const uniqueSuffix = Date.now() + '--' + file.originalname;
        cb(null, uniqueSuffix);
    }
})
const upload = multer({ storage: fileStoreEngine })

module.exports = upload
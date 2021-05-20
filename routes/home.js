const express = require('express')
const router = express.Router()
const ShortUrl = require('../models/shortUrl')

router.get('/', async (req,res) => {
    const shortUrls = await ShortUrl.find()
    res.render('home', {shortUrls: shortUrls })
})

router.post('/', async (req,res)=>{
    await ShortUrl.create({ full: req.body.fullUrl})
    res.redirect('/')
})

router.delete('/:id', getUrl, async (req,res)=>{
    try {
        await res.shortUrl.remove() 
        res.json({message: 'Url '+res.shortUrl.full+' deleted'})

    } catch (err){
        return res.status(500).json({message: message.err})
    }
})

async function getUrl (req, res, next) {
    let shortUrl
    try{
        shortUrl = await ShortUrl.findById(req.params.id)
        if (shortUrl == null){
            return res.status(404).json({message: 'Cannot find url id'})
        }
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    res.shortUrl = shortUrl
    next()
}

module.exports = router
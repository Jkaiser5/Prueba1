const express = require ('express');
const rolService = require ('../services/rolService');
const router = express.Router();

router.get('/',async(req,res) =>{
    const rol = await rolService.getAllrol();
    res.json(rol);
})

router.get('/:id',async(req,res)=>{
    const rol = await rolService.getrolById(req.params.id);
    if (rol){
        res.json(rol);
    }
    else {
        res.status(404).json({message: 'rol not found'});

    }

})

router.post('/', async (req,res)=>{
    const newrol = await rolService.createrol(req.body);
    if (newrol)
        res.status(201).json(newrol);
    else
        res.status(404).json({message: 'rol not found'});

})

router.put('/:id', async(req,res)=>{
    const updaterol=await rolService.updaterol(req.params.id,req.body);
    if(updaterol)
        res.status(201).json(updaterol);
    else
        res.status(404).json({message:'rol not found'});
})

router.delete('/:id', async(req,res)=>{
    const deleterol=await rolService.deleterol(req.params.id);
    if(deleterol)
        res.status(204).send();
    else
        res.status(404).json({message:'rol not found'});
});

router.get('/users/:rolId',async(req,res)=>{
    try{
        const result = await rolService.getUsersByRole
    (
        req.params.rolId            
        )
        res.json(result);
    }catch(error){
        if (error.message==='role not found'){
            res.status(404).json ({error:error.message})
    }
    else{
        res.status(500),express.json({error:error.message})
    }
    }
});


module.exports = router;
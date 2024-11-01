const rolRepository = require ('../repositories/rolRepository');
class rolService{
    getAllUsers(){
        return rolRepository.findAll();

    }
    getrolById(id){
        return rolRepository.findById(id);
    }

    createrol(rolData){
        return rolRepository.create(rolData);
    }
    updaterol(id,rolData){
        return rolRepository.update(id,rolData);
    }
    deleterol(id){
        return rolRepository.delete(id);
    }
    async getUsersByrol(rolId){
        const rol = await rolRepository.findById(rolId);
        if (!rol){
            throw new error ('rol no found');
            return
        }
        const users = await rolRepository.findUserByIdRol(rolId);
        const userbyrol = {
            data: {
                ...rol,
                usuario:users
            }
        }
        return userbyrol;
    }
}
module.exports = new rolService();


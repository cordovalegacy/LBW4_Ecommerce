const ComputerController = require('../controllers/computer.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    //INVENTORY START
    app.get('/api/computers/inventory', ComputerController.getAllComputers);
    app.post('/api/computers/inventory', authenticate, ComputerController.createComputers);
    app.get('/api/computers/inventory/order/:id', ComputerController.getCheckoutComputers);
    app.delete('/api/computers/inventory/:id', ComputerController.removeComputers);
    app.get('/api/computersbyuser/:email', authenticate, ComputerController.findAllComputersByUser);
    //INVENTORY END
}
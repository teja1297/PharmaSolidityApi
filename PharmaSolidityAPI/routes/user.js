var express = require('express');
var router = express.Router();
const Web3 = require('web3');
const Window = require('window');
const window = new Window();
const Tx = require('ethereumjs-tx').Transaction;
var abi = require('../abi');
var web3;
var instance;
var networkId;

const contractAddress = "0x30E295F911e5cA6cE1AF977A204850260d39fF5c";
const infuraURL = "https://rinkeby.infura.io/v3/8b5a5775abdb479d862df16b39f7354f";
// const privateKey = "f60e1e89d1b1b24c3569229f576548860364ed53f73d2baea670170fdfe5b3ab"
const privateKey = Buffer.from(
    "98a672b94f680da9791800380aff9f23d8fea90e70a483a352240bd35eb659fb",
    'hex',
  )
const myAddress = "0x6898Ea29bF4506aDf7e7Bf7954c9a8F06B541f7C";
/**
 * @swagger
 * tags:
 *   - name: Basic
 *     description: "User Management"
 * components:
 *   schemas:
 *     login2:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: User's phone number
 *         password:
 *           type: string
 *           description: User's Password
 *       example:
 *         phoneNumber: "9898989898"
 *         password: testPassword
 */

/**
 * @swagger
 * /api/InitialSetup:
 *  get:
 *    summary: Initial Setup
 *    tags:
 *      - Basic
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
router.get('/InitialSetup', async (req, res) => {
    console.log("Metamask!");
    // web3 = new Web3(window.ethereum);
    web3 = new Web3(new Web3.providers.HttpProvider(infuraURL))
    // console.log(web3);
    console.log(window.ethereum);

    contract = new web3.eth.Contract(abi, contractAddress);
    networkId = await web3.eth.net.getId();
    console.log(networkId);
    console.log(contract.methods);
    console.log(await web3.eth.getTransactionCount(myAddress))
    // window.ethereum.enable();
    res.send("working");
});



/**
 * @swagger
 * /api/Authenticate:
 *  get:
 *    summary: Initial Setup
 *    tags:
 *      - Basic
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
 router.get('/Authenticate', async (req, res) => {
    
        const result = await contract.methods.Authenticate().call();
        res.send(result);
     });





/**
 * @swagger
 * /api/testConnection:
 *  get:
 *    summary: testing the connection by hitting a simple dummy method
 *    tags:
 *      - getters
 *      
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
 router.get('/testConnection', async (req, res) => {
    const result = await contract.methods.test().call();
    res.send(result);
 });


/**
 * @swagger
 * /api/getUserList:
 *  get:
 *    summary: Getting User Keylist
 *    tags:
 *      - getters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
 router.get('/getUserList', async (req,res)=>{
    const result = await contract.methods.getUserList().call();
    res.send(result);
 });



 /**
 * @swagger
 * /api/getDrugDetails1:
 *  get:
 *    summary: Getting Baisc Drug details
 *    tags:
 *      - getters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
  router.get('/getDrugDetails1', async (req,res)=>{
    const result = await contract.methods.getDrugDetails1().call();
    res.send(result);
 });


  /**
 * @swagger
 * /api/getDrugDetails2:
 *  get:
 *    summary: Getting tracking Drug details
 *    tags:
 *      - getters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
   router.get('/getDrugDetails2', async (req,res)=>{
    const result = await contract.methods.getDrugDetails1().call();
    res.send(result);
 });



/**
 * @swagger
 * /api/getDrugList:
 *  get:
 *    summary: Getting Drug Key list
 *    tags:
 *      - getters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
 router.get('/getUserList', async (req,res)=>{
    const result = await contract.methods.getDrugList().call();
    res.send(result);
 });




/**
 * @swagger
 * /api/getUserList:
 *  get:
 *    summary: Getting User Keylist
 *    tags:
 *      - getters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
 router.get('/getUserList', async (req,res)=>{
    const result = await contract.methods.getUserList().call();
    res.send(result);
 });



/**
 * @swagger
 * /api/getNextOwner:
 *  get:
 *    summary: Getting next owner of the drug
 *    tags:
 *      - getters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
 router.get('/getNextOwner', async (req,res)=>{
    const result = await contract.methods.getnextOwner().call();
    res.send(result);
 });


 /**
 * @swagger
 * /api/getUserRole:
 *  get:
 *    summary: Getting User Role
 *    tags:
 *      - getters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
  router.get('/getUserRole', async (req,res)=>{
    const result = await contract.methods.getUserRole().call();
    res.send(result);
 });



/**
 * @swagger
 * /api/ManufacturerDetails:
 *  get:
 *    summary: Getting Manufacturer details
 *    tags:
 *      - getters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
 router.get('/ManufacturerDetails', async (req,res)=>{
    const result = await contract.methods.ManufacturerDetails().call();
    res.send(result);
 });

/**
 * @swagger
 * /api/DistributorDetails:
 *  get:
 *    summary: Getting Distributor details
 *    tags:
 *      - getters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
 router.get('/DistributorDetails', async (req,res)=>{
    const result = await contract.methods.DistributorDetails().call();
    res.send(result);
 });

 



/**
 * @swagger
 * /api/WholesalerDetails:
 *  get:
 *    summary: Getting Wholesaler Details 
 *    tags:
 *      - getters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
 router.get('/WholesalerDetails', async (req,res)=>{
    const result = await contract.methods.WholesalerDetails().call();
    res.send(result);
 });

 




/**
 * @swagger
 * /api/PharmacyDetails:
 *  get:
 *    summary: Getting Pharmacy Details  
 *    tags:
 *      - getters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
 router.get('/PharmacyDetails', async (req,res)=>{
    const result = await contract.methods.PharmacyDetails().call();
    res.send(result);
 });


/**
 * @swagger
 * /api/UserDetails:
 *  get:
 *    summary: Getting User Details   
 *    tags:
 *      - getters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
 router.get('/UserDetails', async (req,res)=>{
    const result = await contract.methods.UserDetails("0x6898Ea29bF4506aDf7e7Bf7954c9a8F06B541f7C").call();
    res.send(result);
 });











/**
 * @swagger
 * /api/addDrugDetails:
 *  post:
 *    summary: adding drug Details
 *  
 *    tags:
 *      - Setters
 *    responses:
 *      200:
 *        description: Login is successful
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
router.get('/addDrugDetails', async (req, res) => {
    const web3js = web3;
    web3js.eth.getTransactionCount(myAddress).then(function(v){
        console.log("Count: "+v);
        count = v;
        var amount = web3js.utils.toHex(1e16);
        //creating raw tranaction
        var rawTransaction = {
            "from":myAddress,
             "gasPrice":web3js.utils.toHex(20* 1e9),
             "gasLimit":web3js.utils.toHex(210000),
             "to":contractAddress,"value":"0x0",
             "data":contract.methods.addDrugDetails(1,1,"D1","Manufacturer",1648550993,1648599999,5,10).encodeABI(),
             "nonce":web3js.utils.toHex(count)}
        console.log(rawTransaction);
        //creating tranaction via ethereumjs-tx
        var transaction = new Tx(rawTransaction,{ chain: 'rinkeby' });
        //signing transaction with private key
        transaction.sign(privateKey);
        //sending transacton via web3js module
        web3js.eth.sendSignedTransaction('0x'+transaction.serialize().toString('hex'))
        .on('transactionHash',console.log);
    })
    res.send("Check hash returned in terminal on https://rinkeby.etherscan.io/")
})


module.exports = router;
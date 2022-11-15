const path = require('path')
const Validator = require(path.join(__dirname, '..', 'src', 'wallet_address_validator'))

// Search All Existing Validators
console.log(Validator.validate('sys1q4m765x694dsawzflaqr8reqc6neh8aj04gkklx', 'sys'))

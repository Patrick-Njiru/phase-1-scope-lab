// Write your solution in this file!
var customerName = 'bob'

var upperCaseCustomerName = () => {
    customerName = 'BOB'
    return customerName
} 

var bestCustomer

var setBestCustomer = () => {
    bestCustomer = 'not bob'
    return bestCustomer
}

var overwriteBestCustomer = () => {
    bestCustomer = 'maybe bob'
    return bestCustomer
}

const LeastFavoriteCustomer = 'Mary'

var changeLeastFavoriteCustomer = () => {
    LeastFavoriteCustomer = 'must be bob'
    return LeastFavoriteCustomer
}

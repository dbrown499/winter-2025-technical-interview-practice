// Prompt for Lemonade Change
// You are running a lemonade stand and decide to sell lemonade for $5 per cup.
// Customers will be paying with either a $5 bill, a $10 bill, or a $20 bill.
// You need to provide the correct change to each customer.
// Return true if you can provide change to every customer, otherwise return false.

/*
Pseudocode: 
if someone give me $5 keep count 
if someone gives me a $10, First see if I have $5 to give as change if not return false or else take the money, keep count.
if someone gives me a $20, First see if I have $15 to give as change if not return false or else take the money, keep count.
*/

function canProvideChange(bills) {
    let hashMap = {
        5: 0,
        10: 0,
        20: 0
    };

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            hashMap[5]++; 
        } else if (bills[i] === 10) {
            if (hashMap[5] > 0) {
                hashMap[5]--;  
                hashMap[10]++; 
            } else {
                return false;
            }
        } else if (bills[i] === 20) {
            if (hashMap[10] > 0 && hashMap[5] > 0) {
                hashMap[10]--; 
                hashMap[5]--;
                hashMap[20]++;
            }
            else if (hashMap[5] >= 3) {
                hashMap[5] -= 3;  
                hashMap[20]++; 
            } else {
                return false; 
            }
        }
    }

    return true;
}


console.log(canProvideChange([5, 10, 5, 20])); //true

module.exports = canProvideChange;

function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBroken = false;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice;
        }
        if (i % 3 === 0) {
            expenses += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            expenses += shieldPrice;
            shieldBroken = true;
        }
        if (shieldBroken && i % 12 === 0) {
            expenses += armorPrice;
            shieldBroken = false;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);
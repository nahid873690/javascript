/**
 * chair --> 2 cft
 * table -->10 cft
 * bed --> 50cft
 */
function woodQuantity(chairQuantity, tableQuantity,bedQuantity
){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood ;

    const totalWood = chairQuantity + tableQuantity + bedQuantity;
    return totalWood;
}
const wood = woodQuantity(0, 1,1);
console.log('wood needed', wood);

/**
 * Shirt price -->500
 * pant price --> 300
 * shoe price -->900
 */
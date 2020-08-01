const calculatorTitle = document.querySelector('.calculator-title-text');
const calculatorP = document.querySelector('.calculator-p');
const changeofCalculator = () => {
    document.querySelectorAll('.calculator-container').forEach(item => {
        item.style.display = "flex";
    })
    document.querySelectorAll('.calculator-supplement-container').forEach(item => {
        item.style.display = "flex";
    })
    if (document.querySelector('.calculator-needed-fuel-and-prices').checked) {
        calculatorTitle.textContent = "Kalkulator potrzebnego paliwa";
        calculatorP.textContent = "Kalkulator umożliwia obliczenie zużycia paliwa oraz ceny na podstawie podanych informacji";
        document.querySelector('.calculator-amount-of-fuel').style.display = "none";
        document.querySelector('.calculator-supplement-amount-of-fuel').style.display = "none";

    }
    if (document.querySelector('.average-fuel-consumption-calculator').checked) {
        calculatorTitle.textContent = "Kalkulator średniego spalania";
        calculatorP.textContent = "Kalkulator umożliwia obliczenie średniego spalania samochodu na podstawie podanych informacji";
        document.querySelector('.container-average-fuel-consumption').style.display = "none";
        document.querySelector('.calculator-supplement-avg-fuel-consumption').style.display = "none";
    }
    if (document.querySelector('.distance-calculator').checked) {
        calculatorTitle.textContent = "Kalkulator dystansu";
        calculatorP.textContent = "Kalkulator umożliwia obliczenie dystansu jaki przejedziesz posiadając daną ilośc poliwa, oraz obliczy koszt tej podróży";
        document.querySelector('.calculator-distance').style.display = "none";
        document.querySelector('.calculator-supplement-distance').style.display = "none";
    }
    clearingField();
}
document.querySelectorAll('.calculator-label').forEach(item => item.addEventListener('click', changeofCalculator));

const dinstanceIn = document.querySelector('.needed-fuel-calculator-mi-km');
const unitFuel = document.querySelector('.average-fuel-consumption-unit');

const settingTheDistanceUnit = () => {
    const unitDinstace = document.querySelector('.needed-fuel-calculator-distance').value;
    if (unitDinstace == "Kilometry") {
        dinstanceIn.textContent = "Kilometry";
        unitFuel.textContent = "Km";
    }
    if (unitDinstace == "Mile") {
        dinstanceIn.textContent = "Mile";
        unitFuel.textContent = "Mi";
    }

}
document.querySelector('.needed-fuel-calculator-distance').addEventListener('click', settingTheDistanceUnit);

const fuelName = document.querySelector('.needed-fuel-calculator-fuel-name');
const amountOfFuelName = document.querySelector('.amount-of-fuel-name');
const avgConsumstionTypeOfFuel = document.querySelector('.fuel-type-avg-fuel-consumption-value');
const settingTheFuelUnit = () => {
    const fuelType = document.querySelector('.needed-fuel-calculator-fuel').value;

    fuelName.textContent = fuelType;
    amountOfFuelName.textContent = fuelType;
    if (fuelType == "Litr") {
        avgConsumstionTypeOfFuel.textContent = "L";
    }
    if (fuelType == "Galon angielski") {
        avgConsumstionTypeOfFuel.textContent = "Gal ang";
    }
    if (fuelType == "Galon amerykański") {
        avgConsumstionTypeOfFuel.textContent = "Gal am";
    }
}

document.querySelector('.needed-fuel-calculator-fuel').addEventListener('click', settingTheFuelUnit);

const startingCounting = () => {
    const fuelPrice = document.querySelector('.fuel-price').value;
    const amountOfFuel = document.querySelector('.amount-of-fuel-number').value;
    const distance = document.querySelector('.distance-name').value;
    const avgFuelConsumption = document.querySelector('.average-burning-quantity').value;
    const atWhatDistance = document.querySelector('.at-what-distance').value;

    if (document.querySelector('.calculator-needed-fuel-and-prices').checked) {
        if (distance / atWhatDistance * avgFuelConsumption > 0) {
            const resultValue = (distance / atWhatDistance * avgFuelConsumption).toFixed(2);
            const resultPrice = ((distance / atWhatDistance * avgFuelConsumption) * fuelPrice).toFixed(2);
            const text = "Ilość potrzebnego paliwa";
            recordTheResult(text, resultValue, resultPrice);
        }
        else {
            deleteResult();
        }
    }

    if (document.querySelector('.average-fuel-consumption-calculator').checked) {
        if (100 * amountOfFuel / distance > 0) {
            const resultValue = (100 * amountOfFuel / distance).toFixed(2);
            const resultPrice = ((100 * amountOfFuel / distance) * fuelPrice).toFixed(2);
            const text = "Średnie spalanie";
            recordTheResult(text, resultValue, resultPrice);
        }
        else {
            deleteResult();
        }
    }

    if (document.querySelector('.distance-calculator').checked) {
        if ((amountOfFuel / avgFuelConsumption * 100) > 0) {
            const resultValue = ((amountOfFuel / avgFuelConsumption) * 100).toFixed(2);
            const resultPrice = (((amountOfFuel / avgFuelConsumption) * 100) * fuelPrice).toFixed(2);
            const text = "Przejedziesz";
            recordTheResult(text, resultValue, resultPrice);
        }
        else {
            deleteResult();
        }
    }

    if (distance > 0.1) {
        document.querySelector('#calculator-supplement-distance-icon').className = "fas fa-check-circle";
    }
    else {
        document.querySelector('#calculator-supplement-distance-icon').className = "fas fa-times-circle";
    }
    if (avgFuelConsumption > 0.1) {
        document.querySelector('#calculator-supplement-avg-fuel-consumption-icon').className = "fas fa-check-circle";
    }
    else {
        document.querySelector('#calculator-supplement-avg-fuel-consumption-icon').className = "fas fa-times-circle";
    }
    if (fuelPrice > 0.1) {
        document.querySelector('#calculator-supplement-price-icon').className = "fas fa-check-circle";
    }
    else {
        document.querySelector('#calculator-supplement-price-icon').className = "fas fa-times-circle";
    }
    if (amountOfFuel > 0.1) {
        document.querySelector('#calculator-supplement-amount-of-fuel-icon').className = "fas fa-check-circle";
    }
    else {
        document.querySelector('#calculator-supplement-amount-of-fuel-icon').className = "fas fa-times-circle";
    }
}
document.querySelectorAll('.calculator-input').forEach(item => item.addEventListener('keyup', startingCounting));

const changeToDisabled = () => {
    document.querySelector('#calculator-supplement-distance-icon').className = "fas fa-times-circle";
    document.querySelector('#calculator-supplement-avg-fuel-consumption-icon').className = "fas fa-times-circle";
    document.querySelector('#calculator-supplement-price-icon').className = "fas fa-times-circle";
    document.querySelector('#calculator-supplement-amount-of-fuel-icon').className = "fas fa-times-circle";
}

const clearingField = () => {
    document.querySelector('.fuel-price').value = null;
    document.querySelector('.amount-of-fuel-number').value = null;
    document.querySelector('.distance-name').value = null;
    document.querySelector('.average-burning-quantity').value = null;
    document.querySelector('.at-what-distance').value = 100;
    document.querySelector('.main-result').innerHTML = ``;
    document.querySelector('.the-cost-of-travel').innerHTML = ``;
    changeToDisabled();
}

const resultInf = document.querySelector('.main-result');
const resultCost = document.querySelector('.the-cost-of-travel');
const recordTheResult = (text, value, price) => {
    if (value > 0 & value < 90000000)  {
        resultInf.textContent = `${text}: ${value}`;
    }
    else {
        resultInf.textContent = ``;
    }
    if (price > 0 & price < 90000000)  { 
        resultCost.textContent = `Koszt podróży ${price}`;
    }
    else {
        resultCost.textContent = ``;
    }
}   

const deleteResult = () => {
    resultInf.textContent = ``;
    resultCost.textContent = ``;
}

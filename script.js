let price = 100;
let balance = 500;
let postmate = [null, null, null, "1432HGF", null];
let codeBD = "A001DFX0";
let codeSms = "A001DFX0";
let parcelId = "1432HGF";

function receiveParcel(price, balance, postmate, codeBD, codeSms, parcelId) {
  if (balance >= price && codeBD === codeSms) {
    balance -= price;
    console.log(
      `Заберите посылку ${parcelId} из ячейки №${
        postmate.indexOf(parcelId) + 1
      }. Ваш счет составляет: ${balance}ед.`
    );
  } else if (codeBD !== codeSms) {
    console.log(`Невозможно забрать посылку. Вы ввели неверный код`);
  } else if (balance < price) {
    console.log(`Невозможно забрать посылку. Недостаточный баланс`);
  }
}

receiveParcel(price, balance, postmate, codeBD, codeSms, parcelId);

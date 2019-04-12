import { RUPIAH_FRACTION } from "constant";

export function validation(value) {
  let errors = [];
  if (!value) {
    errors.push("Value can not empty.");
  } else {
    //validate Input
    const validRupiah = /(?=.*?\d)^(Rp\s{0,1})?(([1-9]\d{0,2}(.\d{3})*)|\d+)?(\,0{1,2})?$/.test(
      value
    );
    if (!validRupiah) {
      errors.push("Invalid input value.");
    }
  }
  return errors;
}

export function denominate(value) {
  //remove currency and thousand separators
  let nominal = value.replace(/[^\d,-]/g, "");
  nominal = nominal.replace(/,/g, "");
  nominal = parseInt(nominal);
  let denominations = [];
  for (let index = 0; index < RUPIAH_FRACTION.length; index++) {
    const rupiah = RUPIAH_FRACTION[index];
    if (rupiah > nominal) continue; //skip to next fraction
    else if (nominal===0)break; //stop check fraction
    else{//do denomination
      const n = parseInt(nominal/rupiah);
      nominal = nominal%rupiah;
      denominations.push(rupiah+" x "+n);
    }
  }
  if(nominal){
    denominations.push("Cant be devided "+nominal);
  }
  return denominations;
}

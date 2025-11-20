export function heavyCalculation(num: number) {
    console.log("⚙️ heavyCalculation DIPANGGIL");
    let result = 0;
  
    for (let i = 0; i < 500_000_000; i++) {
      result += num;
    }
  
    return result;
  }
  
console.log('SESI 8');

const arrayPertama = [
  'Math',
  'English',
  'Programming' // nilai yang sama
];

const arrayKedua = [
  'Geography',
  'Spanish',
  'Programming' // nilai yang sama
];

function cekNilaiYangSamaDariDuaArray(array1, array2) {
  // array1.forEach atau array1.map
  array1.forEach((nilaiDalamArray1, posisiNilaiDalamArray1) => {
    console.log(`Nilai ${nilaiDalamArray1} ada di posisi ${posisiNilaiDalamArray1}`);

    const nilaiDalamArray2 = array2[posisiNilaiDalamArray1];
    console.log(`nilai dalam array kedua ${nilaiDalamArray2}`);

    if (nilaiDalamArray1 === nilaiDalamArray2) {
      console.log(true);
    } else {
      console.log(false);
    }
  });
};

cekNilaiYangSamaDariDuaArray(arrayPertama, arrayKedua);
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//function to get random number from 0 to 14
const getRandomDnaNumber = () => {
  return Math.floor(Math.random() * 15);
};

//function to get random number from 0 to 2 (for random selection of DNA base)
const getRandomDnaBaseNumber = () => {
  return Math.floor(Math.random() * 3);
};

// Factory Function that returns an object that contains the properties specimenNum and dna that correspond to the parameters provided
pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let randomPosition = getRandomDnaNumber();
      let randomBase = getRandomDnaBaseNumber();
      let mutableBase = dna[randomPosition];
      if (mutableBase === "A") {
        let baseArr = ["T", "C", "G"];
        dna[randomPosition] = baseArr[randomBase];
        return dna;
      } else if (mutableBase === "T") {
        let baseArr = ["A", "C", "G"];
        dna[randomPosition] = baseArr[randomBase];
        return dna;
      } else if (mutableBase === "C") {
        let baseArr = ["A", "T", "G"];
        dna[randomPosition] = baseArr[randomBase];
        return dna;
      } else if (mutableBase === "G") {
        let baseArr = ["A", "T", "C"];
        dna[randomPosition] = baseArr[randomBase];
        return dna;
      }
    },
    compareDNA(pAequor) {
      let counter = 0;
      for (let i=0; i< pAequor.length; i++) {
        if (dna[i]===pAequor.dna[i])
        counter++;
      }
      console.log(`Specimen ${specimenNum} and specimen ${pAequor.specimenNum} have ${Math.round(counter/pAequor.length*100}% DNA in common.`);
    },
  };
};

console.log(pAequorFactory(1, mockUpStrand()));
console.log(mockUpStrand());

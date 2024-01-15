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
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let randomPosition = getRandomDnaNumber();
      let randomBase = getRandomDnaBaseNumber();
      let mutableBase = this.dna[randomPosition];
      if (mutableBase === "A") {
        let baseArr = ["T", "C", "G"];
        this.dna[randomPosition] = baseArr[randomBase];
        return this.dna;
      } else if (mutableBase === "T") {
        let baseArr = ["A", "C", "G"];
        this.dna[randomPosition] = baseArr[randomBase];
        return this.dna;
      } else if (mutableBase === "C") {
        let baseArr = ["A", "T", "G"];
        this.dna[randomPosition] = baseArr[randomBase];
        return this.dna;
      } else if (mutableBase === "G") {
        let baseArr = ["A", "T", "C"];
        this.dna[randomPosition] = baseArr[randomBase];
        return this.dna;
      }
    },
    compareDNA(pAequor) {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          counter++;
        }
      }

      console.log("counter: ", counter);

      console.log(
        `Specimen ${this.specimenNum} and specimen ${
          pAequor.specimenNum
        } have ${Math.round(
          (counter / this.dna.length) * 100
        )} % DNA in common.`
      );
    },
    willLikelySurvive() {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          counter++;
        }
      }
      if (counter >= 9) {
        return true;
      } else {
        return false;
      }
    },
  };
};

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen[11].dna);
//console.log(survivingSpecimen[0].mutate())
survivingSpecimen[16].compareDNA(survivingSpecimen[17]);
console.log(survivingSpecimen[11].willLikelySurvive());

class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let currentVampire = this;
    let count = 0;

    // If not root increase counter and iterate up the tree
    while (currentVampire.creator) {
      count++;
      currentVampire = currentVampire.creator;
    }
    // Return the counter
    return count;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let otherVampire = vampire;
    let thisVampire = this;
    let countOther = 0;
    let countThis = 0;

    // Return true this vampire is closer to the root
    while (otherVampire.creator && thisVampire.creator) {
      countOther++;
      countThis++;
      otherVampire = otherVampire.creator;
      thisVampire = thisVampire.creator;
    }

    // Return true this vampire is closer to the root
    if (otherVampire.creator) {
      countOther++;
    }
    if (thisVampire.creator) {
      countThis++;
    }

    // Return true this vampire is closer to the root
    if (countThis < countOther) {
      return true;
    } else {
      return false;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

const v1 = new Vampire('v1', 2010);
const v2 = new Vampire('v2', 2012);
const v3 = new Vampire('v3', 2013);
const v4 = new Vampire('v4', 2014);
const v5 = new Vampire('v5', 2015);

v1.addOffspring(v2);
v2.addOffspring(v3);
v3.addOffspring(v4);
v1.addOffspring(v5);
console.log(v5.isMoreSeniorThan(v4));

module.exports = Vampire;


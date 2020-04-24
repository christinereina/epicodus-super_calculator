export class User {
  constructor (age,juul) {
    this.age = age;
    this.juul = juul;
  }

  mercuryAge() {
    let mercuryYears = Math.floor(this.age/.24);
    return mercuryYears;
  }

  venusAge() {
    let venusYears = Math.floor(this.age/.62);
    return venusYears;
  }

  marsAge() {
    let marsYears = Math.floor(this.age/1.88);
    return marsYears;
  }

  jupiterAge() {
    let jupiterAge = Math.floor(this.age/11.86);
    return jupiterAge;
  }

  // juul'in may cause loss of life 

  juulHabits() {
    let juul = -10;
    let noJuul = 10;
    if (this.juul === 'yes') {
      return juul;
     } else {
       return noJuul;
     }
  }

  //life expectancy | the value 100 is a theoretical benchmark of what I'm using for life expectancy

    estimatedMercury() {
      let mercuryJuul = this.juulHabits() + this.mercuryAge();
      let  estMercury = mercuryJuul + 100;
      return estMercury;
    }

    estimatedVenus() {
      let venusJuul = this.juulHabits() + this.venusAge();
      let estVenus = venusJuul + 100;
      return estVenus;
    }

    estimatedMars() {
      let marsJuul = this.juulHabits() + this.marsAge();
      let  estMars = marsJuul + 100;
      return estMars;
    }

    estimatedJupiter() {
      let jupiterJuul = this.juulHabits() + this.jupiterAge();
      let  estJupiter = jupiterJuul + 100;
      return estJupiter;
    }

    //years left on each planet

    leftMercury() {
      let finalMercury = this.estimatedMercury() - this.mercuryAge();
      return finalMercury;
    }

    leftVenus() {
      let finalVenus = this.estimatedVenus() - this.venusAge();
      return finalVenus;
    }

    leftMars() {
      let finalMars = this.estimatedMars() - this.marsAge();
      return finalMars;
    }

    leftJupiter() {
      let finalJupiter = this.estimatedJupiter() - this.jupiterAge();
      return finalJupiter;
    }


}
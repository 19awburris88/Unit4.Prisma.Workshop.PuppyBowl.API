const prisma = require("./index");

const seed = async () => {
  await prisma.player.createMany({
    data: [
      { name: "Scooby-Doo", breed: "Great Dane", status: "field" },
      { name: "Clifford", breed: "Big Red Dog", status: "bench" },
      { name: "Brian", breed: "Labrador", status: "field" }, // Family Guy
      { name: "Snoopy", breed: "Beagle", status: "field" }, // Peanuts
      { name: "Pluto", breed: "Mixed", status: "bench" },   // Disney
      { name: "Santa’s Little Helper", breed: "Greyhound", status: "bench" }, // Simpsons
      { name: "Blue", breed: "Blue Dog", status: "field" }, // Blue’s Clues
      { name: "Bolt", breed: "White Shepherd", status: "bench" },
      { name: "Gromit", breed: "Beagle", status: "field" }, // Wallace & Gromit
      { name: "Beethoven", breed: "St. Bernard", status: "bench" }
    ]
  });
};

seed()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

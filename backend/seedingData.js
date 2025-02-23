const { PrismaClient } = require("@prisma/client");
const fs = require("fs");

const prisma = new PrismaClient();

async function main() {
  // Load JSON file and parse it
  const jsonData = JSON.parse(fs.readFileSync("raw_data/question-bank-class10th-mathematics.json", "utf-8"));

  // Extract the "questions" array
  const questions = jsonData.questions;

  // Insert all questions at once
  await prisma.question.createMany({
    data: questions,
    // skipDuplicates: true, // Prevents duplicate insertion errors
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

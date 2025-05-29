-- CreateEnum
CREATE TYPE "PersonalityType" AS ENUM ('INTROVERT', 'EXTROVERT', 'AMBIVERT');

-- CreateEnum
CREATE TYPE "Temperament" AS ENUM ('SANGUINE', 'CHOLERIC', 'PHLEGMATIC', 'MELANCHOLIC');

-- CreateEnum
CREATE TYPE "Attitude" AS ENUM ('POSITIVE', 'NEGATIVE', 'NEUTRAL');

-- CreateEnum
CREATE TYPE "AccommodationType" AS ENUM ('SHORT_TERM', 'LONG_TERM');

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "university" TEXT,
    "faculty" TEXT,
    "major" TEXT,
    "graduationYear" INTEGER,
    "personalityType" "PersonalityType",
    "temperament" "Temperament",
    "opennessLevel" INTEGER,
    "religiousViews" TEXT,
    "politicalViews" TEXT,
    "tidinessLevel" INTEGER,
    "alcoholAttitude" "Attitude",
    "smokingAttitude" "Attitude",
    "accommodationType" "AccommodationType",
    "primaryGoal" TEXT,
    "roommateExpectations" TEXT,
    "hobbies" TEXT[],
    "favoriteMusic" TEXT,
    "favoriteMovies" TEXT,
    "readingPreferences" TEXT,
    "boardGames" BOOLEAN,
    "travelInterest" BOOLEAN,
    "artInterest" BOOLEAN,
    "physicalActivity" INTEGER,
    "favoriteSports" TEXT,
    "gymRegularly" BOOLEAN,
    "isEarlyBird" BOOLEAN,
    "scheduleType" TEXT,
    "staysHomeOften" BOOLEAN,
    "hasPets" BOOLEAN,
    "petAttitude" TEXT,
    "cooksAtHome" BOOLEAN,
    "sharesDuties" BOOLEAN,
    "usesHomeAppliances" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "npm" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_npm_key" ON "Student"("npm");

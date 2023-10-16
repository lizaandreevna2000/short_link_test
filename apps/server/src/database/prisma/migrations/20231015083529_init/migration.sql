-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "original_link" TEXT NOT NULL,
    "short_link" TEXT NOT NULL,
    "count_click" INTEGER NOT NULL DEFAULT 0,
    "code_link" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Link" ("code_link", "count_click", "id", "original_link", "short_link") SELECT "code_link", "count_click", "id", "original_link", "short_link" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
CREATE UNIQUE INDEX "Link_original_link_key" ON "Link"("original_link");
CREATE UNIQUE INDEX "Link_short_link_key" ON "Link"("short_link");
CREATE UNIQUE INDEX "Link_code_link_key" ON "Link"("code_link");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

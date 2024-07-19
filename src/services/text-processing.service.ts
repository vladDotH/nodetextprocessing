import fs from "fs";
import readline from "readline";
import { configService } from "@/services/config.service";

let allLinesCount = -1;

async function updateLinesCount() {
  allLinesCount = await new Promise((resolve) => {
    const readStream = fs.createReadStream(configService.FILE_PATH, {});
    const lines = readline.createInterface({
      input: readStream,
      crlfDelay: Infinity,
    });

    let lineNumber = 0;
    lines.on("line", () => {
      lineNumber++;
    });

    lines.once("close", () => {
      resolve(lineNumber);
    });
  });
}

async function findLastOccurrence(
  str: string,
  limit: number,
): Promise<{ num: number; line: string | null }> {
  if (allLinesCount == -1) {
    await updateLinesCount();
  }

  const readStream = fs.createReadStream(configService.FILE_PATH, {});
  const lines = readline.createInterface({
    input: readStream,
    crlfDelay: Infinity,
  });

  return new Promise((resolve) => {
    let lineNumberOccured = -1;
    let occuredLine = null as string | null;
    let lineNumber = 0;

    lines.on("line", (line: string) => {
      if (allLinesCount - lineNumber <= limit && line.includes(str)) {
        occuredLine = line;
        lineNumberOccured = lineNumber;
      }
      lineNumber++;
    });

    lines.once("close", () => {
      // Считаем строки с первой
      if (lineNumberOccured != -1) lineNumberOccured++;
      resolve({ num: lineNumberOccured, line: occuredLine });
    });
  });
}

export const textProcessingService = {
  findLastOccurrence,
};

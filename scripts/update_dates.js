const fs = require('fs');
const path = require('path');

const part1Path = path.resolve(__dirname, 'data_articles_enfants_part1.js');
const part2Path = path.resolve(__dirname, 'data_articles_enfants_part2.js');

// Part 1: Articles 1 to 5
let part1 = fs.readFileSync(part1Path, 'utf8');

// Article 1
part1 = part1.replace(
  /(id:\s*1,[\s\S]*?date:\s*)'[^']+'([\s\S]*?dateFormatted:\s*)'[^']+'/,
  "$1'2026-10-18'$2'18 octobre 2026'"
);

// Article 2
part1 = part1.replace(
  /(id:\s*2,[\s\S]*?date:\s*)'[^']+'([\s\S]*?dateFormatted:\s*)'[^']+'/,
  "$1'2026-10-20'$2'20 octobre 2026'"
);

// Article 3
part1 = part1.replace(
  /(id:\s*3,[\s\S]*?date:\s*)'[^']+'([\s\S]*?dateFormatted:\s*)'[^']+'/,
  "$1'2026-10-22'$2'22 octobre 2026'"
);

// Article 4
part1 = part1.replace(
  /(id:\s*4,[\s\S]*?date:\s*)'[^']+'([\s\S]*?dateFormatted:\s*)'[^']+'/,
  "$1'2026-10-25'$2'25 octobre 2026'"
);

// Article 5
part1 = part1.replace(
  /(id:\s*5,[\s\S]*?date:\s*)'[^']+'([\s\S]*?dateFormatted:\s*)'[^']+'/,
  "$1'2026-10-27'$2'27 octobre 2026'"
);

fs.writeFileSync(part1Path, part1, 'utf8');
console.log('Updated dates in data_articles_enfants_part1.js');

// Part 2: Articles 6 to 10
let part2 = fs.readFileSync(part2Path, 'utf8');

// Article 6
part2 = part2.replace(
  /(id:\s*6,[\s\S]*?date:\s*)'[^']+'([\s\S]*?dateFormatted:\s*)'[^']+'/,
  "$1'2026-10-29'$2'29 octobre 2026'"
);

// Article 7
part2 = part2.replace(
  /(id:\s*7,[\s\S]*?date:\s*)'[^']+'([\s\S]*?dateFormatted:\s*)'[^']+'/,
  "$1'2026-10-31'$2'31 octobre 2026'"
);

// Article 8
part2 = part2.replace(
  /(id:\s*8,[\s\S]*?date:\s*)'[^']+'([\s\S]*?dateFormatted:\s*)'[^']+'/,
  "$1'2026-11-02'$2'2 novembre 2026'"
);

// Article 9
part2 = part2.replace(
  /(id:\s*9,[\s\S]*?date:\s*)'[^']+'([\s\S]*?dateFormatted:\s*)'[^']+'/,
  "$1'2026-11-04'$2'4 novembre 2026'"
);

// Article 10 - MUST BE 05 Novembre 2026
part2 = part2.replace(
  /(id:\s*10,[\s\S]*?date:\s*)'[^']+'([\s\S]*?dateFormatted:\s*)'[^']+'/,
  "$1'2026-11-05'$2'5 novembre 2026'"
);

fs.writeFileSync(part2Path, part2, 'utf8');
console.log('Updated dates in data_articles_enfants_part2.js');

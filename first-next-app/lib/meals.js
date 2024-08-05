import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify'; // npm install slugify
import xss from 'xss'; // npm install xss

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // throw new Error('Something went wrong!');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true }); // 소문자로 {lower: true}
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('이미지 저장에 실패했습니다!');
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
			INSERT INTO meals
				(title, slug, image, summary, instructions, creator, creator_email)
			VALUES (
				@title,
				@slug,
				@image,
				@summary,
				@instructions,
				@creator,
				@creator_email
			)
		`
  ).run(meal);
}

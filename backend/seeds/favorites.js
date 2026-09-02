/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorites').del()
  await knex('favorites').insert([
    {title: "Back to the Future", main_character: "Marty McFly", year_released: 1985},
    {title: "The Patriot", main_character: "Benjamin Martin", year_released: 2000},
    {title: "The Matrix", main_character: "Neo", year_released: 1999},
  ]);
};

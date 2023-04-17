"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("People", "categoryId", { type: Sequelize.INTEGER }),
      queryInterface.addConstraint("People", {
        fields: ["categoryId"],
        type: "foreign key",
        name: "fk_category_id",
        references: { table: "Category", field: "id" },
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn("Category", "categoryId")]);
  },
};

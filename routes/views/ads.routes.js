const router = require("express").Router();
const { Advertisment, Category } = require("../../db/models");
const AdsList = require("../../components/pages/AdsList");
const FilterHouse = require("../../components/ui/FilterHouse");

router.get("/", async (req, res) => {
  try {
    const advertisments = await Advertisment.findAll({
      order: [["id", "ASC"]],
    });
    const categories = await Category.findAll();
    const document = res.renderComponent(AdsList, {
      title: "Объявления",
      advertisments,
      categories,
    });
    res.send(document);
  } catch (error) {
    console.error("Ошибка при получении списка объявлений:", error);
    res.status(500).send("Внутренняя ошибка сервера");
  }
});

// router.get("/:id/category", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const category = await Advertisment.findAll({
//       where: { categoryId: id },
//     });
//     console.log(category);
//     const result = res.renderComponent(AdsList, { title: "a", category });
//     res.send(result);
//   } catch (message) {
//     console.log(message);
//   }
// });

router.get("/:id/category", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Advertisment.findAll({
      where: { categoryId: id },
    });
    console.log(category);
    res.json(category); // Отправляем данные как JSON
  } catch (error) {
    console.error("Ошибка при получении объявлений по категории:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;

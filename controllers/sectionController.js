const Section = require("../models/section");

const createSection = async (req, res) => {
  try {
    const { SECCODE, SECDESC, CREATE_DATE, MODIFY_DATE, USECOUNTS, ACTIVE } =
      req.body;

    const newSection = await Section.create({
      SECCODE,
      SECDESC,
      CREATE_DATE,
      MODIFY_DATE,
      USECOUNTS,
      ACTIVE,
    });

    return res.status(201).json({
      message: "Section created successfully",
      data: newSection,
    });
  } catch (error) {
    console.error("Error creating section:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteSection = async (req, res) => {
  try {
    const { id } = req.params;

    const section = await Section.findByPk(id);

    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }

    await section.destroy();

    return res.status(200).json({ message: "Section deleted successfully" });
  } catch (error) {
    console.error('Error deleting section:', error);
    return res.status(500).json({ message: 'Internal server error'});
  }
};

module.exports = { createSection, deleteSection };

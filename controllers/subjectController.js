const Subject = require("../models/subject");

// Create a new subject

const createSubject = async (req, res) => {
  try {
    const { SUBCODE, SUBDESC, CREATE_DATE, MODIFY_DATE, USECOUNTS, ACTIVE } =
      req.body;

    // Create a new subject record
    const newSubject = await Subject.create({
      SUBCODE,
      SUBDESC,
      CREATE_DATE,
      MODIFY_DATE,
      USECOUNTS,
      ACTIVE,
    });

    return res.status(201).json({
      message: "Subject created successfully",
      data: newSubject,
    });
  } catch (error) {
    console.error('Error creating subject:', error);
    return res.status(500).json({ message: 'Internal server error'});
  }
};

module.exports = { createSubject };

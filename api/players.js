const express = require("express");
const router = express.Router();
const prisma = require("../prisma");

// GET all players
router.get("/", async (req, res) => {
  const players = await prisma.player.findMany();
  res.json(players);
});

// POST new player
router.post("/", async (req, res) => {
  const player = await prisma.player.create({ data: req.body });
  res.status(201).json(player);
});

// GET player by ID
router.get("/:id", async (req, res) => {
  const player = await prisma.player.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  res.json(player);
});

// PUT update status
router.put("/:id", async (req, res) => {
  const updated = await prisma.player.update({
    where: { id: parseInt(req.params.id) },
    data: { status: req.body.status },
  });
  res.json(updated);
});

// DELETE player
router.delete("/:id", async (req, res) => {
  await prisma.player.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.sendStatus(204);
});

module.exports = router;

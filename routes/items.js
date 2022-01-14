const express = require("express");
const router = express.Router();
const itemsCtrl = require("../controllers/items");

router.post("/:listId/items", isLoggedIn, itemsCtrl.create);
router.delete("/:listId/items/:itemId", isLoggedIn, itemsCtrl.delete);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }
  
module.exports = router;

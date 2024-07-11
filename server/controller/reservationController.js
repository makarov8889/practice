const ApiError = require("../errors/ApiError");
const { Reservation } = require("../models/models");

class ReservationController {

  async create(req, res, next) {
    try {
      const { date, time, quantity, description } = req.body;

      if (!date || !time || !quantity || !description) {
        return next(ApiError.badRequest("Не все поля заполнены"));
      }

      const newItem = await Reservation.create({ date, time, quantity, description });

      return res.json(newItem);
    } catch (e) {
      console.log(e);
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const allItems = await Reservation.findAll();

    return res.json(allItems);
  }

  async getOne(req, res) {
    const id = req.params.id;

    const oneItems = await Reservation.findOne({ where: { id } });

    res.json(oneItems);
  }

}

module.exports = new ReservationController();
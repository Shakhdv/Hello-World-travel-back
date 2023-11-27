const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

module.exports.usersController = {
  getOneUser: async (req, res) => {
    try {
      const users = await User.findById(req.user.id).populate([
        "tours.tour",
        "excursions",
      ]);
      res.json(users);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().populate(["tours.tour", "excursions"]);
      res.json(users);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addUsers: async (req, res) => {
    const { login, password, admin } = req.body;
    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));

    const user = await User.create({
      login: login,
      password: hash,
      avatar: req.file.path,
      admin,
    });

    res.json(user);
  },
  addTours: async (req, res) => {
    const { tour, date, id } = req.body;

    const user = await User.findByIdAndUpdate(id, {
      $push: {
        tours: {
          tour,
          date,
        },
      },
    });

    res.json(user);
  },
  login: async (req, res) => {
    const { login, password } = req.body;
    const candidate = await User.findOne({ login: login });
    if (!candidate) {
      return res.status(401).json({ error: "неверный логин" });
    }

    const valid = await bcrypt.compare(password, candidate.password);
    if (!valid) {
      return res.status(401).json({ error: "неверный пароль" });
    }
    const payload = {
      id: candidate._id,
    };
    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h",
    });
    res.json({ token, id: payload.id });
  },
  // confirmTour: async (req, res) => {
    // try {
  //     const { id } = req.params;
  //     const { broneId } = req.body;
  //     const user = await User.findById(id);
  //     await user.tours.map(async (tour) => {
  //       // console.log(tour);
  //       if (tour._id.toString() === broneId) {
  //         console.log(tour);

  //         await User.findByIdAndUpdate(id, {
  //           tours: [...User.user.tours, { confirmed: !req.body.confirmed }],
  //         });
  //         // tour.confirmed = !req.body.confirmed;
  //         return await res.json(tour.confirmed);
  //       }
  //     });
  //     return res.status(401).json("ошибка. Нет доступа");
  //   } catch (error) {
  //     return res.status(401).json({ error: "Ошибка: " + error.message });
  //   }
  // },
  confirmTour: async (req, res) => {
    try {
      const { id } = req.params;
      const { broneId, date, tourId } = req.body;
      const user = await User.findById(id)

      const tours = await user.tours.map(item => {
        if(item._id.toString() === broneId) {
          console.log(item);
          item.confirmed = true
        }
        return item
      });

      await user.updateOne({tours: tours})
      await user.save()

      const updatedUser = await User.findById(id)
      return await res.json(updatedUser);
    } catch (error) {
      return res.status(401).json({ error: "Ошибка: " + error.message });
    }
  },
  // confirmTour: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { broneId, date, tourId } = req.body;
  //     const user = await User.findById(id);
  //     // console.log(user.tours);
  //     const tours = user.tours;
  //     await User.findByIdAndUpdate(id, { confirmed: true });
  //     // user.tours.map((tour) => {
  //     //   if (tour._id === broneId) {
  //     //     console.log(tour);
  //     //      tour.updateOne(
  //     //       { _id: broneId, confirmed: false, date: date, tour: tourId },
  //     //       { $set: { confirmed: true } }
  //     //     );
  //     //   }
  //     // });

  //     // console.log(user.tours);
  //     return await res.json(tours);
  //   } catch (error) {
  //     return res.status(401).json({ error: "Ошибка: " + error.message });
  //   }
  // },
};

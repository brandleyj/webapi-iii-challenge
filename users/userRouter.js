const express = "express";

const router = express.Router();

router.post("/", (req, res) => {});

router.post("/:id/posts", (req, res) => {});

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.get("/:id/posts", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

//custom middleware

function validateUserId(req, res, next) {
	const { id } = req.params;
	userDb
		.getById(Number(id))
		.then(res => {
			if (res) {
				req.user = res;
				next();
			} else {
				res.status(500).json({ message: "invalid user id" });
			}
		})
		.catch(err => {
			res
				.status(500)
				.json({ message: "The user information could not be modified." });
		});
}

function validateUser(req, res, next) {
	if (!req.body) {
		res.status(400).json({ message: "missing body data" });
	}
	if (!req.body.name) {
		res.status(400).json({ messsage: "missing name data" });
	}
}

function validatePost(req, res, next) {
	if (!req.body.text) {
		res.status(400).json({ message: "missing name data" });
	}
	if (!req.body) {
		res.status(400).json({ message: "missing body data" });
	}
}

module.exports = router;

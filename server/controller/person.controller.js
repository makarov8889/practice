const db = require("../db")

class PersonController {
    async createPerson(req, res) {
        const {mail, password} = req.body;

        console.log(mail, password);

        const newPerson = await db.query("INSERT INTO person (mail, password) values ($1, $2) RETURNING *", [mail, password]);

        res.json(newPerson.rows[0]);
    }

    async getPersons(req, res) {
        const persons = await db.query("SELECT * FROM person");
        
        res.json(persons.rows);
    }

    async getOnePerson(req, res) {
        const id = req.params.id;
        const persons = await db.query("SELECT * FROM person WHERE id = $1", [id]);

        res.json(persons.rows[0]);
    }

    async updatePerson(req, res) {
        const {id, mail, password} = req.body;
        const persons = await db.query("UPDATE person set mail = $1, password = $2 where id = $3 RETURNING *", [mail, password, id]);

        res.json(persons.rows[0]);
    }

    async deletePerson(req, res) {
        const id = req.params.id;
        const persons = await db.query("DELETE FROM person WHERE id = $1", [id]);

        res.json(persons.rows[0]);
    }
}

module.exports = new PersonController();
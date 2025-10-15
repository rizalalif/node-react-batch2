const { db } = require("../config/db")

const getNilai = (req, res) => {
    const query = 'SELECT * FROM nilai_mahasiswa'
    const data = db.query(query, (err, result) => {
        if (err) throw err
        res.status(200).json({
            status: "OK",
            data: result
        })
    })

}

const getNilaiById = (req, res) => {
    const { id } = req.params
    const query = `SELECT * FROM movies where id = ${parseInt(id)}`
    const data = db.query(query, (err, result) => {
        if (err) throw err
        console.log(result);
        res.status(200).json(result)
    })
}

const addNilai = (req, res) => {
    let { nama, mataKuliah, nilai } = req.body
    mataKuliah = req.body.mata_kuliah


    let index = indexing(nilai);

    let data = {
        nama,
        mataKuliah,
        nilai,
        index,
    }
    if (data.nilai < 0 && data.nilai > 100) {
        res.status(401).json({
            error: 'Bad Request',
            message: 'nilai hanya dalam rentang 0 - 100 !'
        })
    }

    const query = `INSERT INTO nilai_mahasiswa (nama,mata_kuliah,nilai,indeks_nilai,created_at,updated_at) VALUES ('${data.nama}','${data.mataKuliah}','${data.nilai}','${data.index}',now(),now())`
    db.query(query, (err, result) => {
        if (err) throw err
        res.status(200).json({
            status: 'OK',
            message: 'data added'
        })
    })

}

const updateNilai = (req, res) => {
    let { id } = req.params
    let fieldToUpdate = req.body
    let keys = Object.keys(fieldToUpdate)

    if (fieldToUpdate.nilai) {
        fieldToUpdate.indeks_nilai = indexing(fieldToUpdate.nilai);
        keys.push("indeks_nilai")
    }

    let clauses = keys.map(key => `${key}=?`).join(',')
    let values = keys.map(key => fieldToUpdate[key])
    values.push(id)

    const query = `UPDATE nilai_mahasiswa SET ${clauses}, updated_at=now() WHERE id = ?`
    db.query(query, values, (err, result) => {
        if (err) throw err
        res.status(200).json({
            status: 'OK',
            message: 'nilai updates!',
            data: result
        })
    })

}

const deleteNilai = (req, res) => {
    const { id } = req.params

    const query = `DELETE FROM nilai_mahasiswa WHERE id=?`
    db.query(query, parseInt(id), (err, result) => {
        if (err) throw err
        res.status(200).json({
            status: 'OK',
            message: 'nilai deleted!',
        })
    })

}

function indexing(nilai) {
    if (nilai >= 80) {
        return 'A'
    } else if (nilai >= 70 && nilai < 80) {
        return 'B'
    } else if (nilai >= 60 && nilai < 70) {
        return 'C'
    } else if (nilai >= 50 && nilai < 60) {
        return 'D'
    } else if (nilai < 50) {
        return 'E'
    }
}
module.exports = { getNilai, getNilaiById, addNilai, updateNilai, deleteNilai }
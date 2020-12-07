class Processor {
    static Process(data) {
        let r = data.split("\n");
        r.pop();
        let rows = [];

        r.forEach(row => {
            let arr = row.split(",");
            rows.push(arr);
        });

        return rows;
    }
}

module.exports = Processor;
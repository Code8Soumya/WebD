const fs = require("fs");  


const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter Message</title><head>");
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
            console.log(chunk);
        });
        return req.on("end", () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const msg = parseBody.split("=")[1];
            fs.writeFile("learning/message.txt", msg, () => {
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
            })
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title><head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
}

module.exports = {
    handler : requestHandler,
}
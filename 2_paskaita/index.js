const express = required("esxpress");
const app = express();
const port = 3000;

// req - request - duomenys kuriuos paduoda kviečiantysis pvz. POST user duomenys ar validacijos raktas
// res -vresponse - duomenys kuriuos grąžinam kai kviečia mūsų API keliu "/"
// pirmas argumentas - kelias į mūsų API "/"

app.get("/", (req, res)=> {
   res.send("Hello World!");
})
app.listen(port, () => {
    console.log('Server is running on the ${port} port');
});
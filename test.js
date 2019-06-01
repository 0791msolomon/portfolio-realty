const axios = require("axios");
const getAll = async () => {
  try {
    let response = await axios.get("http://localhost:5000/api/realty");
    let arr = [];
    response.data.map(item => {
      arr.push(item._id);
    });
    let promiseArr = arr.map(item => {
      axios
        .put(`http://localhost:5000/api/realty/home/${item}`)
        .then(response => {
          console.log("good");
        })
        .catch(err => {
          console.log(err);
        });
    });
    Promise.all(promiseArr)
      .then(res => {
        console.log("success");
      })
      .catch(err => {
        console.log("failed");
      });
  } catch (err) {
    console.log(err);
  }
};
// getAll();

const checker = async () => {
  try {
    let response = await axios.get("http://localhost:5000/api/realty");
    console.table(response.data);
  } catch (err) {
    console.log(err);
  }
};
// checker();

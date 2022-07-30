import React from "react";
import axios from "axios";

function ApiPoint() {
  return axios
    .get(
      "https://api-university-2022.beecost.vn/university/university_suggestion?subject_group_name=A01&score=26&fbclid=IwAR0a7X22vvT-5bqXkStKj5cSODuzCFqzcLf3EtigbLKPHwz4bxLmrWUU8GA"
    )
    .then((res) => res.data);
}

export default ApiPoint;
